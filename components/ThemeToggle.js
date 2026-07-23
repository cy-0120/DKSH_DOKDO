'use client';

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // 저장소 접근 불가 시(프라이빗 모드 등) 조용히 무시
    }
  }

  return (
    <button className="theme-toggle" aria-label="다크 모드 전환" onClick={toggle}>
      <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">☾</span>
      <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">☀</span>
    </button>
  );
}
