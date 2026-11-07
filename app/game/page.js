import Image from "next/image";

const TITLE = "게임 | 독도";
const DESCRIPTION = "독도 게임 콘텐츠는 준비 중입니다. 다음 업데이트를 기다려 주세요.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/game" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

// 게임 콘텐츠가 준비되기 전까지 "COMING SOON" 이미지로 화면을 채운다.
// 다음 업데이트 때 이 파일의 <section> 안을 실제 게임 소개/다운로드로 바꾸면 된다.
export default function GamePage() {
  return (
    <section className="game-soon" id="game">
      <h1 className="game-soon__title">게임</h1>
      <Image
        className="game-soon__image"
        src="/img/coming-soon.png"
        alt="컨텐츠 준비 중입니다. 컨텐츠 내용이 준비가 되지 않았습니다. 가능한 빠른 시일 내에 업데이트하도록 하겠습니다. 감사합니다."
        width={886}
        height={433}
        priority
      />
    </section>
  );
}
