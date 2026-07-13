# 독도 (獨島) 소개 웹사이트

대한민국 동쪽 끝, 독도를 소개하는 **Next.js** 기반 웹사이트입니다. Vercel 배포에 최적화되어 있습니다.

## 기술 스택

- **Next.js 15** (App Router)
- **React 19**
- 순수 CSS (`app/globals.css`)
- `next/font/google` 로 Noto Sans KR · Nanum Myeongjo 폰트 최적화

## 로컬 실행

```bash
npm install
npm run dev
```

→ 브라우저에서 http://localhost:3000 접속

## 프로덕션 빌드

```bash
npm run build
npm run start
```

## Vercel 배포

### 방법 1. GitHub 연동 (권장)

1. 이 프로젝트를 GitHub 저장소로 push
2. [vercel.com](https://vercel.com) → **Add New → Project** → 저장소 선택
3. 프레임워크가 **Next.js** 로 자동 인식됨 → **Deploy** 클릭

별도 설정 없이 배포됩니다. (빌드 명령 `next build`, 출력 자동 감지)

### 방법 2. Vercel CLI

```bash
npm i -g vercel
vercel          # 미리보기 배포
vercel --prod   # 프로덕션 배포
```

## 프로젝트 구조

```
app/
  layout.js      # 공통 레이아웃, 메타데이터, 폰트
  page.js        # 메인 페이지 (전체 섹션 + 인터랙션)
  globals.css    # 스타일
next.config.mjs
package.json
```

## 콘텐츠 섹션

개요 · 위치 · 자연 · 역사(타임라인) · 정보 · 마무리

> 자료 참고: 외교부 독도, 동북아역사재단, 문화재청 공개 정보
# DKSH_DOKDO
