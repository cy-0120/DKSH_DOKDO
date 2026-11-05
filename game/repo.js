// 게임이 올라간 GitHub 저장소를 환경변수(GAME_REPO_URL)에서 읽는 서버용 파일.
// .env.local 에는 저장소 링크만 적는다.  예) GAME_REPO_URL=https://github.com/소유자/저장소
// 올바른 GitHub 저장소 주소가 아니거나 값이 비어 있으면 null 을 돌려주고, 이때 다운로드 버튼 자리에는 "게임 준비중"이 표시된다.

const REPO_PATTERN =
  /^https:\/\/github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+?)(?:\.git)?\/?$/;

export function getGameRepo() {
  const match = REPO_PATTERN.exec((process.env.GAME_REPO_URL ?? "").trim());
  if (!match) return null;
  const [, owner, repo] = match;
  return { owner, repo, pageUrl: `https://github.com/${owner}/${repo}` };
}
