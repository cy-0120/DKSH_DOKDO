# 독도 (獨島) 소개 웹사이트

대한민국 동쪽 끝, 독도를 소개하는 정적 웹사이트입니다. DB나 서버 로직 없이 순수 HTML/CSS/JS로 동작하며, Vercel에 정적 사이트로 배포됩니다.

## 기술 스택

- 순수 HTML/CSS/JavaScript
- Google Fonts: Noto Sans KR · Nanum Myeongjo
- Vercel 정적 호스팅 (서버리스 함수 없음)
- Express: 로컬 개발 서버 전용 (배포에는 사용되지 않음)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속하세요.

## Vercel 배포

이 프로젝트는 완전한 정적 사이트로 배포됩니다. `vercel.json`은 `public/` 폴더를 output directory로 지정할 뿐, 별도의 빌드나 서버리스 함수가 없습니다.

- 요청은 CDN에서 `public/` 폴더의 파일을 직접 서빙
- 콜드 스타트 없음, 함수 실행 비용/한도 없음

## 프로젝트 구조

```
public/
  index.html
  partials/
    nav.html      # 전역 네비게이션 템플릿
    footer.html   # 전역 푸터 템플릿
  css/
    style.css
  js/
    include.js    # data-include 요소에 partials/* 를 fetch로 삽입
    counters.js
    heroSky.js
    main.js
    nav.js
    reveal.js
  fonts/
  img/
server.js       # 로컬 개발 전용
package.json
vercel.json
README.md
```

## nav/footer 템플릿

`nav.html`, `footer.html`은 `public/partials/`에 한 번만 작성해두고, 페이지에서는
`<div data-include="./partials/nav.html"></div>`처럼 자리만 표시합니다.
`js/include.js`가 페이지 로드 시 `fetch`로 해당 조각을 가져와 그 자리에 채워 넣습니다
(별도 빌드 단계 없이 브라우저에서 바로 동작).

## 주요 기능

- 독도 소개 페이지의 히어로 섹션
- 위치, 자연, 역사, 정보 섹션
- 모바일 네비게이션 토글 및 애니메이션
- 로컬 개발에서는 정적 파일 캐싱 비활성화

> 자료 참고: 외교부 독도, 동북아역사재단, 문화재청 공개 정보
