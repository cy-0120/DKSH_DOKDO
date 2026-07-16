# 독도 (獨島) 소개 웹사이트

대한민국 동쪽 끝, 독도를 소개하는 정적 웹사이트입니다. Express 기반 로컬 서버와 Vercel 배포 구성이 포함되어 있습니다.

## 기술 스택

- Node.js + Express
- 순수 HTML/CSS/JavaScript
- Google Fonts: Noto Sans KR · Nanum Myeongjo
- Vercel Node 서버리스 배포

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속하세요.

## 프로덕션 실행

```bash
npm start
```

## Vercel 배포

이 프로젝트는 `server.js`를 `@vercel/node` 빌드로 실행하도록 구성되어 있습니다.

### 배포 요약

- `vercel.json`에 `server.js`를 빌드 대상(entrypoint)으로 명시
- 모든 요청은 `server.js`로 라우팅
- 정적 파일은 `public/` 폴더에서 제공

## 프로젝트 구조

```
public/
  index.html
  css/
    style.css
  js/
    counters.js
    heroSky.js
    main.js
    nav.js
    reveal.js
  fonts/
  img/
server.js
package.json
vercel.json
README.md
```

## 주요 기능

- 독도 소개 페이지의 히어로 섹션
- 위치, 자연, 역사, 정보 섹션
- 모바일 네비게이션 토글 및 애니메이션
- 로컬 개발에서는 정적 파일 캐싱 비활성화

> 자료 참고: 외교부 독도, 동북아역사재단, 문화재청 공개 정보
