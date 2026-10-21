import { NextResponse } from "next/server";
import { getGameRepo } from "@/game/repo";

// GET /api/download
// 환경변수 GAME_REPO_URL 의 GitHub 저장소에서 "최신 릴리스"의 .exe 파일을 찾아 그 다운로드 주소로 보낸다.
// 파일은 우리 서버를 거치지 않고 GitHub 에서 브라우저로 바로 내려받는다.
export async function GET() {
  const game = getGameRepo();
  if (!game) {
    return NextResponse.json(
      { error: "게임 저장소 링크(GAME_REPO_URL)가 설정되지 않았습니다." },
      { status: 404 },
    );
  }

  // 무엇이든 실패하면(GitHub 점검, 요청 한도 초과, exe 없음 등) 잘못된 링크 대신 릴리스 페이지로 안내한다.
  const releasesPage = `${game.pageUrl}/releases/latest`;

  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "dokdo-web",
    };
    // 선택: 토큰이 있으면 GitHub 요청 한도가 늘어난다(서버에서만 사용, 브라우저로 나가지 않음).
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `https://api.github.com/repos/${game.owner}/${game.repo}/releases/latest`,
      {
        headers,
        // 5분 동안은 결과를 재사용해 GitHub 요청 한도(비로그인 시간당 60회)를 아낀다.
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);

    const release = await res.json();
    const exeFiles = (release.assets ?? []).filter((a) =>
      a.name.toLowerCase().endsWith(".exe"),
    );

    // 파일 이름을 따로 정하면(GAME_ASSET_NAME) 그 파일, 아니면 exe 가 딱 하나일 때만 선택한다.
    // 여러 개인데 이름도 안 정했다면 임의로 고르지 않고 릴리스 페이지로 보낸다.
    const wanted = (process.env.GAME_ASSET_NAME ?? "").trim();
    const asset = wanted
      ? exeFiles.find((a) => a.name === wanted)
      : exeFiles.length === 1
        ? exeFiles[0]
        : null;
    if (!asset) {
      throw new Error(`exe 파일을 하나로 특정하지 못함 (후보 ${exeFiles.length}개)`);
    }

    // GitHub 파일 주소가 맞는지 확인한 뒤에만 이동시킨다.
    const target = new URL(asset.browser_download_url);
    if (target.protocol !== "https:" || target.hostname !== "github.com") {
      throw new Error(`허용되지 않은 다운로드 주소: ${target.hostname}`);
    }

    return NextResponse.redirect(target, 302);
  } catch (error) {
    console.error("[api/download]", error.message);
    return NextResponse.redirect(releasesPage, 302);
  }
}
