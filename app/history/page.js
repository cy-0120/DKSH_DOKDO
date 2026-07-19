const TIMELINE = [
  {
    year: '512년',
    title: '신라, 우산국을 복속하다',
    desc: '신라 지증왕 13년, 이사부 장군이 우산국(울릉도·독도)을 정벌하여 신라의 영토로 편입했습니다. 「삼국사기」에 기록된 독도 관련 최초의 역사입니다.',
    url: 'https://contents.history.go.kr/front/hm/view.do?levelId=hm_011_0030',
  },
  {
    year: '1454년',
    title: '세종실록지리지에 기록되다',
    desc: '「세종실록지리지」에 우산(于山)과 무릉(武陵) 두 섬이 강원도 울진현 소속으로 명시되어, 독도가 조선의 영토임을 보여줍니다.',
    url: 'https://theme.archives.go.kr/next/dokdo/primaryList03.do',
  },
  {
    year: '1531년',
    title: '팔도총도, 독도를 지도에 담다',
    desc: '「신증동국여지승람」에 실린 「팔도총도(八道總圖)」는 현존하는 우리나라 옛 지도 중 독도(우산도)가 표기된 가장 오래된 지도입니다.',
    url: 'https://contents.nahf.or.kr/id/NAHF.eddok.d_0004_0060_0010',
  },
  {
    year: '1693년',
    title: '안용복, 1차로 일본에 건너가다',
    desc: '울릉도에서 불법 조업 중이던 일본 어민에게 항의하다 일본으로 잡혀간 안용복이 호키주(伯耆州) 태수에게 울릉도와 독도가 조선 땅임을 주장했습니다.',
    url: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_n306760&code=kc_age_30',
  },
  {
    year: '1696년',
    title: '안용복, 2차 도일과 도해금지령',
    desc: '안용복이 독도까지 쫓아온 일본 어민을 문책하고 스스로 일본에 건너가 항의했습니다. 이를 계기로 에도 막부는 울릉도·독도가 조선 땅임을 인정하며 일본인의 도해를 금지했습니다.',
    url: 'https://contents.history.go.kr/mobile/kc/view.do?levelId=kc_n306760&code=kc_age_30',
  },
  {
    year: '1900년',
    title: '대한제국 칙령 제41호',
    desc: '대한제국이 칙령 제41호를 반포하여 울릉도를 울도군으로 승격시키고, 석도(石島, 독도)를 관할구역에 명시했습니다.',
    url: 'https://contents.history.go.kr/id/hm_122_0020',
  },
  {
    year: '1905년',
    title: '일본의 불법 편입 시도',
    desc: '일본은 러일전쟁 중 독도를 무주지라 주장하며 시마네현에 편입하는 고시를 강행했습니다. 대한제국에는 사전 통보나 협의가 전혀 없었던 일방적 조치였습니다.',
    url: 'https://www.korea.kr/news/policyFocusView.do?newsId=148655793&pkgId=49500376',
  },
  {
    year: '1906년',
    title: '심흥택 보고서',
    desc: '울도군수 심흥택은 일본 관리들로부터 독도가 시마네현에 편입되었다는 사실을 통보받고, 이튿날 강원도 관찰사와 정부에 이를 알리며 항의했습니다. 대한제국이 편입 사실을 인지한 최초의 기록입니다.',
    url: 'https://ulleung.grandculture.net/ulleung/toc/GC01500503',
  },
  {
    year: '1946년',
    title: 'SCAPIN 제677호',
    desc: '연합국 최고사령관 각서(SCAPIN) 제677호로 독도가 일본의 통치·행정 범위에서 명시적으로 제외되었습니다.',
    url: 'https://theme.archives.go.kr/next/dokdo/secondaryList03.do',
  },
  {
    year: '1952년',
    title: '평화선(이승만 라인) 선언',
    desc: '이승만 대통령이 「인접 해양에 대한 주권에 관한 선언」(평화선)을 선포해 독도를 포함한 해역에 대한민국의 주권을 명시했습니다.',
    url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148686344',
  },
  {
    year: '1953~1956년',
    title: '독도의용수비대',
    desc: '일본 순시선의 잇단 침범과 영토 표목 설치에 맞서, 홍순칠을 중심으로 한 울릉도 주민 33인이 독도의용수비대를 조직해 독도를 지켰고 영토비를 세웠습니다.',
    url: 'https://encykorea.aks.ac.kr/Article/E0073512',
  },
  {
    year: '1954년',
    title: '독도 등대 설치 · 독도경비대 인수',
    desc: '독도에 등대가 처음 설치되었고, 독도의용수비대의 활동이 끝난 뒤 독도경비대가 경비 임무를 이어받아 오늘날까지 상주하고 있습니다.',
    url: 'https://dokdo.mofa.go.kr/kor/introduce/facility.jsp',
  },
  {
    year: '2005년',
    title: '일본, "다케시마의 날" 조례 제정',
    desc: '일본 시마네현이 1905년 불법 편입 100주년에 맞춰 2월 22일을 "다케시마의 날"로 정하는 조례를 제정했습니다. 대한민국 정부는 이에 대해 지속적으로 항의하고 있습니다.',
    url: 'https://www.korea.kr/news/contributePolicyView.do?newsId=148899078',
  },
  {
    year: '2012년',
    title: '현직 대통령 최초 독도 방문',
    desc: '이명박 대통령이 헬기로 독도에 방문했습니다. 전현직 대통령을 통틀어 최초의 독도 방문으로, 대한민국의 실효 지배를 대내외에 보여준 사건입니다.',
    url: 'https://www.ehistory.go.kr/view/movie?mediasrcgbn=KV&mediaid=29999484&mediadtl=39784&mediagbn=DT',
  },
];

export const metadata = {
  title: '독도의 역사 | 독도',
  description:
    '512년 우산국 복속부터 오늘날까지, 독도가 대한민국의 영토임을 뒷받침하는 역사를 연표로 소개합니다.',
};

export default function History() {
  return (
    <>
      <section className="section" id="history-intro">
        <div className="container">
          <p className="section__eyebrow">HISTORY</p>
          <h1 className="section__title">독도의 역사</h1>
          <p className="section__lead">
            512년 신라의 우산국 복속부터 2012년 현직 대통령의 방문에 이르기까지, 독도가
            대한민국의 영토임을 뒷받침하는 역사적 발자취를 살펴봅니다. 각 항목의 제목을 누르면
            관련 자료로 이동합니다.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="timeline">
        <div className="container">
          <div className="timeline">
            {TIMELINE.map((item) => (
              <div className="timeline__item" key={item.year}>
                <div className="timeline__year">{item.year}</div>
                <div className="timeline__title">
                  <a
                    className="timeline__title-link"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                    <span className="ext-icon" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
                <p className="timeline__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
