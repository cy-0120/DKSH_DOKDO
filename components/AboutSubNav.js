'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'location', label: '위치' },
  { id: 'administration', label: '행정' },
  { id: 'nature', label: '자연' },
];

export default function AboutSubNav() {
  const [active, setActive] = useState('location');

  useEffect(() => {
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="subnav">
      <div className="subnav__inner">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''}>
            {s.label}
          </a>
        ))}
      </div>
    </div>
  );
}
