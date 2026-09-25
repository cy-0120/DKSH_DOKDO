'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// 스크롤 등장 애니메이션: 대상 요소에 .reveal 부여 후 뷰포트 진입 시 .visible 추가
// 제목·목록형 항목(연표, 표, FAQ 등)까지 모두 움직이면 강조가 사라지므로 핵심 블록만 대상으로 한다
const REVEAL_SELECTOR = [
  '.about__text',
  '.about__stats',
  '.loc-card',
  '.nature-card',
  '.location__quote',
  '.lcm-card',
].join(', ');

export default function RevealInit() {
  // layout에서 한 번만 마운트되므로, 페이지 이동 후 새로 생긴 DOM을 다시 관찰하려면 pathname 의존이 필요하다
  const pathname = usePathname();

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
  }, [pathname]);

  return null;
}
