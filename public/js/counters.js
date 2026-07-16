// 통계 숫자 카운트업 + 거리 막대 채우기 (뷰포트 진입 시 1회 실행)

function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.floor(eased * target);
    el.textContent = val.toLocaleString('ko-KR') + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString('ko-KR') + suffix;
  }
  requestAnimationFrame(tick);
}

function fillBar(barSpan) {
  const width = barSpan.dataset.width || '0';
  requestAnimationFrame(() => {
    barSpan.style.width = width;
  });
}

export function initCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;

        if (el.classList.contains('about__stats')) {
          el.querySelectorAll('.stat__num').forEach(animateCount);
        }
        if (el.classList.contains('loc-card')) {
          const bar = el.querySelector('.loc-card__bar span');
          if (bar) fillBar(bar);
        }
        observer.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );

  document
    .querySelectorAll('.about__stats, .loc-card')
    .forEach((el) => observer.observe(el));
}
