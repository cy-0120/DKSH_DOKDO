# 독도 (獨島) 소개 웹사이트

대한민국 동쪽 끝, 독도를 소개하는 웹사이트입니다. 독도를 알리는 게임을 소개하고 배포하기 위한 사이트로, 독도의 위치·자연·역사·방문 안내를 보여 주고 상단의 **게임 다운로드** 버튼으로 게임(exe)을 내려받을 수 있습니다. Next.js(App Router) 기반이며, DB 없이 정적으로 프리렌더링되어 Vercel에 배포됩니다.

### 페이지 구성

| 주소 | 내용 |
| --- | --- |
| `/` | 메인: 시간대별로 배경이 바뀌는 히어로, 개요·위치 소개 |
| `/about` | 독도 소개: 위치·행정·자연(지형/동물/식물 갤러리) |
| `/history` | 역사: 512년 우산국 복속부터 최근까지의 연표(출처 링크 포함) |
| `/docs` | 자료실: 독도 핵심 정보와 근거 자료 |
| `/visit` | 방문 안내 |
| `/faq` | 자주 묻는 질문 |

## 기술 스택

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

- Next.js 16 (App Router, Turbopack)
- React 19
- 순수 커스텀 CSS(`styles/`, 기능별로 분리된 파일을 `style.css`에서 `@import`)
- Google Fonts: Noto Sans KR · Nanum Myeongjo
- Vercel 배포 (Next.js 프레임워크 자동 감지, 별도 설정 없이 정적 프리렌더링)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속하세요.

## 환경변수 (게임 다운로드)

상단 메뉴의 **게임 다운로드** 버튼은 **게임이 올라간 GitHub 저장소 링크**만 환경변수로 넣으면 동작합니다.
버튼을 누르면 서버(`/api/download`)가 그 저장소의 **최신 릴리스에서 exe 파일을 찾아** GitHub에서 바로 내려받게 해 줍니다.
exe 파일 이름을 적을 필요가 없고, 새 버전을 릴리스에 올리면 자동으로 최신 파일이 받아집니다.

1. 게임 exe를 GitHub **Releases**에 올립니다. (저장소는 공개(public)여야 하고, 릴리스에 exe 파일이 첨부되어 있어야 합니다)
2. 프로젝트 맨 위 폴더에서 `.env.example`을 복사해 `.env.local` 파일을 만듭니다. (`.env.local`은 git에 올라가지 않습니다)
3. 저장소 링크를 붙여넣고 저장합니다.

```bash
GAME_REPO_URL=https://github.com/소유자/저장소
```

4. `npm run dev`를 껐다가 다시 켜면 반영됩니다.

| 변수 | 필수 | 설명 |
| --- | --- | --- |
| `GAME_REPO_URL` | 필수 | 게임 GitHub 저장소 링크. 비어 있거나 올바른 주소가 아니면 버튼이 보이지 않습니다. |
| `GAME_ASSET_NAME` | 선택 | 릴리스에 exe가 **여러 개**일 때 받을 파일 이름. exe가 하나뿐이면 비워 둡니다. |

- exe가 여러 개인데 `GAME_ASSET_NAME`도 없거나, GitHub 조회에 실패하면 잘못된 파일 대신 **그 저장소의 릴리스 페이지**로 안내합니다.
- GitHub 정보는 5분간 재사용합니다. (비로그인 요청은 시간당 60회로 제한되어 있어서 아끼기 위함입니다)
- **Vercel 배포**: 프로젝트 → Settings → Environment Variables에 같은 이름으로 추가한 뒤 **Redeploy** 해야 적용됩니다.

## 프로덕션 빌드

```bash
npm run build
npm start
```

## Vercel 배포

Next.js 프로젝트이므로 Vercel이 자동으로 감지해 빌드/배포합니다. 별도의 `vercel.json` 설정이 필요 없습니다.
현재 페이지는 서버 상태나 DB 없이 완전히 정적으로 프리렌더링됩니다.

## 프로젝트 구조

폴더 하나가 하나의 역할을 맡습니다. "어디를 고치면 되지?" 싶을 때 아래를 보세요.

```
app/                    # 페이지(주소) — 폴더 이름이 곧 주소가 된다
  layout.js               # 모든 페이지 공통 틀: 폰트·메타 정보·Nav/Footer/TopButton
  page.js                 # 메인(/): 히어로, 개요, 위치
  about/page.js           # /about  독도 소개 (위치·행정·자연 갤러리)
  history/page.js         # /history 역사 연표 (TIMELINE 배열에 항목 추가)
  docs/page.js            # /docs   자료실
  visit/page.js           # /visit  방문 안내
  faq/page.js             # /faq    자주 묻는 질문
  api/download/route.js   # /api/download  최신 릴리스의 exe 를 찾아 GitHub 로 연결
  robots.js, sitemap.js   # 검색엔진용 robots.txt / sitemap.xml 자동 생성
  globals.css             # 전역 CSS 진입점
components/             # 여러 페이지에서 가져다 쓰는 화면 부품
  Nav.js                  # 상단 메뉴 (스크롤 상태, 모바일 토글, 게임 다운로드 버튼)
  Footer.js               # 하단 푸터
  Hero.js                 # 메인 히어로 (시간대별 배경 사진 크로스페이드)
  TopButton.js            # 맨 위로 가기 버튼
  SubNav.js               # 페이지 안에서 섹션을 오가는 서브 메뉴
  Lightbox.js             # 사진을 크게 보는 라이트박스
  FaqAccordion.js         # FAQ 펼치고 접기
  LocationCompareMap.js   # 울릉도·오키섬 거리 비교 지도
  RevealInit.js           # 스크롤 등장 애니메이션 초기화
  CountersInit.js         # 통계 숫자 카운트업 / 거리 막대 초기화
lib/
  period.js               # 지금 시각이 새벽·아침·낮·저녁·밤 중 무엇인지 판단 (배경·색감에 사용)
game/
  repo.js                 # 환경변수 GAME_REPO_URL(게임 GitHub 저장소 링크)을 읽는 곳 → 아래 "환경변수"
styles/                 # 커스텀 CSS (기능별 파일을 style.css 가 @import 로 모음)
  style.css               # 진입점
  base.css, fonts.css     # 색상 변수·기본 스타일 / 웹폰트 정의
  nav.css, hero.css, footer.css, top-btn.css, closing.css   # 공통 영역
  sections.css, reveal.css                                  # 섹션 공통 / 등장 애니메이션
  about.css, location.css, location-map.css, nature.css,
  subnav.css, facts.css, reason.css, faq.css,
  timeline.css, lightbox.css                                # 페이지별 스타일
public/                 # 코드가 아닌 파일 (주소로 그대로 열린다)
  fonts/                  # 웹폰트(woff2)
  img/                    # 로고, og-image, 시간대별 히어로 사진(dokdo-time/), 자연·위치 사진(about/)
package.json            # 의존성·실행 명령
next.config.mjs         # Next.js 설정
jsconfig.json           # `@/*` import 별칭 (예: @/components/Nav)
.env.example            # 환경변수 예시 (복사해서 .env.local 로 사용)
README.md
```

> 이미지와 폰트는 `public/`에, 화면을 만드는 코드(`.js`/`.css`)는 `app/`·`components/`·`styles/`에 둡니다.
> `public/`에는 코드를 넣을 수 없습니다.

## 주요 기능

- 독도 소개 페이지의 히어로 섹션 (시간대별 배경 크로스페이드)
- 위치, 개요, 정보 섹션 및 통계 카운트업
- 자연 페이지: 지형/동물/식물 갤러리와 이미지 라이트박스
- 자료실 페이지: 독도 핵심 정보와 실효 지배 기록
- 역사 페이지: 시대별 타임라인 (출처 링크 포함)
- 방문 안내, FAQ(펼치고 접기) 페이지
- 상단 메뉴의 **게임 다운로드** 버튼: GitHub 저장소 링크(`GAME_REPO_URL`)만 넣으면 최신 릴리스의 exe를 내려받음 (값이 없으면 버튼 숨김)
- 모바일 네비게이션 토글, 스크롤 등장 애니메이션

## 참고자료

`/docs` 자료실 페이지에서 인용하는 출처입니다.

- [대한민국 외교부 독도](https://dokdo.mofa.go.kr) — 독도의 자연환경, 역사, 우리 영토인 근거 등을 소개하는 외교부 공식 사이트
- [동북아역사재단 독도 아카이브](https://contents.nahf.or.kr/dokdo) — 독도 관련 역사 자료와 연구 콘텐츠를 제공하는 아카이브
- [독도 이야기 - 경상북도](https://www.dokdo.re.kr) — 독도의 생태계와 자연환경을 소개하는 경상북도 독도 사이트
- [독도의 역사 - 동북아역사넷](https://contents.nahf.or.kr/id/NAHF.eddok.d_0002_0030_0020) — 동북아역사재단이 정리한 독도 역사 개괄
- [독도의 지속가능한 이용에 관한 법률 - 국가법령정보센터](https://www.law.go.kr/lsInfoP.do?lsiSeq=148466) — 독도 관리·보전의 법적 근거가 되는 현행 법률 원문
- [독도의용수비대 - 한국민족문화대백과사전](https://encykorea.aks.ac.kr/Article/E0073512) — 1953~1956년 독도를 지킨 민간 수비대의 활동 기록
