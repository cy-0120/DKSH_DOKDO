export const metadata = {
  title: '출처 — 독도 (獨島)',
  description: '이 페이지의 정보가 참고한 공식 자료 출처를 안내합니다.',
};

export default function SourcesPage() {
  return (
    <section className="section section--page-top section--alt" id="sources">
      <div className="container">
        <p className="section__eyebrow">SOURCES</p>
        <h2 className="section__title">참고 자료 출처</h2>
        <p className="section__lead">
          이 사이트의 위치·자연·역사·정보 콘텐츠는 아래 공공기관의 공개 자료를 참고하여
          작성되었습니다.
        </p>
        <div className="sources__list">
          <div className="source-item">
            <div className="source-item__name">외교부 독도</div>
            <div className="source-item__desc">
              독도의 지리·역사·국제법적 지위에 관한 대한민국 정부의 공식 설명 자료
            </div>
          </div>
          <div className="source-item">
            <div className="source-item__name">동북아역사재단</div>
            <div className="source-item__desc">독도 관련 역사 기록 및 연구 자료</div>
          </div>
          <div className="source-item">
            <div className="source-item__name">문화재청</div>
            <div className="source-item__desc">
              「독도 천연보호구역」(천연기념물 제336호) 지정 현황 및 생태 정보
            </div>
          </div>
        </div>
        <h3 className="sources__subtitle">사진 출처</h3>
        <p className="section__lead">
          자연 페이지에 사용된 사진 중 일부는 아래 촬영자의 저작물입니다.
        </p>
        <div className="sources__list">
          <div className="source-item">
            <div className="source-item__name">Tony Wu (www.tony-wu.com)</div>
            <div className="source-item__desc">자연 — 해양 동물, 노래미 사진</div>
          </div>
          <div className="source-item">
            <div className="source-item__name">Masahiro Suzuki</div>
            <div className="source-item__desc">자연 — 해조류, 방사무늬김 사진</div>
          </div>
        </div>
        <p className="sources__note">
          본 사이트는 교육 및 정보 제공을 목적으로 제작되었으며, 상업적 목적이 없습니다.
        </p>
      </div>
    </section>
  );
}
