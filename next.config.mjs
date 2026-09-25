/** @type {import('next').NextConfig} */
const nextConfig = {
  // 상위 폴더(C:\Users\user)에도 package-lock.json이 있어 Turbopack이 워크스페이스
  // 루트를 잘못 추론하는 경고가 뜬다. 이 프로젝트 폴더를 루트로 명시해 고정한다.
  turbopack: {
    root: import.meta.dirname,
  },
  async headers() {
    return [
      {
        // 파일명이 콘텐츠 해시라 내용이 바뀌면 URL도 바뀐다 — 영구 캐싱 안전함.
        source: '/fonts/:path*.woff2',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
