import './globals.css';
import '@/styles/fonts.css';
import '@/styles/style.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import TopButton from '@/components/TopButton';
import ThemeToggle from '@/components/ThemeToggle';
import RevealInit from '@/components/RevealInit';
import CountersInit from '@/components/CountersInit';

// 첫 페인트 전에 테마를 적용해 깜빡임(FOUC)을 막는다. body 렌더보다 먼저 실행되어야 하므로 <head>에 둔다.
const THEME_INIT_SCRIPT = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'dark' || stored === 'light'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const SITE_TITLE = '독도 (獨島) — 대한민국의 아름다운 섬';
const SITE_DESCRIPTION =
  '대한민국 동쪽 끝, 독도를 소개합니다. 위치, 자연, 역사, 그리고 우리가 지켜야 할 이유.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    '독도',
    '독도 영유권',
    '울릉도',
    '대한민국 영토',
    '독도 역사',
    '독도 방문',
    'Dokdo',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: '독도',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/img/dokdo-time/dokdo-morning.png',
        width: 1264,
        height: 846,
        alt: '독도의 아침 풍경',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/img/dokdo-time/dokdo-morning.png'],
  },
};

const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '독도',
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: 'ko-KR',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <TopButton />
        <ThemeToggle />
        <RevealInit />
        <CountersInit />
      </body>
    </html>
  );
}
