# 독도 (獨島) 소개 웹사이트

대한민국 동쪽 끝, 독도를 소개하는 웹사이트입니다. Next.js(App Router) 기반이며, DB 없이 정적으로 프리렌더링되어 Vercel에 배포됩니다.

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
  layout.js        # 루트 레이아웃: Nav/Footer/TopButton 및 폰트, 전역 CSS
  page.js          # 메인 페이지 (Hero, 개요, 위치, 정보 섹션)
  about/page.js    # 자연 갤러리 (지형/동물/식물, 라이트박스)
  docs/page.js     # 독도 자료실 (핵심 정보, 실효 지배 기록)
  history/page.js  # 역사 타임라인
  globals.css      # 전역 CSS 진입점
components/
  Nav.js            # 상단 네비게이션 (스크롤 상태, 모바일 토글)
  Footer.js         # 푸터
  TopButton.js      # 맨 위로 버튼
  Hero.js           # 히어로 배경 시간대별 크로스페이드
  AboutSubNav.js    # 자연 페이지 서브 네비게이션
  Lightbox.js       # 이미지 라이트박스
  RevealInit.js     # 스크롤 등장 애니메이션 초기화
  CountersInit.js   # 통계 숫자 카운트업 / 거리 막대 초기화
styles/
  style.css         # 커스텀 CSS 진입점 (@import로 구성)
  base.css, nav.css, hero.css, sections.css, about.css, location.css,
  nature.css, subnav.css, facts.css, timeline.css, lightbox.css,
  closing.css, footer.css, top-btn.css, reveal.css
public/
  img/              # 로고, 히어로 시간대별 사진, 자연/위치 이미지 등
  fonts/
package.json
next.config.mjs
jsconfig.json         # `@/*` import 별칭
README.md
```

## 주요 기능

- 독도 소개 페이지의 히어로 섹션 (시간대별 배경 크로스페이드)
- 위치, 개요, 정보 섹션 및 통계 카운트업
- 자연 페이지: 지형/동물/식물 갤러리와 이미지 라이트박스
- 자료실 페이지: 독도 핵심 정보와 실효 지배 기록
- 역사 페이지: 시대별 타임라인
- 모바일 네비게이션 토글, 스크롤 등장 애니메이션

## 참고자료

`/docs` 자료실 페이지에서 인용하는 출처입니다.

- [대한민국 외교부 독도](https://dokdo.mofa.go.kr) — 독도의 자연환경, 역사, 우리 영토인 근거 등을 소개하는 외교부 공식 사이트
- [동북아역사재단 독도 아카이브](https://contents.nahf.or.kr/dokdo) — 독도 관련 역사 자료와 연구 콘텐츠를 제공하는 아카이브
- [독도 이야기 - 경상북도](https://www.dokdo.re.kr) — 독도의 생태계와 자연환경을 소개하는 경상북도 독도 사이트
- [독도의 역사 - 동북아역사넷](https://contents.nahf.or.kr/id/NAHF.eddok.d_0002_0030_0020) — 동북아역사재단이 정리한 독도 역사 개괄
- [독도의 지속가능한 이용에 관한 법률 - 국가법령정보센터](https://www.law.go.kr/lsInfoP.do?lsiSeq=148466) — 독도 관리·보전의 법적 근거가 되는 현행 법률 원문
- [독도의용수비대 - 한국민족문화대백과사전](https://encykorea.aks.ac.kr/Article/E0073512) — 1953~1956년 독도를 지킨 민간 수비대의 활동 기록
