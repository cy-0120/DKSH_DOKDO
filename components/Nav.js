'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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

  // 홈은 히어로 사진(어두운 배경) 위에 떠 있어 투명 상태에서도 흰 글자가 필요하지만,
  // 다른 페이지는 투명 상태일 때 밝은 배경 위에 놓이므로 어두운 글자가 필요하다.
  const onLight = !scrolled && pathname !== '/';

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${onLight ? ' nav--onlight' : ''}`} id="nav">
      <div className="nav__inner">
        <a href="/" className="nav__logo">
          <Image src="/img/logo.png" height={90} width={135} alt="독도 로고" priority />
        </a>
        <nav className={`nav__menu${open ? ' open' : ''}`} id="navMenu">
          <a href="/about" onClick={() => setOpen(false)}>
            독도 소개
          </a>
          <a href="/history" onClick={() => setOpen(false)}>
            역사
          </a>
          <a href="/docs" onClick={() => setOpen(false)}>
            자료실
          </a>
          <a href="/visit" onClick={() => setOpen(false)}>
            방문 안내
          </a>
          <a href="/faq" onClick={() => setOpen(false)}>
            FAQ
          </a>
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
