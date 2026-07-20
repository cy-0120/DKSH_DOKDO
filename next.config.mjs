/** @type {import('next').NextConfig} */
const nextConfig = {
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
