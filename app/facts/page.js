export const metadata = {
  title: '정보 — 독도 (獨島)',
  description: '행정구역, 면적, 형성 시기 등 독도에 관한 기본 정보를 한눈에 확인하세요.',
};

export default function FactsPage() {
  return (
    <section className="section section--page-top" id="facts">
      <div className="container">
        <p className="section__eyebrow">FACTS</p>
        <h2 className="section__title">한눈에 보는 독도</h2>
        <div className="facts__table">
          <div className="fact-row">
            <span className="fact-row__key">행정구역</span>
            <span className="fact-row__val">경상북도 울릉군 울릉읍 독도리</span>
          </div>
          <div className="fact-row">
            <span className="fact-row__key">구성</span>
            <span className="fact-row__val">동도, 서도 및 89개 부속 도서</span>
          </div>
          <div className="fact-row">
            <span className="fact-row__key">총 면적</span>
            <span className="fact-row__val">약 187,554㎡ (축구장 약 26개)</span>
          </div>
          <div className="fact-row">
            <span className="fact-row__key">최고 높이</span>
            <span className="fact-row__val">서도 대한봉 168.5m</span>
          </div>
          <div className="fact-row">
            <span className="fact-row__key">형성 시기</span>
            <span className="fact-row__val">약 460만~250만 년 전 (화산섬)</span>
          </div>
          <div className="fact-row">
            <span className="fact-row__key">천연기념물</span>
            <span className="fact-row__val">제336호 「독도 천연보호구역」</span>
          </div>
          <div className="fact-row">
            <span className="fact-row__key">우편번호</span>
            <span className="fact-row__val">40240</span>
          </div>
          <div className="fact-row">
            <span className="fact-row__key">관할</span>
            <span className="fact-row__val">대한민국 (독도경비대 상주)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
