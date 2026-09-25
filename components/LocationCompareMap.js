'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * 울릉도·독도·오키섬 위치 비교 지도
 * - 개략도(schematic): 육지 형태는 단순화, 세 섬 간 거리 비율은 실측치를 반영
 * - 실측 거리: 울릉도-독도 87.4km / 독도-오키섬 157.5km (약 1.8배)
 */

// 실측 거리(km) — 콘텐츠 수정 시 이 값만 바꾸면 라벨·비율 문구가 함께 갱신됨
const DIST_UD = 87.4; // 울릉도-독도
const DIST_DO = 157.5; // 독도-오키섬
const RATIO = (DIST_DO / DIST_UD).toFixed(1); // "1.8"

// 캔버스 좌표 (viewBox 0 0 560 360) — 방위·비율만 근사, 정밀 좌표 아님
const POS = {
  ulleungdo: { x: 96, y: 188, label: '울릉도' },
  dokdo: { x: 246, y: 205, label: '독도' },
  oki: { x: 470, y: 292, label: '오키섬' },
};

function useCountUp(target, active, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

export default function LocationCompareMap({ variant = 'full', className = '' }) {
  const [active, setActive] = useState(null);
  const [hoverSeg, setHoverSeg] = useState(null);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const udCount = useCountUp(DIST_UD, inView);
  const doCount = useCountUp(DIST_DO, inView);

  const handleIslandClick = useCallback((id) => {
    setActive((prev) => (prev === id ? null : id));
  }, []);

  const udActive = active === 'ulleungdo' || active === 'dokdo' || hoverSeg === 'ud';
  const doActive = active === 'oki' || active === 'dokdo' || hoverSeg === 'do';

  return (
    <div ref={containerRef} className={`lcm-card ${className}`} data-variant={variant}>
      <svg
        viewBox="0 0 560 360"
        role="img"
        aria-label="울릉도, 독도, 오키섬의 상대적 위치와 거리를 비교하는 지도"
        className="lcm-svg"
      >
        <defs>
          <radialGradient id="lcm-sea" cx="50%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#0f3a63" />
            <stop offset="100%" stopColor="#0a2540" />
          </radialGradient>
          <filter id="lcm-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="560" height="360" fill="url(#lcm-sea)" />

        {/* 한국 동해안 (단순화) */}
        <path
          d="M -20 40 C 30 20, 20 120, 10 180 C 0 250, 40 320, -20 380 L -20 -20 Z"
          className="lcm-land"
        />
        <text x="30" y="70" className="lcm-land-label">한국 동해안</text>

        {/* 일본 시마네현 (단순화) */}
        <path
          d="M 580 380 C 520 340, 500 300, 460 330 C 420 355, 440 380, 420 400 L 580 400 Z"
          className="lcm-land"
        />
        <text x="440" y="345" className="lcm-land-label" textAnchor="end">일본 시마네현</text>

        {/* 거리선: 울릉도-독도 */}
        <line
          x1={POS.ulleungdo.x}
          y1={POS.ulleungdo.y}
          x2={POS.dokdo.x}
          y2={POS.dokdo.y}
          className={`lcm-line ${udActive ? 'lcm-line--active' : ''}`}
          onMouseEnter={() => setHoverSeg('ud')}
          onMouseLeave={() => setHoverSeg(null)}
        />
        {/* 거리선: 독도-오키섬 */}
        <line
          x1={POS.dokdo.x}
          y1={POS.dokdo.y}
          x2={POS.oki.x}
          y2={POS.oki.y}
          className={`lcm-line ${doActive ? 'lcm-line--active' : ''}`}
          onMouseEnter={() => setHoverSeg('do')}
          onMouseLeave={() => setHoverSeg(null)}
        />

        {/* 거리 라벨 (호버 또는 인뷰 시 표시) */}
        <g className={`lcm-dist-label ${udActive || inView ? 'lcm-dist-label--show' : ''}`}>
          <text
            x={(POS.ulleungdo.x + POS.dokdo.x) / 2}
            y={(POS.ulleungdo.y + POS.dokdo.y) / 2 - 10}
            textAnchor="middle"
          >
            {udCount.toFixed(1)}km
          </text>
        </g>
        <g className={`lcm-dist-label ${doActive || inView ? 'lcm-dist-label--show' : ''}`}>
          <text
            x={(POS.dokdo.x + POS.oki.x) / 2}
            y={(POS.dokdo.y + POS.oki.y) / 2 - 10}
            textAnchor="middle"
          >
            {doCount.toFixed(1)}km
          </text>
        </g>

        {/* 섬 마커 (점) */}
        {Object.keys(POS).map((id) => {
          const p = POS[id];
          const isDokdo = id === 'dokdo';
          const isActive = active === id;
          return (
            <g
              key={id}
              transform={`translate(${p.x}, ${p.y})`}
              className="lcm-island"
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
              aria-label={`${p.label} 선택`}
              onClick={() => handleIslandClick(id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleIslandClick(id);
              }}
            >
              <circle
                r={isDokdo ? 9 : 7}
                className={`lcm-marker ${isDokdo ? 'lcm-marker--dokdo' : ''} ${
                  isActive ? 'lcm-marker--active' : ''
                }`}
                filter={isDokdo ? 'url(#lcm-glow)' : undefined}
              />
              <text y={isDokdo ? -18 : -14} textAnchor="middle" className="lcm-island-label">
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
      <p className="lcm-caption">
        섬 위치는 실제 거리 비율을 반영한 개략도이며, 정밀 좌표 지도가 아닙니다.
      </p>

      {variant === 'full' && (
        <div className="lcm-panel">
          <p className="lcm-headline">
            독도는 울릉도로부터 <strong>{DIST_UD}km</strong>, 오키섬으로부터{' '}
            <strong>{DIST_DO}km</strong> 떨어져 있습니다.
          </p>
          <p className="lcm-sub">울릉도가 오키섬보다 약 {RATIO}배 더 가깝습니다.</p>
          <div className="lcm-buttons">
            <button
              type="button"
              className={active === 'ulleungdo' ? 'lcm-btn lcm-btn--active' : 'lcm-btn'}
              onClick={() => handleIslandClick('ulleungdo')}
            >
              울릉도 기준으로 보기
            </button>
            <button
              type="button"
              className={active === 'oki' ? 'lcm-btn lcm-btn--active' : 'lcm-btn'}
              onClick={() => handleIslandClick('oki')}
            >
              오키섬 기준으로 보기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
