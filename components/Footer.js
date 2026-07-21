import Image from 'next/image';

const FOOTER_LINKS = [
  { href: '/about', label: '독도 소개' },
  { href: '/history', label: '역사' },
  { href: '/docs', label: '자료실' },
  { href: '/visit', label: '방문 안내' },
  { href: '/faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__logo">
        <Image src="/img/logo.png" alt="독도 로고" width={152} height={101} priority />
      </div>
      <nav className="container footer__links" aria-label="바로가기">
        {FOOTER_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="container footer__inner">
        <p>교육 및 정보 제공 목적으로 제작되었습니다.</p>
        <p>&copy; 2026 DoKSH. All rights reserved.</p>
      </div>
    </footer>
  );
}
