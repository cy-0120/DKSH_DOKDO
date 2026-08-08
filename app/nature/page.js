import fs from 'node:fs';
import path from 'node:path';

export const metadata = {
  title: '자연 — 독도 (獨島)',
  description: '독도의 생태계와 자연환경을 소개합니다.',
};

// public/img/about/<카테고리 폴더> 안의 이미지 파일을 그대로 읽어와 갤러리를 만든다.
// 즉, 이 폴더에 사진을 넣고 빼는 것만으로 화면이 자동으로 갱신된다. 코드를 다시 건드릴 필요 없음.
const CATEGORIES = [
  { key: 'animal-land', title: '육상 동물', dir: 'animal/land' },
  { key: 'animal-sea', title: '해양 동물', dir: 'animal/sea' },
  { key: 'natural-land', title: '육상 식물', dir: 'natural/land' },
  { key: 'natural-sea', title: '해조류', dir: 'natural/sea' },
  { key: 'geo', title: '지형', dir: 'geo' },
];

// 파일별 이름·설명. 새 사진을 추가했는데 아직 여기 등록하지 않았다면 파일명을 다듬어 이름 자리에 대신 보여준다.
// 사진 출처·저작자 표기는 이 페이지가 아니라 /sources(출처) 페이지에 모아둔다.
const DESCRIPTIONS = {
  'black-pigeon.jpg': {
    name: '흑비둘기',
    desc: '몸 전체가 진한 흑갈색을 띠며 은은한 광택이 도는 비둘기로, 국내에서는 매우 드물게 관찰되는 희귀 텃새입니다. 천연기념물로 지정되어 보호받고 있습니다.',
  },
  'cattle-egret.jpg': {
    name: '황로',
    desc: '번식기에 머리와 목이 주황빛으로 물드는 백로과 여름철새로, 초지나 습지 주변에서 곤충을 잡아먹습니다.',
  },
  'daurian-redstart.jpg': {
    name: '딱새',
    desc: '수컷은 잿빛 머리와 주황색 배가 뚜렷한 소형 조류로, 독도를 포함한 전국 각지에서 흔히 볼 수 있는 텃새입니다.',
  },
  'hoe-seagull.jpg': {
    name: '괭이갈매기',
    desc: '울음소리가 고양이를 닮아 이름 붙은 갈매기로, 독도의 대표적인 번식조입니다. 사진은 어미가 새끼에게 먹이를 주는 모습입니다.',
  },
  'kangchi.jpg': {
    name: '독도 강치(바다사자)',
    desc: '20세기 초까지 독도 바위에서 대규모로 번식했으나, 일본의 무분별한 포획으로 개체수가 급감해 결국 멸종한 것으로 알려진 옛 사진 자료입니다.',
  },
  'sparrowhawk.jpg': {
    name: '참매류',
    desc: '넓게 편 날개로 활공하는 맹금류로, 독도를 오가는 철새들을 사냥하기 위해 종종 관찰됩니다.',
  },
  'black-porgy.jpg': {
    name: '감성돔',
    desc: '은회색 몸에 어두운 가로 줄무늬가 있는 도미과 어류로, 독도 연안 암초 지대에서 흔히 관찰됩니다.',
  },
  'greenling.jpg': {
    name: '노래미',
    desc: '화려한 노란빛을 띠는 개체로, 바위틈에 알을 낳고 부화할 때까지 지키는 습성이 있습니다.',
  },
  'korean-rockfish.jpg': {
    name: '조피볼락(우럭)',
    desc: '회갈색의 두꺼운 몸통을 가진 볼락류로, 독도 주변 암초에 서식하는 대표적인 정착성 어종입니다.',
  },
  'marionia-sp.jpg': {
    name: '갯민숭달팽이 (Marionia sp.)',
    desc: '짙은 자주색 몸에 하얀 돌기가 촘촘히 돋아난 나새류로, 독도의 맑고 찬 바닷물에서 서식합니다.',
  },
  'sakuraeolis-enosimensis.jpg': {
    name: '갯민숭달팽이 (Sakuraeolis enosimensis)',
    desc: '벚꽃을 닮은 분홍빛 돌기가 특징으로, 독도 조간대 암초에서 발견됩니다.',
  },
  'striped-beakfish.jpg': {
    name: '돌돔',
    desc: '몸에 굵은 검은 줄무늬가 있는 도미류로, 어린 개체일수록 줄무늬가 선명합니다. 독도의 인기 있는 낚시 어종이기도 합니다.',
  },
  'tritonia-festiva.jpg': {
    name: '갯민숭달팽이 (Tritonia festiva)',
    desc: '반투명한 분홍빛 몸에 깃털 같은 돌기가 늘어선 나새류입니다.',
  },
  'white-nudibranch.jpg': {
    name: '갯민숭달팽이',
    desc: '흰 몸에 검은 점이 촘촘히 박히고 노란 테두리를 두른 화려한 나새류입니다.',
  },
  'aster-spathulifolius.jpg': {
    name: '해국',
    desc: '가을에 연보라색 꽃을 피우는 국화과 식물로, 척박한 해안 바위틈에서도 무리 지어 자랍니다.',
  },
  'giant-sea-aster.jpg': {
    name: '해국 군락',
    desc: '독도의 화산암 절벽 틈에 뿌리내린 해국이 꽃을 피운 모습으로, 뒤로 독도 특유의 기암 지형이 보입니다.',
  },
  'lilium-hansonii.jpg': {
    name: '섬말나리',
    desc: '주황색 바탕에 짙은 반점이 있는 백합과 식물로, 울릉도·독도 등 동해 도서 지역에서만 자생하는 희귀종입니다.',
  },
  'lysimachia-mauritiana.jpg': {
    name: '갯까치수염',
    desc: '하얀 별 모양 꽃이 줄기를 따라 촘촘히 피는 해안 식물로, 거친 바위 표면에서도 뿌리를 내립니다.',
  },
  'phedimus-takesimensis.jpg': {
    name: '섬기린초',
    desc: '노란 별 모양 꽃과 통통한 다육질 잎이 특징인 돌나물과 식물로, 학명에 독도(takesimensis)가 붙을 만큼 독도를 대표하는 자생식물입니다.',
  },
  'codium-fragile.jpg': {
    name: '청각',
    desc: '초록빛 원통형 가지가 사슴뿔처럼 갈라지는 녹조류로, 독도 연안 암반에서 자랍니다.',
  },
  'ecklonia-cava.jpg': {
    name: '감태',
    desc: '넓고 두꺼운 갈색 잎이 무리 지어 자라는 대형 갈조류로, 독도 바다숲의 주요 구성종입니다.',
  },
  'gelidium-amansii.jpg': {
    name: '우뭇가사리',
    desc: '붉은빛의 가는 가지가 촘촘히 갈라지는 홍조류로, 한천(우무)의 원료로 쓰입니다.',
  },
  'pyropia-tenera.jpg': {
    name: '김',
    desc: '얇고 부드러운 자줏빛 조류로, 물결에 하늘거리며 자랍니다.',
  },
  'pyropia-yezoensis.jpg': {
    name: '방사무늬김',
    desc: '바위에 매달려 자라는 짙은 자갈색 김의 한 종류입니다.',
  },
  'saccharina-japonica.jpg': {
    name: '다시마',
    desc: '길고 두꺼운 갈색 잎이 물살에 넘실거리는 대형 갈조류로, 작은 물고기들의 은신처가 되기도 합니다.',
  },
  'sargassum-horneri.jpg': {
    name: '괭생이모자반',
    desc: '가늘게 갈라진 잎과 공기주머니가 특징인 갈조류로, 다른 해조류와 뒤엉켜 큰 군락을 이룹니다.',
  },
  'sargassum-thunbergii.jpg': {
    name: '지충이',
    desc: '뾰족한 가지 끝과 자잘한 공기주머니가 특징인 모자반류로, 독도 조하대 암반을 뒤덮으며 자랍니다.',
  },
  'ulva-pertusa.jpg': {
    name: '구멍갈파래',
    desc: '얇고 투명한 초록빛 잎에 구멍이 숭숭 뚫린 녹조류로, 파래무침 등 식재료로도 쓰입니다.',
  },
  'undaria-pinnatifida.jpg': {
    name: '미역',
    desc: '굵은 주맥을 따라 넓게 펼쳐진 갈조류로, 우리에게 익숙한 미역국의 재료입니다.',
  },
  'stones-east.png': {
    name: '동도 지질 단면도',
    desc: '조면암·조면안산암·응회암 등 여러 화산암층이 겹겹이 쌓여 형성되었으며, 암맥이 관입한 흔적도 뚜렷이 남아 있습니다.',
  },
  'stones-west.png': {
    name: '서도 지질 단면도',
    desc: '층상응회암과 각력암 등이 층을 이루며, 여러 갈래의 암맥이 섬을 가로지르고 있습니다.',
  },
  'under-sea.jpg': {
    name: '독도의 해저 지형',
    desc: '독도는 해수면 위로 드러난 정상부일 뿐, 실제로는 수심 약 2,000m의 동해 바닥에서 솟아오른 거대한 해저 화산체입니다.',
  },
};

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

function humanize(filename) {
  const base = filename.replace(IMAGE_EXT, '');
  return base
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function readCategoryImages(dir) {
  const abs = path.join(process.cwd(), 'public', 'img', 'about', dir);
  let files = [];
  try {
    files = fs.readdirSync(abs).filter((f) => IMAGE_EXT.test(f));
  } catch {
    return [];
  }
  files.sort((a, b) => a.localeCompare(b));
  return files.map((f) => {
    const entry = DESCRIPTIONS[f];
    return {
      src: `/img/about/${dir}/${f}`,
      name: entry ? entry.name : humanize(f),
      desc: entry ? entry.desc : '',
    };
  });
}

export default function NaturePage() {
  const categories = CATEGORIES.map((c) => ({ ...c, images: readCategoryImages(c.dir) }));

  return (
    <>
      <section className="section section--page-top" id="nature">
        <div className="container">
          <p className="section__eyebrow">NATURE</p>
          <h2 className="section__title">살아 숨 쉬는 생태의 보고</h2>
          <p className="section__lead">
            독도는 화산섬 특유의 척박한 환경 속에서도 다양한 생명이 뿌리내린 생태계의
            보고입니다. 카테고리별로 독도의 동물·식물·지형을 소개합니다.
          </p>
        </div>
      </section>

      {categories.map((cat, i) => (
        <section className={`section${i % 2 === 1 ? ' section--alt' : ''}`} id={cat.key} key={cat.key}>
          <div className="container">
            <h3 className="gallery__title">{cat.title}</h3>
            {cat.images.length > 0 ? (
              <div className="gallery__grid">
                {cat.images.map((img) => (
                  <figure className="gallery__item" key={img.src}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.name} loading="lazy" />
                    <figcaption>
                      <span className="gallery__item-name">{img.name}</span>
                      {img.desc && <span className="gallery__item-desc">{img.desc}</span>}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="gallery__empty">
                아직 등록된 사진이 없습니다. <code>public/img/about/{cat.dir}/</code> 폴더에
                이미지를 추가하면 이 자리에 자동으로 표시됩니다.
              </p>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
