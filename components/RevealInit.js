'use client';

import { useEffect } from 'react';

// 스크롤 등장 애니메이션: 대상 요소에 .reveal 부여 후 뷰포트 진입 시 .visible 추가
const REVEAL_SELECTOR = [
  '.section__title',
  '.about__text',
  '.about__stats',
  '.loc-card',
  '.nature-card',
  '.timeline__item',
  '.fact-row',
  '.location__quote',
  '.section__lead',
  '.lcm-card',
  '.glossary__item',
  '.rebuttal-card',
  '.faq-item',
].join(', ');

export default function RevealInit() {
  useEffect(() => {
    const targets = document.querySelectorAll(REVEAL_SELECTOR);
    targets.forEach((el) => el.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
