// 네비게이션: 스크롤 시 배경 변경, 모바일 메뉴 토글, 맨 위로 버튼
export function initNav() {
  const nav = document.getElementById('nav');
  const topBtn = document.getElementById('topBtn');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 60);
      topBtn.classList.toggle('show', y > 500);
    },
    { passive: true }
  );

  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
  });
}
