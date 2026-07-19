const KEY_DATA = [
  { key: '좌표', val: '북위 37° 14′ · 동경 131° 52′' },
  { key: '구성', val: '동도, 서도 및 89개 부속 도서' },
  { key: '총 면적', val: '약 187,554㎡' },
  { key: '최고 높이', val: '서도 대한봉 168.5m' },
  { key: '형성 시기', val: '약 460만 년 전 (해저 화산 활동)' },
  { key: '천연기념물', val: '제336호 「독도 천연보호구역」' },
  { key: '연평균 기온', val: '약 12.4℃' },
  { key: '연평균 강수량', val: '약 1,383.4mm' },
];

const RECORDS = [
  {
    title: '독도 최초 주민, 최종덕',
    desc: '1981년 10월 14일 최종덕이 주민등록상 주소지를 독도로 옮기며 독도 최초의 주민이 되었습니다. 실효 지배를 보여주는 상징적인 기록입니다.',
    url: 'https://www.dokdo.re.kr/home/cms/cmsCont.do?cntnts_sn=69',
  },
  {
    title: '접안시설(선착장) 준공',
    desc: '1996년 착공해 1997년 준공된 접안시설은 500톤급 선박이 정박할 수 있는 길이 80m 규모로, 독도에 대한 상시적인 관리와 접근을 가능하게 했습니다.',
    url: 'https://dokdo.mofa.go.kr/kor/introduce/facility.jsp',
  },
];

const GLOSSARY = [
  {
    term: '우산국(于山國)',
    desc: '512년 신라에 복속되기 전, 울릉도와 독도 일대를 다스리던 고대 소국입니다. 「삼국사기」에 이사부의 우산국 정벌 기록이 남아 있습니다.',
    url: 'http://contents.nahf.or.kr/item/item.do?levelId=sd.d_0079_0010',
  },
  {
    term: '석도(石島)',
    desc: '1900년 대한제국 칙령 제41호에 등장하는 독도의 옛 이름으로, 돌로 이루어진 섬이라는 뜻입니다. 방언 "독섬"을 한자로 옮긴 표현으로 봅니다.',
    url: 'https://contents.history.go.kr/id/hm_122_0020',
  },
  {
    term: 'SCAPIN 제677호',
    desc: '1946년 연합국 최고사령관이 발령한 훈령(SCAPIN)으로, 독도를 일본의 통치·행정 범위에서 명시적으로 제외했습니다.',
    url: 'https://theme.archives.go.kr/next/dokdo/secondaryList03.do',
  },
  {
    term: '평화선(이승만 라인)',
    desc: '1952년 이승만 대통령이 선포한 「인접 해양에 대한 주권에 관한 선언」으로, 독도를 포함한 해역에 대한민국의 주권을 명시했습니다.',
    url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148686344',
  },
  {
    term: '다케시마의 날',
    desc: '2005년 일본 시마네현이 1905년 불법 편입 100주년에 맞춰 제정한 조례상 기념일(2월 22일)로, 독도 영유권을 주장하는 행사가 열립니다.',
    url: 'https://www.korea.kr/news/contributePolicyView.do?newsId=148899078',
  },
  {
    term: '실효 지배',
    desc: '한 국가가 특정 영토를 실제로 점유·관리·통치하는 상태를 말합니다. 대한민국은 독도경비대 상주, 주민등록, 접안시설 운영 등으로 독도를 실효 지배하고 있습니다.',
    url: 'https://www.korea.kr/news/policyNewsView.do?newsId=148655431',
  },
];

const REFERENCES = [
  {
    title: '대한민국 외교부 독도',
    url: 'https://dokdo.mofa.go.kr',
    desc: '독도의 자연환경, 역사, 우리 영토인 근거 등을 소개하는 외교부 공식 사이트',
  },
  {
    title: '동북아역사재단 독도 아카이브',
    url: 'https://contents.nahf.or.kr/dokdo',
    desc: '독도 관련 역사 자료와 연구 콘텐츠를 제공하는 아카이브',
  },
  {
    title: '독도 이야기 - 경상북도',
    url: 'https://www.dokdo.re.kr',
    desc: '독도의 생태계와 자연환경을 소개하는 경상북도 독도 사이트',
  },
  {
    title: '독도의 역사 - 동북아역사넷',
    url: 'https://contents.nahf.or.kr/id/NAHF.eddok.d_0002_0030_0020',
    desc: '동북아역사재단이 정리한 독도 역사 개괄',
  },
  {
    title: '독도의 지속가능한 이용에 관한 법률 - 국가법령정보센터',
    url: 'https://www.law.go.kr/lsInfoP.do?lsiSeq=148466',
    desc: '독도 관리·보전의 법적 근거가 되는 현행 법률 원문',
  },
  {
    title: '독도의용수비대 - 한국민족문화대백과사전',
    url: 'https://encykorea.aks.ac.kr/Article/E0073512',
    desc: '1953~1956년 독도를 지킨 민간 수비대의 활동 기록',
  },
];

export const metadata = {
  title: '자료실 | 독도',
  description: '독도의 핵심 데이터, 기록, 용어 설명과 참고자료를 모아둔 자료실입니다.',
};

export default function Docs() {
  return (
    <>
      <section className="section" id="docs-intro">
        <div className="container">
          <p className="section__eyebrow">DOCS</p>
          <h1 className="section__title">자료실</h1>
          <p className="section__lead">
            독도에 관한 데이터를 한눈에 확인하고, 주요 용어를 익히고, 더 알아보고 싶다면 아래
            참고자료를 방문해 보세요.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="key-data">
        <div className="container">
          <p className="section__eyebrow">DATA</p>
          <h2 className="section__title">데이터</h2>
          <div className="facts__table">
            {KEY_DATA.map((f) => (
              <div className="fact-row" key={f.key}>
                <span className="fact-row__key">{f.key}</span>
                <span className="fact-row__val">{f.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="records">
        <div className="container">
          <p className="section__eyebrow">RECORDS</p>
          <h2 className="section__title">그 밖의 기록</h2>
          <p className="section__lead">
            역사 연표에는 담지 않은, 독도의 실효 지배를 보여주는 부가적인 기록입니다.
          </p>
          <div className="glossary">
            {RECORDS.map((r) => (
              <div className="glossary__item" key={r.title}>
                <a
                  className="glossary__term"
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {r.title}
                  <span className="ext-icon" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <p className="glossary__desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="glossary">
        <div className="container">
          <p className="section__eyebrow">GLOSSARY</p>
          <h2 className="section__title">용어 설명</h2>
          <p className="section__lead">
            독도 역사와 관련해 자주 등장하는 용어를 정리했습니다.
          </p>
          <div className="glossary">
            {GLOSSARY.map((g) => (
              <div className="glossary__item" key={g.term}>
                <a
                  className="glossary__term"
                  href={g.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {g.term}
                  <span className="ext-icon" aria-hidden="true">
                    ↗
                  </span>
                </a>
                <p className="glossary__desc">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="references">
        <div className="container">
          <p className="section__eyebrow">REFERENCES</p>
          <h2 className="section__title">참고자료</h2>
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
