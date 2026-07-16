const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// 개발 중에는 정적 파일 캐시를 꺼서 수정한 CSS/JS가 항상 최신으로 로드되게 한다.
// (프로덕션/Vercel 에서는 기본 캐싱을 사용해 성능을 확보한다.)
const isDev = process.env.NODE_ENV !== 'production';
app.use(
  express.static(path.join(__dirname, 'public'), {
    index: 'home.html', // public/index.html 대신 home.html을 메인 페이지로 사용
    etag: !isDev,
    lastModified: !isDev,
    setHeaders: isDev
      ? (res) => res.setHeader('Cache-Control', 'no-store')
      : undefined,
  })
);

app.get('/health', (req, res) => res.json({ ok: true }));

// Vercel 등 서버리스 런타임은 export된 앱을 직접 핸들러로 사용하므로,
// 로컬에서 직접 실행할 때만 포트를 연다.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`독도 소개 서버 실행 중: http://localhost:${PORT}`);
  });
}

module.exports = app;
