import { initNav } from './nav.js';
import { initReveal } from './reveal.js';
import { initCounters } from './counters.js';
import { initHeroSky } from './heroSky.js';

// 진입점: 각 기능 모듈을 초기화한다.
function init() {
  initNav();
  initReveal();
  initCounters();
  initHeroSky();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
