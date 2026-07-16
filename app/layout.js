import './globals.css';
import '@/styles/style.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import TopButton from '@/components/TopButton';
import RevealInit from '@/components/RevealInit';
import CountersInit from '@/components/CountersInit';

export const metadata = {
  title: '독도 (獨島) — 대한민국의 아름다운 섬',
  description:
    '대한민국 동쪽 끝, 독도를 소개합니다. 위치, 자연, 역사, 그리고 우리가 지켜야 할 이유.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Nanum+Myeongjo:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <TopButton />
        <RevealInit />
        <CountersInit />
      </body>
    </html>
  );
}
