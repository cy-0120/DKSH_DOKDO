import './globals.css';
import '@/styles/fonts.css';
import '@/styles/style.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import TopButton from '@/components/TopButton';
import RevealInit from '@/components/RevealInit';
import CountersInit from '@/components/CountersInit';
import { PERIOD_BOOT_SCRIPT } from '@/lib/period';

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
        url: '/img/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '독도의 아침 풍경',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/img/og-image.jpg'],
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
      <body>
        <script dangerouslySetInnerHTML={{ __html: PERIOD_BOOT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <a href="#main" className="skip-link">
          본문으로 건너뛰기
        </a>
        <Nav />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <TopButton />
        <RevealInit />
        <CountersInit />
      </body>
    </html>
  );
}
