import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Hero />

      {/* 개요 */}
      <section className="section" id="about">
        <div className="container">
          <p className="section__eyebrow">OVERVIEW</p>
          <h2 className="section__title">독도는 어떤 곳인가요?</h2>
          <div className="about__grid">
            <div className="about__text">
              <p>
                <strong>독도(獨島)</strong>는 대한민국 경상북도 울릉군에 속한 섬으로, 동해의
                가장 동쪽에 자리합니다. 동도(東島)와 서도(西島), 그리고 89개의 부속 도서로
                이루어진 화산섬입니다.
              </p>
              <p>
                약 460만 년 전 해저 화산 활동으로 생겨난 독도는 우리나라에서 가장 오래된
                화산섬 중 하나입니다. 거친 파도와 바람 속에서도 다양한 생명이 살아가는
                생태계의 보고이자, 자연이 빚어낸 예술 작품입니다.
              </p>
              <p>
                맑은 날에는 울릉도에서 육안으로 독도를 볼 수 있을 만큼 가까우며, 예로부터 우리
                조상들의 삶과 역사가 깃든 소중한 우리 땅입니다.
              </p>
            </div>
            <div className="about__stats">
              <div className="stat">
                <span className="stat__num" data-target="460" data-suffix="만 년">
                  0
                </span>
                <span className="stat__label">화산섬 형성 시기</span>
              </div>
              <div className="stat">
                <span className="stat__num" data-target="91" data-suffix="개">
                  0
                </span>
                <span className="stat__label">동도·서도 및 부속 도서</span>
              </div>
              <div className="stat">
                <span className="stat__num" data-target="187554" data-suffix="㎡">
                  0
                </span>
                <span className="stat__label">총 면적</span>
              </div>
              <div className="stat">
                <span className="stat__num" data-target="87" data-suffix="km">
                  0
                </span>
                <span className="stat__label">울릉도와의 거리</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 위치 */}
      <section className="section section--alt" id="location">
        <div className="container">
          <p className="section__eyebrow">LOCATION</p>
          <h2 className="section__title">동해의 가장 동쪽</h2>
          <p className="section__lead">
            독도는 울릉도에서 동남쪽으로 약 87.4km 떨어져 있습니다. 일본 오키섬(약 157km)보다
            우리 울릉도에 훨씬 더 가깝습니다.
          </p>
          <div className="location__cards">
            <div className="loc-card">
              <div className="loc-card__from">울릉도</div>
              <div className="loc-card__dist">87.4 km</div>
              <div className="loc-card__note">대한민국 · 가장 가까운 유인도</div>
              <div className="loc-card__bar">
                <span data-width="36%"></span>
              </div>
            </div>
            <div className="loc-card">
              <div className="loc-card__from">오키섬</div>
              <div className="loc-card__dist">157.5 km</div>
              <div className="loc-card__note">일본 · 약 1.8배 더 멀다</div>
              <div className="loc-card__bar">
                <span data-width="65%"></span>
              </div>
            </div>
          </div>
          <p className="location__quote">
            “독도는 울릉도의 부속 섬으로, 역사·지리·국제법적으로 명백한 대한민국의
            영토입니다.”
          </p>
        </div>
      </section>

      {/* 정보/팩트 */}
      <section className="section" id="facts">
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

      {/* 마무리 CTA */}
      <section className="closing">
        <div className="container">
          <p className="closing__title">독도를 더 알아보세요</p>
          <p className="closing__text">
            일본의 주장에 대한 근거 자료, 자주 묻는 질문, 독도 방문 안내까지 확인해 보세요.
          </p>
          <div className="closing__actions">
            <a href="/docs#reason" className="hero__cta">
              근거 자료 보기
            </a>
            <a href="/visit" className="hero__cta">
              방문 안내 보기
            </a>
            <a href="/faq" className="hero__cta">
              자주 묻는 질문
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
