// 연표(/history)와 논란·현안(/history/issues)이 같은 모양으로 보이도록 함께 쓰는 목록.
// items: [{ year, title, desc, url? }]  — desc 안의 \n 은 줄바꿈으로 표시되고, url 이 있으면 제목이 ↗ 링크가 된다.
export default function TimelineList({ items }) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline__item" key={`${item.year}-${item.title}`}>
          <div className="timeline__year">{item.year}</div>
          <div className="timeline__body">
            <div className="timeline__title">
              {item.url ? (
                <a
                  className="timeline__title-link"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                  <span className="ext-icon" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ) : (
                item.title
              )}
            </div>
            <p className="timeline__desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
