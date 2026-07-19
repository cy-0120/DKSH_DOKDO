/** @type {import('next').NextConfig} */
const nextConfig = {
  // 상위 폴더(C:\Users\user)에도 package-lock.json이 있어 Turbopack이 워크스페이스
  // 루트를 잘못 추론하는 경고가 뜬다. 이 프로젝트 폴더를 루트로 명시해 고정한다.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
