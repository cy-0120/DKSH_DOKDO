'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) return;
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // 히어로가 없는 단독 페이지에서는 배경이 옅어 흰 글씨가 묻히므로 항상 진한 배경을 쓴다.
  const solid = scrolled || !isHome;

  return (
    <header className={`nav${solid ? ' scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          <img src="/img/logo.png" height={80} width={150} alt="독도 로고" />
        </Link>
        <nav className={`nav__menu${open ? ' open' : ''}`} id="navMenu">
          <Link href="/#about" onClick={() => setOpen(false)}>
            개요
          </Link>
          <Link href="/#location" onClick={() => setOpen(false)}>
            위치
          </Link>
          <Link href="/nature" onClick={() => setOpen(false)}>
            자연
          </Link>
          <Link href="/history" onClick={() => setOpen(false)}>
            역사
          </Link>
          <Link href="/facts" onClick={() => setOpen(false)}>
            정보
          </Link>
          <Link href="/sources" onClick={() => setOpen(false)}>
            출처
          </Link>
        </nav>
        <button
          className="nav__toggle"
          id="navToggle"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
