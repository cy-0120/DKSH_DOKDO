// 히어로 배경: 하루를 5개 시간대로 나누고, 현재 시간대에 맞는 독도 사진을
// 두 레이어 사이의 opacity 전환(크로스페이드)으로 천천히 자연스럽게 바꾼다.

const FADE_MS = 3500; // style.css 의 .hero__photo transition 시간과 맞춘다.

// 시간대 경계(hour, 24시간제). night 는 20시~다음날 4시까지 자정을 걸친다.
const PERIODS = [
  { key: "dawn", start: 4, end: 7, file: "./img/dokdo-time/dokdo-dawn.png" },
  { key: "morning", start: 7, end: 11, file: "./img/dokdo-time/dokdo-morning.png" },
  { key: "afternoon", start: 11, end: 17, file: "./img/dokdo-time/dokdo-afternoon.png" },
  { key: "evening", start: 17, end: 20, file: "./img/dokdo-time/dokdo-evening.png" },
  { key: "night", start: 20, end: 28, file: "./img/dokdo-time/dokdo-night.png" }, // 28 = 다음날 4시
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

export function initHeroSky() {
  const layerA = document.getElementById("heroPhotoA");
  const layerB = document.getElementById("heroPhotoB");
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
    enter.style.zIndex = "2";
    leave.style.zIndex = "1";

    // 배경 이미지가 먼저 적용되도록 강제 리플로우한 뒤 바로 opacity 전환을 시작한다.
    // (requestAnimationFrame은 탭이 백그라운드일 때 실행이 미뤄질 수 있어 사용하지 않는다.)
    void enter.offsetWidth;
    enter.classList.add("is-active");

    // 전환이 끝난 뒤 이전 레이어는 조용히 원상 복귀(화면엔 이미 안 보이는 상태)
    window.setTimeout(() => {
      leave.classList.remove("is-active");
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

  // 1분마다 시간대가 바뀌었는지 확인하고, 바뀌었을 때만 크로스페이드한다.
  setInterval(() => {
    crossfadeTo(getPeriod(currentHour()));
  }, 60000);
}
