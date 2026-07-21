import SubNav from '@/components/SubNav';

const VISIT_SECTIONS = [
  { id: 'how-to-visit', label: '방문 방법' },
  { id: 'reservation', label: '예약' },
  { id: 'precautions', label: '주의사항' },
  { id: 'attractions', label: '방문 요소' },
];

const HOW_TO_VISIT = [
  { key: '출발지', val: '울릉도 (여객선터미널)' },
  { key: '이동 수단', val: '울릉도 - 독도 항로 여객선' },
  { key: '사전 예약', val: '필수 (승선 인원 제한)' },
  { key: '상륙 여부', val: '접안시설 및 기상 상황에 따라 당일 결정' },
  { key: '체류 시간', val: '상륙 시 통상 20~30분 내외로 제한 (상황에 따라 변동)' },
];

const PRECAUTIONS = [
  {
    term: '기상 의존',
    desc: '파도와 바람 등 기상 상황에 따라 승선이 취소되거나, 승선 후에도 실제 상륙(접안)이 불발될 수 있습니다.',
  },
  {
    term: '신분증 지참',
    desc: '국내 여행이지만 승선 시 신분증 확인 절차가 있으므로 반드시 신분증을 지참해야 합니다.',
  },
  {
    term: '제한된 체류 시간',
    desc: '상륙이 허가되더라도 체류 시간이 짧게 제한되므로 정해진 동선과 안내에 따라야 합니다.',
  },
  {
    term: '지정 구역 준수',
    desc: '독도경비대의 안내에 따라 지정된 구역 내에서만 관람이 가능하며, 자연환경 보호를 위해 채집·훼손 행위는 금지됩니다.',
  },
  {
    term: '멀미 대비',
    desc: '왕복 항해 시간이 길고 파고가 있는 경우가 많아 사전에 멀미약 등을 준비하는 것이 좋습니다.',
  },
];

const ATTRACTIONS = [
  {
    term: '독도 등대',
    desc: '1954년 설치되어 1998년부터 유인화된 등대로, 독도를 지키는 상징적인 시설입니다.',
  },
  {
    term: '접안시설(선착장)',
    desc: '1996~1997년 준공된 시설로, 500톤급 선박이 접안할 수 있어 독도 방문의 관문 역할을 합니다.',
  },
  {
    term: '독도경비대 초소',
    desc: '독도를 상시 경비하는 독도경비대가 주둔하는 곳으로, 대한민국의 실효 지배를 상징합니다.',
  },
  {
    term: '동도·서도 전경',
    desc: '해저 화산 활동으로 형성된 기암절벽과 89개의 부속 도서를 조망할 수 있습니다.',
  },
  {
    term: '헬기장',
    desc: '1997년 준공된 약 400㎡ 규모의 시설로, 응급 상황 대응과 물자 수송에 활용됩니다.',
  },
];

const TITLE = '독도 방문 안내 | 독도';
const DESCRIPTION = '독도를 방문하는 방법, 예약 사이트, 주의사항과 둘러볼 만한 방문 요소를 안내합니다.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/visit' },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Visit() {
  return (
    <>
      <section className="section" id="visit-intro">
        <div className="container">
          <p className="section__eyebrow">VISIT</p>
          <h1 className="section__title">독도 방문 안내</h1>
          <p className="section__lead">
            독도는 울릉도를 거쳐 방문할 수 있는 우리 영토입니다. 방문 방법부터 예약, 주의사항,
            둘러볼 만한 요소까지 안내합니다.
          </p>
        </div>
      </section>

      <SubNav sections={VISIT_SECTIONS} />

      {/* 방문 방법 */}
      <section className="section section--alt" id="how-to-visit">
        <div className="container">
          <p className="section__eyebrow">HOW TO VISIT</p>
          <h2 className="section__title">방문 방법</h2>
          <p className="section__lead">
            독도는 울릉도에서 출발하는 여객선을 통해 방문할 수 있습니다. 다만 접안시설과 기상
            상황에 따라 실제 상륙 여부가 당일 결정되므로 여유를 두고 계획해야 합니다.
          </p>
          <div className="facts__table">
            {HOW_TO_VISIT.map((f) => (
              <div className="fact-row" key={f.key}>
                <span className="fact-row__key">{f.key}</span>
                <span className="fact-row__val">{f.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 예약 */}
      <section className="section" id="reservation">
        <div className="container">
          <p className="section__eyebrow">RESERVATION</p>
          <h2 className="section__title">예약</h2>
          <p className="section__lead">
            독도 방문(입도)은 아래 사이트에서 사전 예약을 통해 진행합니다.
          </p>
          <div className="gallery__grid gallery__grid--cols-2">
            <a
              className="nature-card ref-card"
              href="https://island.theksa.co.kr/page/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ref-card__body">
                <p className="ref-card__title">울릉도·독도 여객선 예약</p>
                <p className="ref-card__desc">
                  독도 방문(입도) 예약과 승선권 예매를 진행하는 공식 예약 사이트입니다.
                </p>
                <p className="ref-card__url">https://island.theksa.co.kr/page/main</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 주의사항 */}
      <section className="section section--alt" id="precautions">
        <div className="container">
          <p className="section__eyebrow">PRECAUTIONS</p>
          <h2 className="section__title">주의사항</h2>
          <p className="section__lead">
            독도 방문 전 아래 사항을 꼭 확인하세요.
          </p>
          <div className="glossary">
            {PRECAUTIONS.map((p) => (
              <div className="glossary__item" key={p.term}>
                <p className="glossary__term">{p.term}</p>
                <p className="glossary__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 방문 요소 */}
      <section className="section" id="attractions">
        <div className="container">
          <p className="section__eyebrow">ATTRACTIONS</p>
          <h2 className="section__title">방문 요소</h2>
          <p className="section__lead">
            독도에서 둘러볼 수 있는 주요 시설과 풍경입니다.
          </p>
          <div className="glossary">
            {ATTRACTIONS.map((a) => (
              <div className="glossary__item" key={a.term}>
                <p className="glossary__term">{a.term}</p>
                <p className="glossary__desc">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
