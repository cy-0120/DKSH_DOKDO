import Link from "next/link";
import TimelineList from "@/components/TimelineList";

const TIMELINE = [
  {
    year: "512년",
    title: "신라의 우산국 복속",
    desc: "신라 지증왕 13년, 이사부 장군이 우산국(울릉도·독도)을 정벌하여 신라의 영토로 편입했습니다.\n「삼국사기」에 기록된 독도 관련 최초의 역사입니다.",
    url: "https://contents.history.go.kr/front/hm/view.do?levelId=hm_011_0030",
  },
  {
    year: "1145년",
    title: "「삼국사기」 편찬",
    desc: "김부식이 편찬한 「삼국사기」에 512년 우산국 복속 사실이 기록되어 독도가 신라 때부터 우리 영토였음을 문헌으로 뒷받침합니다.",
  },
  {
    year: "1451년",
    title: "「고려사」 지리지의 울진현 기록",
    desc: "「고려사」 지(志) 권제12 지리3 울진현 조에 우산(于山)·무릉(武陵) 두 섬이 현의 정동쪽 바다 한가운데에 있고 날씨가 맑으면 바라볼 수 있다고 적혀 있습니다.\n고려 때에도 두 섬을 울진현에 딸린 땅으로 파악했음을 보여줍니다.",
  },
  {
    year: "1454년",
    title: "세종실록지리지의 기록",
    desc: "「세종실록지리지」에 우산(于山)과 무릉(武陵) 두 섬이 강원도 울진현 소속으로 명시되어 독도가 조선의 영토임을 보여줍니다.",
    url: "https://theme.archives.go.kr/next/dokdo/primaryList03.do",
  },
  {
    year: "1531년",
    title: "팔도총도",
    desc: "「신증동국여지승람」에 실린 「팔도총도(八道總圖)」는 현존하는 우리나라 옛 지도 중 독도(우산도)가 표기된 가장 오래된 지도입니다.",
    url: "https://contents.nahf.or.kr/id/NAHF.eddok.d_0004_0060_0010",
  },
  {
    year: "1693년",
    title: "안용복의 1차 일본 항의",
    desc: "울릉도에서 불법 조업 중이던 일본 어민에게 항의하다 일본으로 잡혀간 안용복이 호키주(伯耆州) 태수에게 울릉도와 독도가 조선 땅임을 주장했습니다.",
    url: "https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_n306760&code=kc_age_30",
  },
  {
    year: "1695년 12월",
    title: "돗토리번 답변서",
    desc: "에도 막부가 다케시마(울릉도)가 돗토리번의 영지에 속하는지 묻자, 돗토리번은 다케시마와 마쓰시마(독도) 두 섬 모두 이나바·호키 두 지방에 속하지 않는다고 답했습니다.\n일본 쪽 공식 답변에서 독도가 일본 영토 밖에 있었음을 보여주는 자료입니다.",
  },
  {
    year: "1696년 1월",
    title: "일본 막부의 도해금지령",
    desc: "에도 막부가 자국 어민들에게 울릉도·독도 방면 도해를 금지하는 명령(죽도도해금지령)을 내렸습니다.\n일본 스스로 두 섬이 조선의 영토임을 인정한 역사적 근거로 평가됩니다.",
  },
  {
    year: "1696년",
    title: "안용복의 2차 일본 항의와 결과",
    desc: "안용복이 독도까지 쫓아온 일본 어민을 문책하고 스스로 일본에 건너가 항의했습니다.\n이를 계기로 에도 막부는 울릉도·독도가 조선 땅임을 인정하며 일본인의 도해를 금지했습니다.",
    url: "https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_n306760&code=kc_age_30",
  },
  {
    year: "1696년경",
    title: "원록각서(元祿覺書) 작성",
    desc: '안용복 일행이 오키섬에 도착하자 일본 관리들이 이들을 심문하고 그 내용을 기록한 문서입니다.\n안용복이 "울릉도와 독도(당시 마쓰시마)는 조선 강원도에 속한다"고 진술한 내용이 담겨 있어, 일본 측이 작성한 문서임에도 독도가 조선 영토였음을 뒷받침하는 사료로 평가됩니다.\n원제는 「원록 9 병자년 조선주착안일권지각서」입니다.',
  },
  {
    year: "1877년 3월",
    title: "태정관지령",
    desc: '일본의 최고 행정기관 태정관(太政官)이 내무성에 "다케시마(울릉도) 외 일도(一島, 독도)는 일본과 관계없다"는 지령을 내렸습니다.\n일본 정부 스스로 독도가 자국 영토가 아님을 공식 인정한 근대 기록입니다.',
    url: "https://dokdo.mofa.go.kr/kor/pds/part06_view09.jsp",
  },
  {
    year: "1877년 3월",
    title: "기죽도약도(磯竹島略圖)",
    desc: "일본 내무성이 조사해 태정관에 올린 문서에 첨부된 지도로, 울릉도(기죽도)와 독도(송도)가 함께 그려져 있습니다.\n태정관은 이 문서를 검토한 뒤 두 섬이 일본과 관계없다는 지령을 내렸습니다.",
  },
  {
    year: "1900년 10월 25일",
    title: "대한제국 칙령 제41호",
    desc: "대한제국이 칙령 제41호를 반포하여 울릉도를 울도군으로 승격시키고, 석도(石島, 독도)를 관할구역에 명시했습니다.",
    url: "https://contents.history.go.kr/id/hm_122_0020",
  },
  {
    year: "1905년 2월 22일",
    title: "일본의 불법 편입 시도",
    desc: "일본은 러일전쟁 중 독도를 무주지라 주장하며 시마네현에 편입하는 고시를 강행했습니다.\n대한제국에는 사전 통보나 협의가 전혀 없었던 일방적 조치였습니다.",
    url: "https://www.korea.kr/news/policyFocusView.do?newsId=148655793&pkgId=49500376",
  },
  {
    year: "1906년 3월",
    title: "심흥택 보고서",
    desc: "울도군수 심흥택은 일본 관리들로부터 독도가 시마네현에 편입되었다는 사실을 통보받고 이튿날 강원도 관찰사와 정부에 이를 알리며 항의했습니다.\n대한제국이 편입 사실을 인지한 최초의 기록입니다.",
    url: "https://ulleung.grandculture.net/ulleung/toc/GC01500503",
  },
  {
    year: "1945년 8월 15일",
    title: "광복",
    desc: "일본의 패망으로 한반도가 광복을 맞으며, 일본이 불법적으로 편입을 주장했던 독도 역시 우리 영토로 되돌아올 기반이 마련되었습니다.",
  },
  {
    year: "1946년 1월",
    title: "연합국 최고사령관 각서 제677호 (SCAPIN)",
    desc: "연합국 최고사령관 각서(SCAPIN) 제677호로 독도가 일본의 통치·행정 범위에서 명시적으로 제외되었습니다.",
    url: "https://theme.archives.go.kr/next/dokdo/secondaryList03.do",
  },
  {
    year: "1946년",
    title: "울릉도사의 독도 공문",
    desc: "보도에 따르면 울릉도 행정을 맡았던 울릉도사가 경상북도 지사에게 보낸 공문으로, 광복 이후 독도 상황을 언급한 최초의 공문으로 여겨집니다.\n독도가 울릉도 소속임을 확인하고, 중앙 군정청이 일본 정부와 교섭해 이를 공표해 달라는 내용이 담겨 있습니다.\n2026년 7월 동북아역사재단이 공개한 자료 중 하나입니다.",
    url: "https://www.hani.co.kr/arti/culture/culture_general/1267139.html",
  },
  {
    year: "1948년 6월 8일",
    title: "독도 폭격 사건",
    desc: "6월 8일, 미군 폭격기가 독도 근해에서 연습 폭격을 하던 중 인근에서 조업하던 어민 14명이 숨지고 다수가 다쳤습니다.\n대한민국 정부 수립 이전 미군정 시기에 벌어진 참사입니다.\n2026년 7월 동북아역사재단이 미국 국립문서기록관리청(NARA)에서 찾아낸 222쪽 분량의 기밀문서를 처음 공개했습니다.\n보도에 따르면 미 극동공군사령부(FEAF)가 1948년 6월 24일 작성한 폭격 사건 조사 보고서에 독도가 한국의 일부로 명확히 확립되었다는 내용이 담겨 있어, 당시 미국도 독도를 한국 영토로 인식했음을 보여줍니다.",
    url: "https://www.hani.co.kr/arti/culture/culture_general/1267139.html",
  },
  {
    year: "1948년 8월",
    title: "대한민국 정부 수립",
    desc: "대한민국 정부가 수립되며 독도는 대한민국의 관할 영토로 자리매김했습니다.",
  },
  {
    year: "1952년 1월 18일",
    title: "평화선(이승만 라인) 선언",
    desc: "이승만 대통령이 「인접 해양에 대한 주권에 관한 선언」(평화선)을 선포해 독도를 포함한 해역에 대한민국의 주권을 명시했습니다.",
    url: "https://www.korea.kr/news/policyNewsView.do?newsId=148686344",
  },
  {
    year: "1953년 4월",
    title: "독도의용수비대",
    desc: "일본 순시선의 잇단 침범과 영토 표목 설치에 맞서, 홍순칠을 중심으로 한 울릉도 주민 33인이 독도의용수비대를 조직해 독도를 지켰고 영토비를 세웠습니다.",
    url: "https://encykorea.aks.ac.kr/Article/E0073512",
  },
  {
    year: "1954년",
    title: "독도 등대 설치 · 독도경비대 인수",
    desc: "독도에 등대가 처음 설치되었고, 독도의용수비대의 활동이 끝난 뒤 독도경비대가 경비 임무를 이어받아 오늘날까지 상주하고 있습니다.",
    url: "https://dokdo.mofa.go.kr/kor/introduce/facility.jsp",
  },
  {
    year: "1956년 12월",
    title: "독도경비대, 임무 정식 인수",
    desc: "독도의용수비대가 3년여의 활동을 마치고 임무를 국립경찰 독도경비대에 정식으로 인계했습니다.",
  },
  {
    year: "2012년 8월",
    title: "현직 대통령 최초 독도 방문",
    desc: "이명박 대통령이 헬기로 독도에 방문했습니다.\n전현직 대통령을 통틀어 최초의 독도 방문으로 대한민국의 실효 지배를 대내외에 보여준 사건입니다.",
    url: "https://www.ehistory.go.kr/view/movie?mediasrcgbn=KV&mediaid=29999484&mediadtl=39784&mediagbn=DT",
  },
];

const REFERENCES = [
  {
    title: "대한민국 외교부 독도",
    url: "https://dokdo.mofa.go.kr",
    desc: "독도의 역사, 국제법적 근거와 정부의 기본 입장을 소개하는 외교부 공식 사이트",
  },
  {
    title: "국가기록원 독도 기록",
    url: "https://theme.archives.go.kr/next/koreaOfRecord/dokdo.do",
    desc: "국가기록원이 정리한 독도 관련 역사·국제법 기록과 실효 지배 현황",
  },
  {
    title: "우리역사넷 - 국사편찬위원회",
    url: "https://contents.history.go.kr",
    desc: "국사편찬위원회가 운영하는 한국사 학습 포털로, 이 연표에 인용된 사료 다수의 출처",
  },
  {
    title: "동북아역사재단 독도 아카이브",
    url: "https://contents.nahf.or.kr/dokdo",
    desc: "독도 관련 역사 자료와 연구 콘텐츠를 제공하는 아카이브",
  },
  {
    title: "대한민국 정책브리핑",
    url: "https://www.korea.kr",
    desc: "평화선, 다케시마의 날 등 독도 관련 정부 정책과 보도자료를 제공하는 정책 포털",
  },
  {
    title: "디지털울릉문화대전",
    url: "https://ulleung.grandculture.net",
    desc: "한국학중앙연구원이 구축한 울릉도·독도 지역문화 백과사전",
  },
  {
    title: "한국민족문화대백과사전",
    url: "https://encykorea.aks.ac.kr",
    desc: "독도의용수비대 등 독도 관련 인물·사건을 정리한 백과사전",
  },
  {
    title: "e영상역사관",
    url: "https://www.ehistory.go.kr",
    desc: "대통령 독도 방문 등 현대사 영상·사진 기록을 제공하는 디지털 아카이브",
  },
];

const TITLE = "독도의 역사 | 독도";
const DESCRIPTION =
  "512년 우산국 복속부터 오늘날까지, 독도가 대한민국의 영토임을 뒷받침하는 역사를 연표로 소개합니다.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/history" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function History() {
  return (
    <>
      <section className="section" id="history-intro">
        <div className="container">
          <h1 className="section__title">독도의 역사</h1>
          <p className="section__lead">
            512년 신라의 우산국 복속부터 독도가 대한민국의 영토임을 뒷받침하는
            역사적 발자취를 살펴봅니다.
            <br />↗ 표시가 있는 제목을 누르면 관련 자료로 이동합니다.
          </p>
          <Link className="issues-link" href="/history/issues">
            논란 보러가기 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="section section--alt" id="timeline">
        <div className="container">
          <TimelineList items={TIMELINE} />
        </div>
      </section>

      <section className="section" id="history-references">
        <div className="container">
          <h2 className="section__title">참고자료</h2>
          <p className="section__lead">
            이 연표를 작성하는 데 참고한 출처입니다.
          </p>
          <div className="gallery__grid gallery__grid--cols-2">
            {REFERENCES.map((ref) => (
              <a
                className="nature-card ref-card"
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                key={ref.url}
              >
                <div className="ref-card__body">
                  <p className="ref-card__title">{ref.title}</p>
                  <p className="ref-card__desc">{ref.desc}</p>
                  <p className="ref-card__url">{ref.url}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
