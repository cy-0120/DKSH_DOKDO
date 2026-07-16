# 독도 (獨島) 소개 웹사이트

대한민국 동쪽 끝, 독도를 소개하는 웹사이트입니다. Next.js(App Router) 기반이며, DB 없이 정적으로 프리렌더링되어 Vercel에 배포됩니다.

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS (신규 스타일용) + 기존 커스텀 CSS(`styles/`) 병행
- Google Fonts: Noto Sans KR · Nanum Myeongjo
- Vercel 배포 (Next.js 프레임워크 자동 감지, 별도 설정 없이 정적 프리렌더링)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속하세요.

## 프로덕션 빌드

```bash
npm run build
npm start
```

## Vercel 배포

Next.js 프로젝트이므로 Vercel이 자동으로 감지해 빌드/배포합니다. 별도의 `vercel.json` 설정이 필요 없습니다.
현재 페이지는 서버 상태나 DB 없이 완전히 정적으로 프리렌더링됩니다.

## 프로젝트 구조

```
app/
  layout.js       # 루트 레이아웃: Nav/Footer/TopButton 및 폰트, 전역 CSS
  page.js          # 메인 페이지 (Hero, 개요, 위치, 정보 섹션)
  globals.css      # Tailwind 진입점
components/
  Nav.js           # 상단 네비게이션 (스크롤 상태, 모바일 토글)
  Footer.js        # 푸터
  TopButton.js     # 맨 위로 버튼
  Hero.js          # 히어로 배경 시간대별 크로스페이드
  RevealInit.js    # 스크롤 등장 애니메이션 초기화
  CountersInit.js  # 통계 숫자 카운트업 / 거리 막대 초기화
styles/
  style.css        # 기존 커스텀 CSS 진입점 (@import로 구성)
  base.css, nav.css, hero.css, sections.css, about.css, location.css,
  closing.css, footer.css, top-btn.css, reveal.css
public/
  img/             # 로고, 히어로 시간대별 사진 등
  fonts/
package.json
next.config.mjs
jsconfig.json        # `@/*` import 별칭
README.md
```

## 주요 기능

- 독도 소개 페이지의 히어로 섹션 (시간대별 배경 크로스페이드)
- 위치, 개요, 정보 섹션
- 모바일 네비게이션 토글, 스크롤 등장 애니메이션, 통계 카운트업
- `public/img/about/`에는 아직 페이지에 연결되지 않은 자연/역사 관련 이미지가 준비되어 있습니다 (nav의 "자연"·"역사" 섹션은 추후 구현 예정)

> 자료 참고: 외교부 독도, 동북아역사재단, 문화재청 공개 정보
