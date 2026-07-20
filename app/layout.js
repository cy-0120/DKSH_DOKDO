import './globals.css';
import '@/styles/fonts.css';
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
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <TopButton />
        <RevealInit />
        <CountersInit />
      </body>
    </html>
  );
}
