import Image from 'next/image';
import AboutSubNav from '@/components/AboutSubNav';
import Lightbox from '@/components/Lightbox';

function formatName(filename) {
  const base = filename.replace(/\.[a-z]+$/i, '');
  return base
    .split('-')
    .map((w) => (w === 'sp' ? 'sp.' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

function Gallery({ folder, items, sizes = '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw' }) {
  return (
    <div className="gallery__grid">
      {items.map((item) => {
        const file = typeof item === 'string' ? item : item.file;
        const ko = typeof item === 'string' ? null : item.ko;
        const sci = typeof item === 'string' ? formatName(item) : item.sci || (ko ? null : formatName(item.file));
        return (
          <figure className="nature-card" key={file}>
            <Image
              className="nature-card__img"
              src={`${folder}${file}`}
              alt={ko || sci}
              width={400}
              height={300}
              sizes={sizes}
            />
            <figcaption className="nature-card__name">
              {ko ? (
                <>
                  <span className="nature-card__ko">{ko}</span>
                  {sci && <span className="nature-card__sci">{sci}</span>}
                </>
              ) : (
                sci
              )}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

const LAND_PLANTS = [
  { file: 'aster-spathulifolius.jpg', ko: '해국', sci: 'Aster spathulifolius' },
  { file: 'giant-sea-aster.jpg', ko: '왕해국', sci: 'Aster spathulifolius' },
  { file: 'lilium-hansonii.jpg', ko: '섬말나리', sci: 'Lilium hansonii' },
  { file: 'lysimachia-mauritiana.jpg', ko: '갯까치수염', sci: 'Lysimachia mauritiana' },
  { file: 'phedimus-takesimensis.jpg', ko: '섬기린초', sci: 'Phedimus takesimensis' },
];

const SEA_PLANTS = [
  { file: 'codium-fragile.jpg', ko: '청각', sci: 'Codium fragile' },
  { file: 'ecklonia-cava.jpg', ko: '감태', sci: 'Ecklonia cava' },
  { file: 'gelidium-amansii.jpg', ko: '우뭇가사리', sci: 'Gelidium amansii' },
  { file: 'pyropia-tenera.jpg', ko: '참김', sci: 'Pyropia tenera' },
  { file: 'pyropia-yezoensis.jpg', ko: '방사무늬김', sci: 'Pyropia yezoensis' },
  { file: 'saccharina-japonica.jpg', ko: '다시마', sci: 'Saccharina japonica' },
  { file: 'sargassum-horneri.jpg', ko: '괭생이모자반', sci: 'Sargassum horneri' },
  { file: 'sargassum-thunbergii.jpg', ko: '지충이', sci: 'Sargassum thunbergii' },
  { file: 'ulva-pertusa.jpg', ko: '구멍갈파래', sci: 'Ulva pertusa' },
  { file: 'undaria-pinnatifida.jpg', ko: '미역', sci: 'Undaria pinnatifida' },
];

const LAND_ANIMALS = [
  { file: 'black-pigeon.jpg', ko: '흑비둘기', sci: 'Columba janthina' },
  { file: 'cattle-egret.jpg', ko: '황로', sci: 'Bubulcus ibis' },
  { file: 'daurian-redstart.jpg', ko: '딱새', sci: 'Phoenicurus auroreus' },
  { file: 'larus-crassirostris.jpg', ko: '괭이갈매기', sci: 'Larus crassirostris' },
  { file: 'kangchi.jpg', ko: '강치', sci: 'Zalophus japonicus (멸종)' },
  { file: 'sparrowhawk.jpg', ko: '새매', sci: 'Accipiter nisus' },
];

const SEA_ANIMALS = [
  { file: 'black-porgy.jpg', ko: '감성돔', sci: 'Acanthopagrus schlegelii' },
  { file: 'greenling.jpg', ko: '쥐노래미', sci: 'Hexagrammos otakii' },
  { file: 'korean-rockfish.jpg', ko: '조피볼락', sci: 'Sebastes schlegelii' },
  { file: 'protaeolidiella-atra.jpg', ko: '검정큰도롱이갯민숭이', sci: 'Protaeolidiella atra' },
  {
    file: 'sakuraeolis-enosimensis.jpg',
    ko: '아가미하늘소갯민숭이',
    sci: 'Sakuraeolis enosimensis',
  },
  { file: 'striped-beakfish.jpg', ko: '돌돔', sci: 'Oplegnathus fasciatus' },
  { file: 'tritonia-festiva.jpg', ko: '예쁜이갯민숭이', sci: 'Tritonia festiva' },
  { file: 'chromodoris-orientalis-rudman.jpg', ko: '흰갯민숭달팽이', sci: 'Chromodoris orientalis Rudman' },
];

const FACTS = [
  { key: '행정구역', val: '경상북도 울릉군 울릉읍 독도리' },
  { key: '구성', val: '동도, 서도 및 89개 부속 도서' },
  { key: '총 면적', val: '약 187,554㎡ (축구장 약 26개)' },
  { key: '최고 높이', val: '서도 대한봉 168.5m' },
  { key: '형성 시기', val: '약 460만~250만 년 전 (화산섬)' },
  { key: '천연기념물', val: '제336호 「독도 천연보호구역」' },
  { key: '우편번호', val: '40240' },
  { key: '관할', val: '대한민국 (독도경비대 상주)' },
];

const CLIMATE = [
  { key: '기후 유형', val: '해양성 기후 (난류 영향)' },
  { key: '연평균 기온', val: '약 12.4℃' },
  { key: '1월 평균기온', val: '약 1℃' },
  { key: '8월 평균기온', val: '약 23℃' },
  { key: '연평균 강수량', val: '약 1,383.4mm' },
  { key: '연평균 풍속', val: '약 4.3m/s' },
];

const MANAGEMENT = [
  { key: '관할기관', val: '해양수산부 (독도 정책 총괄)' },
  { key: '근거 법률', val: '「독도의 지속가능한 이용에 관한 법률」' },
  { key: '보호구역 지정', val: '자연환경보전지역 · 특정도서 · 천연보호구역 중복 지정' },
];

const FACILITIES = [
  { key: '등대', val: '1954년 설치, 1998년 유인화' },
  { key: '접안시설', val: '1996~1997년 준공, 500톤급 선박 접안 가능' },
  { key: '헬기장', val: '1997년 준공 (약 400㎡)' },
  { key: '최초 주민', val: '최종덕, 1981년 주민등록 이전' },
];

export const metadata = {
  title: '독도 소개 — 위치·행정·자연 | 독도',
  description:
    '독도의 위치와 지형, 행정 정보, 그리고 그 안에서 살아가는 식물과 동물까지 — 독도를 자세히 소개합니다.',
};

export default function About() {
  return (
    <>
      {/* 페이지 인트로 */}
      <section className="section" id="about-intro">
        <div className="container">
          <p className="section__eyebrow">ABOUT DOKDO</p>
          <h1 className="section__title">독도 소개</h1>
          <p className="section__lead">
            위치와 지형, 행정 정보, 그리고 그 안에서 살아가는 식물과 동물까지 — 독도를 이루는
            모든 것을 자세히 둘러봅니다.
          </p>
        </div>
      </section>

      <AboutSubNav />

      {/* 위치 (+ 지형) */}
      <section className="section section--alt" id="location">
        <div className="container">
          <p className="section__eyebrow">LOCATION</p>
          <h2 className="section__title">동해의 가장 동쪽</h2>
          <p className="section__lead">
            독도는 울릉도에서 동남쪽으로 약 87.4km 떨어져 있습니다. 일본 오키섬(약 157.5km)보다
            우리 울릉도에 훨씬 더 가깝습니다.
          </p>
          <div className="gallery__grid gallery__grid--cols-2" style={{ marginBottom: 36 }}>
            <Gallery
              folder="/img/about/location/"
              items={['location.jpg']}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Gallery
              folder="/img/about/location/"
              items={['distance.jpg']}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
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

          <h3 className="section__subtitle">지형: 화산이 빚어낸 섬</h3>
          <p className="section__lead">
            독도는 약 460만 년 전 해저 화산 활동으로 생겨난 화산섬으로, 동도와 서도 및 89개의
            부속 도서로 이루어져 있습니다. 최고봉은 서도의 대한봉으로 높이 168.5m입니다.
          </p>
          <div className="gallery__grid gallery__grid--cols-3">
            <figure className="nature-card">
              <Image
                className="nature-card__img"
                src="/img/about/geo/stones-east.png"
                alt="동도 갯바위"
                width={400}
                height={300}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <figcaption className="nature-card__name">동도 갯바위</figcaption>
            </figure>
            <figure className="nature-card">
              <Image
                className="nature-card__img"
                src="/img/about/geo/stones-west.png"
                alt="서도 갯바위"
                width={400}
                height={300}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <figcaption className="nature-card__name">서도 갯바위</figcaption>
            </figure>
            <figure className="nature-card">
              <Image
                className="nature-card__img"
                src="/img/about/geo/under-sea.jpg"
                alt="해저 지형"
                width={400}
                height={300}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <figcaption className="nature-card__name">해저 지형</figcaption>
            </figure>
          </div>

          <h3 className="section__subtitle">기후: 안개 잦은 해양성 기후</h3>
          <p className="section__lead">
            독도는 난류의 영향을 받는 해양성 기후로, 연중 흐린 날이 160일 이상일 만큼 안개와
            강수가 잦고 바람이 강합니다.
          </p>
          <div className="facts__table">
            {CLIMATE.map((f) => (
              <div className="fact-row" key={f.key}>
                <span className="fact-row__key">{f.key}</span>
                <span className="fact-row__val">{f.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 행정 */}
      <section className="section" id="administration">
        <div className="container">
          <p className="section__eyebrow">ADMINISTRATION</p>
          <h2 className="section__title">행정 정보</h2>
          <p className="section__lead">
            독도는 대한민국 경상북도 울릉군에 속한 행정구역이며, 독도경비대가 상주하며 지키고
            있습니다.
          </p>
          <div className="facts__table">
            {FACTS.map((f) => (
              <div className="fact-row" key={f.key}>
                <span className="fact-row__key">{f.key}</span>
                <span className="fact-row__val">{f.val}</span>
              </div>
            ))}
          </div>

          <h3 className="section__subtitle">관리 및 법적 근거</h3>
          <div className="facts__table">
            {MANAGEMENT.map((f) => (
              <div className="fact-row" key={f.key}>
                <span className="fact-row__key">{f.key}</span>
                <span className="fact-row__val">{f.val}</span>
              </div>
            ))}
          </div>

          <h3 className="section__subtitle">주요 시설과 주민</h3>
          <div className="facts__table">
            {FACILITIES.map((f) => (
              <div className="fact-row" key={f.key}>
                <span className="fact-row__key">{f.key}</span>
                <span className="fact-row__val">{f.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 자연 (식물 + 동물) */}
      <section className="section section--alt" id="nature">
        <div className="container">
          <p className="section__eyebrow">NATURE</p>
          <h2 className="section__title">독도의 자연</h2>
          <p className="section__lead">
            거친 해풍 속에서도 다양한 식물과 동물이 독도 곳곳에서 살아가고 있습니다. 육지에서
            멀리 떨어진 화산섬이라는 특수한 환경 덕분에 독자적인 생태계가 유지되어 왔으며, 이런
            생태적 가치를 인정받아 1982년 &ldquo;독도 해조류 번식지&rdquo;라는 이름으로 천연기념물
            제336호에 지정되었고, 1999년 지금의 이름인 「독도 천연보호구역」으로 변경되었습니다.
          </p>

          <h3 className="section__subtitle">식물</h3>
          <div className="gallery__group">
            <p className="gallery__group-title">육상 식물</p>
            <Gallery folder="/img/about/netural/land/" items={LAND_PLANTS} />
          </div>
          <div className="gallery__group">
            <p className="gallery__group-title">해조류</p>
            <Gallery folder="/img/about/netural/sea/" items={SEA_PLANTS} />
          </div>

          <h3 className="section__subtitle">동물</h3>
          <p className="section__lead">
            독도는 동해안 지역에서 괭이갈매기, 바다제비, 슴새 등 바닷새가 대규모로 번식하는
            유일한 곳이자 철새들의 중간 기착지입니다. 다양한 해양 생물도 독도 주변 바다에서
            살아가며, 한때 이곳을 터전으로 삼았던 강치는 20세기 초 일본의 남획으로 지금은
            멸종되었습니다.
          </p>
          <div className="gallery__group">
            <p className="gallery__group-title">육상 동물</p>
            <Gallery folder="/img/about/animal/land/" items={LAND_ANIMALS} />
          </div>
          <div className="gallery__group">
            <p className="gallery__group-title">해양 생물</p>
            <Gallery folder="/img/about/animal/sea/" items={SEA_ANIMALS} />
          </div>
        </div>
      </section>

      <Lightbox />
    </>
  );
}
