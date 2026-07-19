'use client';

import { useEffect, useRef } from 'react';

const FADE_MS = 3500; // styles/hero.css 의 .hero__photo transition 시간과 맞춘다.

// 시간대 경계(hour, 24시간제). night 는 20시~다음날 4시까지 자정을 걸친다.
const PERIODS = [
  { key: 'dawn', start: 4, end: 7, file: '/img/dokdo-time/dokdo-dawn.png' },
  { key: 'morning', start: 7, end: 11, file: '/img/dokdo-time/dokdo-morning.png' },
  { key: 'afternoon', start: 11, end: 17, file: '/img/dokdo-time/dokdo-afternoon.png' },
  { key: 'evening', start: 17, end: 20, file: '/img/dokdo-time/dokdo-evening.png' },
  { key: 'night', start: 20, end: 28, file: '/img/dokdo-time/dokdo-night.png' }, // 28 = 다음날 4시
];

function getPeriod(hour) {
  // night 구간(20~24, 0~4)은 자정을 걸치므로 24를 더해 하나의 구간으로 취급한다.
  const h = hour < 4 ? hour + 24 : hour;
  return PERIODS.find((p) => h >= p.start && h < p.end) || PERIODS[PERIODS.length - 1];
}

function preload(file) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // 실패해도 진행은 막지 않는다.
    img.src = file;
  });
}

export default function Hero() {
  const layerARef = useRef(null);
  const layerBRef = useRef(null);

  useEffect(() => {
    const layerA = layerARef.current;
    const layerB = layerBRef.current;
    if (!layerA || !layerB) return;

    const layers = [layerA, layerB];
    let topIndex = 0;
    let currentKey = null;

    function crossfadeTo(period) {
      if (period.key === currentKey) return;
      currentKey = period.key;

      const enter = layers[1 - topIndex];
      const leave = layers[topIndex];

      enter.style.backgroundImage = `url("${period.file}")`;
      enter.style.zIndex = '2';
      leave.style.zIndex = '1';

      // 배경 이미지가 먼저 적용되도록 강제 리플로우한 뒤 바로 opacity 전환을 시작한다.
      void enter.offsetWidth;
      enter.classList.add('is-active');

      window.setTimeout(() => {
        leave.classList.remove('is-active');
      }, FADE_MS + 100);

      topIndex = 1 - topIndex;
    }

    function currentHour() {
      const now = new Date();
      return now.getHours() + now.getMinutes() / 60;
    }

    Promise.all(PERIODS.map((p) => preload(p.file))).then(() => {
      crossfadeTo(getPeriod(currentHour()));
    });

    const timer = window.setInterval(() => {
      crossfadeTo(getPeriod(currentHour()));
    }, 60000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__scene" aria-hidden="true">
        <div className="hero__photo" id="heroPhotoA" ref={layerARef}></div>
        <div className="hero__photo" id="heroPhotoB" ref={layerBRef}></div>
        <div className="hero__scrim"></div>
      </div>
      <div className="hero__content">
        <p className="hero__eyebrow">대한민국 동쪽 끝, 우리 땅</p>
        <h1 className="hero__title">독도</h1>
        <p className="hero__sub">해 뜨는 동해 위, 천년의 세월을 지켜온 대한민국의 섬</p>
        <div className="hero__coord">
          <span>북위 37° 14&apos;</span>
          <span className="dot">·</span>
          <span>동경 131° 52&apos;</span>
        </div>
        <a href="/about" className="hero__cta">
          독도 알아보기 ↓
        </a>
      </div>
    </section>
  );
}
