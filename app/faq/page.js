import FaqAccordion from '@/components/FaqAccordion';

const FAQ_ITEMS = [
  {
    q: '독도는 어느 나라 땅인가요?',
    a: '독도는 대한민국 경상북도 울릉군 울릉읍 독도리에 속한 명백한 대한민국 영토입니다. 독도경비대가 상주하며 관리하고 있고, 1981년부터는 실제 주민등록을 옮긴 주민도 있었습니다.',
  },
  {
    q: '독도에는 지금도 사람이 살고 있나요?',
    a: '독도경비대원들이 상주하며 지키고 있고, 등대 관리원과 어업인 등도 머무릅니다. 1981년 최종덕이 최초로 주민등록을 독도로 옮긴 이후 실효 지배를 보여주는 상징적인 사례로 남아 있습니다.',
  },
  {
    q: '독도와 울릉도는 얼마나 떨어져 있나요?',
    a: '독도는 울릉도에서 동남쪽으로 약 87.4km 떨어져 있습니다. 일본 오키섬(약 157.5km)보다 훨씬 가까워, 지리적으로도 대한민국에 속한 섬임을 보여줍니다.',
  },
  {
    q: '독도는 어떻게 생겨난 섬인가요?',
    a: '독도는 약 460만 년 전 해저 화산 활동으로 생겨난 화산섬으로, 동도와 서도, 89개의 부속 도서로 이루어져 있습니다. 최고봉은 서도의 대한봉(168.5m)입니다.',
  },
  {
    q: '독도가 우리 땅이라는 역사적 증거에는 어떤 것이 있나요?',
    a: '512년 신라의 우산국 복속을 시작으로, 「세종실록지리지」, 「팔도총도」, 안용복의 도일 항의, 대한제국 칙령 제41호, SCAPIN 제677호 등 여러 시대의 기록이 독도가 우리 영토임을 뒷받침합니다.',
    link: { href: '/history', label: '역사 연표 자세히 보기' },
  },
  {
    q: '일본은 왜 독도를 자기네 땅이라고 주장하나요?',
    a: '일본은 17세기 영유권 확립설, 1905년 무주지 선점론, 샌프란시스코 강화조약 미언급 등을 근거로 내세웁니다. 그러나 이런 주장은 안용복 사건, 대한제국 칙령 제41호, SCAPIN 제677호 등 앞선 기록들과 배치됩니다.',
    link: { href: '/docs#reason', label: '근거 자료 자세히 보기' },
  },
  {
    q: '독도를 직접 방문할 수 있나요?',
    a: '네, 울릉도에서 출발하는 여객선을 통해 방문할 수 있습니다. 다만 기상 상황에 따라 실제 상륙 여부가 달라질 수 있어 사전 예약과 확인이 필요합니다.',
    link: { href: '/visit', label: '방문 안내 자세히 보기' },
  },
  {
    q: '독도의 자연환경은 어떤가요?',
    a: '독도는 1982년 "독도 해조류 번식지"로 천연기념물 제336호에 지정되었고, 1999년 「독도 천연보호구역」으로 명칭이 변경되었습니다. 해국, 섬기린초 등 육상 식물과 다양한 해조류, 바닷새와 해양 생물이 서식하고 있습니다.',
    link: { href: '/about#nature', label: '독도의 자연 자세히 보기' },
  },
  {
    q: "'다케시마의 날'이란 무엇인가요?",
    a: '2005년 일본 시마네현이 1905년 불법 편입 100주년에 맞춰 2월 22일을 기념일로 정한 조례입니다. 대한민국 정부는 이에 대해 지속적으로 항의하고 있습니다.',
  },
  {
    q: 'SCAPIN이란 무엇인가요?',
    a: '연합국 최고사령관 각서(Supreme Commander for the Allied Powers Instruction)의 약자입니다. 1946년 발령된 SCAPIN 제677호는 독도를 일본의 통치·행정 범위에서 명시적으로 제외했습니다.',
  },
];

const TITLE = '자주 묻는 질문 | 독도';
const DESCRIPTION = '독도에 대해 자주 묻는 질문과 답변을 모았습니다.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/faq' },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Faq() {
  return (
    <>
      <section className="section" id="faq-intro">
        <div className="container">
          <p className="section__eyebrow">FAQ</p>
          <h1 className="section__title">자주 묻는 질문</h1>
          <p className="section__lead">
            독도에 대해 궁금할 만한 질문들을 모아 답변했습니다. 질문을 눌러 답변을 확인하세요.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="faq-list">
        <div className="container">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </>
  );
}
