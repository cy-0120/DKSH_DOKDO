import Link from "next/link";
import TimelineList from "@/components/TimelineList";

// 논란·현안: 연표(/history)와 따로 보여주는 독도 관련 논란 목록.
// 새 논란을 추가할 때는 이 배열에 시간 순서대로 넣는다. url 은 있을 때만 적는다.
const ISSUES = [
  {
    year: "1951년",
    title: "샌프란시스코 강화조약과 러스크 서한",
    desc: "1951년 샌프란시스코 강화조약은 일본이 포기할 조선 영토로 제주도·거문도·울릉도를 명시하고 독도는 언급하지 않았습니다.\n일본은 이를 근거로 독도가 포기 대상이 아니었다고 주장하고, 같은 해 미국이 한국 정부의 요청을 받아들이지 않은 '러스크 서한'도 인용합니다.\n동북아역사재단은 1949년 시볼드의 제안과 러스크 서한이 일시적으로 왜곡된 결과일 뿐이라는 입장입니다.",
  },
  {
    year: "1954년 9월~",
    title: "일본의 국제사법재판소(ICJ) 회부 제안",
    desc: "일본은 1954년 9월, 1962년 3월, 2012년 8월 세 차례 독도 문제를 국제사법재판소에서 가리자고 제안했습니다.\n한국 정부는 독도가 분쟁 대상이 아니라며 응하지 않았고, ICJ는 상대국의 동의가 없으면 영토 분쟁을 재판할 수 없습니다.",
  },
  {
    year: "2005년 3월",
    title: '일본, "다케시마의 날" 조례 제정',
    desc: '일본 시마네현이 1905년 불법 편입 100주년에 맞춰 2월 22일을 "다케시마의 날"로 정하는 조례를 제정했습니다.\n대한민국 정부는 이에 대해 지속적으로 항의하고 있습니다.',
    url: "https://www.korea.kr/news/contributePolicyView.do?newsId=148899078",
  },
  {
    year: "2005년~",
    title: "일본 방위백서의 영유권 주장",
    desc: "일본은 2005년 방위백서에 독도 영유권 주장을 처음 싣고 해마다 되풀이하고 있습니다.\n2026년 8월 4일 올해 방위백서에서도 독도를 자국 영토로 기술하자 외교부와 국방부가 주한일본대사관 총괄공사와 방위주재관을 불러 항의하고 철회를 촉구했습니다.",
    url: "https://www.khan.co.kr/article/202608041349001",
  },
  {
    year: "2008년 7월~",
    title: "일본 학습지도요령·교과서의 독도 기술",
    desc: "일본 문부과학성은 2008년 7월 중학교 학습지도요령 해설서에 독도 영유권을 명기했고, 2010년 5월에는 초등학교 교과서에도 독도를 일본 영토로 기술하도록 했습니다.",
  },
  {
    year: "2008년 7월",
    title: "미국 지명위원회(BGN) '주권 미지정' 표기",
    desc: "미국 지명위원회가 데이터베이스에서 독도를 '주권 미지정' 지역으로 바꿨다가, 한국의 항의가 이어지자 부시 대통령이 검토를 지시해 7월 31일 이전 상태로 되돌렸습니다.\n다만 영문 명칭은 '리앙쿠르암'으로 남아 있다는 지적이 있습니다.",
    url: "https://www.koreatimes.co.kr/southkorea/20080730/bush-orders-review-on-us-dokdo-stance",
  },
  {
    year: "2021년 7월",
    title: "도쿄올림픽 공식 지도의 독도 표기",
    desc: "도쿄올림픽 조직위원회가 공식 홈페이지 지도에 독도를 일본 영토처럼 표시해 정부와 대한체육회가 IOC에 항의했습니다.\nIOC는 정치적 의도가 없는 지형학적 표현이라는 취지로 답했고, 같은 시기 우크라이나가 항의한 크림반도 표기는 수정해 이중 잣대라는 비판이 나왔습니다.",
    url: "https://www.hankyung.com/amp/202107245479Y",
  },
  {
    year: "2026년 10월",
    title: "세계지도 '이퀄어스'에서 독도 삭제 논란",
    desc: "연합뉴스·경향신문 보도에 따르면 사이버 외교사절단 반크가 세계지도 '이퀄어스' 한국어판에서 독도 표기가 사라진 것을 확인하고(10월 8일) 공식 항의하며 원상 복구를 요구했습니다.\n제작사는 한·일 대사관 관계자와 협의해 삭제했다고 답했으나, 외교부는 협의하거나 합의한 적이 없다며 독도가 \"역사적·지리적·국제법적으로 명백한 우리 고유의 영토\"라고 밝혔습니다.",
    url: "https://www.khan.co.kr/article/202610091416011",
  },
];

const TITLE = "독도 논란·현안 | 독도";
const DESCRIPTION =
  "일본의 영유권 주장과 지도·교과서 표기 문제 등 독도를 둘러싼 논란과 현안을 모아 정리합니다.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/history/issues" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function HistoryIssues() {
  return (
    <>
      <section className="section" id="issues-intro">
        <div className="container">
          <h1 className="section__title">논란·현안</h1>
          <p className="section__lead">
            독도를 둘러싸고 지금까지 이어지는 논란과 현안을 시간 순서로 모았습니다.
            <br />↗ 표시가 있는 제목을 누르면 관련 자료로 이동합니다.
          </p>
          <Link className="issues-link" href="/history">
            <span aria-hidden="true">←</span> 독도의 역사로 돌아가기
          </Link>
        </div>
      </section>

      <section className="section section--alt" id="issues-list">
        <div className="container">
          <TimelineList items={ISSUES} />
        </div>
      </section>
    </>
  );
}
