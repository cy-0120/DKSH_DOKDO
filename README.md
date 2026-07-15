# DKSH_DOKDO

독도(獨島)를 소개하는 웹사이트입니다. **Node.js(Express)** 서버가 `public/` 폴더의 정적 파일(HTML·CSS·JS)을 제공하며, Vercel 배포에 대응합니다.

## 기술 스택

- **Node.js + Express** — 정적 파일 서버
- 순수 **HTML / CSS / JavaScript** (프레임워크 없음)
- JS는 ES 모듈로 기능별 분리

## 프로젝트 구조

```
dokdo/
├─ server.js              # Express 서버 (public 정적 서빙)
├─ package.json
├─ vercel.json            # Vercel 배포 설정
└─ public/
   ├─ index.html          # 페이지 마크업
   ├─ css/
   │  └─ style.css        # 스타일
   └─ js/
      ├─ main.js          # 진입점 (각 모듈 초기화)
      ├─ nav.js           # 네비게이션 · 모바일 메뉴 · 맨 위로 버튼
      ├─ reveal.js        # 스크롤 등장 애니메이션
      └─ counters.js      # 통계 카운트업 · 거리 막대
```

## 로컬 실행

```bash
npm install
npm run dev     # node --watch server.js (파일 변경 시 자동 재시작)
# 또는
npm start       # node server.js
```

→ 브라우저에서 http://localhost:3000 접속

## Vercel 배포

### 방법 1. GitHub 연동 (권장)

1. 저장소를 GitHub에 push
2. [vercel.com](https://vercel.com) → **Add New → Project** → 저장소 선택
3. `vercel.json` 설정에 따라 `server.js`가 서버리스 함수로 배포됨 → **Deploy**

### 방법 2. Vercel CLI

```bash
npm i -g vercel
vercel          # 미리보기 배포
vercel --prod   # 프로덕션 배포
```

## 콘텐츠 섹션

개요 · 위치 · 자연 · 역사(타임라인) · 정보 · 마무리

> 자료 참고: 외교부 독도, 동북아역사재단, 문화재청 공개 정보
