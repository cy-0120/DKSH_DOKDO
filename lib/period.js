// 시간대 정의: 히어로 사진과 사이트 전체 색감(html[data-period])이 함께 쓴다.
// 경계는 hour(24시간제). night 는 20시~다음날 4시까지 자정을 걸친다(28 = 다음날 4시).
export const PERIODS = [
  { key: 'dawn', start: 4, end: 7, file: '/img/dokdo-time/dokdo-dawn.webp' },
  { key: 'morning', start: 7, end: 11, file: '/img/dokdo-time/dokdo-morning.webp' },
  { key: 'afternoon', start: 11, end: 17, file: '/img/dokdo-time/dokdo-afternoon.webp' },
  { key: 'evening', start: 17, end: 20, file: '/img/dokdo-time/dokdo-evening.webp' },
  { key: 'night', start: 20, end: 28, file: '/img/dokdo-time/dokdo-night.webp' },
];

export function getPeriod(hour) {
  // 자정을 걸치는 night 구간을 하나로 다루기 위해 0~4시는 24를 더한다.
  const h = hour < 4 ? hour + 24 : hour;
  return PERIODS.find((p) => h >= p.start && h < p.end) || PERIODS[PERIODS.length - 1];
}

// 첫 페인트 전에 <html data-period> 를 지정해 색이 바뀌며 깜빡이는 것을 막는 인라인 스크립트
export const PERIOD_BOOT_SCRIPT = `(function(){var P=${JSON.stringify(
  PERIODS.map((p) => [p.key, p.start, p.end])
)};var d=new Date();var h=d.getHours()+d.getMinutes()/60;if(h<4)h+=24;var k='night';for(var i=0;i<P.length;i++){if(h>=P[i][1]&&h<P[i][2]){k=P[i][0];break}}document.documentElement.dataset.period=k})();`;
