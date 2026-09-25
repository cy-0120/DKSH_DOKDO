'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPeriod } from '@/lib/period';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 홈은 Hero 가 사진 전환에 맞춰 시간대를 바꾸므로, 그 외 페이지에서만 1분마다 시간대 색감을 갱신한다.
  useEffect(() => {
    if (pathname === '/') return;
    function sync() {
      const now = new Date();
      document.documentElement.dataset.period = getPeriod(now.getHours() + now.getMinutes() / 60).key;
    }
    sync();
    const timer = window.setInterval(sync, 60000);
    return () => window.clearInterval(timer);
  }, [pathname]);

  // 스크롤하면 내비가 밝은 반투명 배경이 되므로 어두운 글자를 쓴다.
  // 스크롤 전에는 홈만 히어로 사진(어두운 배경) 위에 있어 흰 글자, 다른 페이지는 밝은 배경 위라 어두운 글자.
  const onLight = scrolled || pathname !== '/';

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${onLight ? ' nav--onlight' : ''}`} id="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo">
          <Image src="/img/logo.png" height={90} width={135} alt="독도 로고" priority />
        </Link>
        <nav className={`nav__menu${open ? ' open' : ''}`} id="navMenu">
          <Link href="/about" onClick={() => setOpen(false)}>
            독도 소개
          </Link>
          <Link href="/history" onClick={() => setOpen(false)}>
            역사
          </Link>
          <Link href="/docs" onClick={() => setOpen(false)}>
            자료실
          </Link>
          <Link href="/visit" onClick={() => setOpen(false)}>
            방문 안내
          </Link>
          <Link href="/faq" onClick={() => setOpen(false)}>
            FAQ
          </Link>
        </nav>
        <button
          className="nav__toggle"
          id="navToggle"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          aria-controls="navMenu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
