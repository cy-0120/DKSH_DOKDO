'use client';

import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <a href="#hero" className="nav__logo">
          <img src="/img/logo.png" height={80} width={150} alt="독도 로고" />
        </a>
        <nav className={`nav__menu${open ? ' open' : ''}`} id="navMenu">
          <a href="#about" onClick={() => setOpen(false)}>
            개요
          </a>
          <a href="#location" onClick={() => setOpen(false)}>
            위치
          </a>
          <a href="#nature" onClick={() => setOpen(false)}>
            자연
          </a>
          <a href="#history" onClick={() => setOpen(false)}>
            역사
          </a>
          <a href="#facts" onClick={() => setOpen(false)}>
            정보
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
