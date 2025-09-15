/** @format */
interface NewsItem {
  date: string;
  text: string;
}

export default function News({ items }: { items: NewsItem[] }) {
  return (
    <section className="news-section">
      <div className="news-card">
        <h2 className="news-title">Recent Work</h2>
        <ul className="news-list">
          {items.map((item, index) => (
            <li key={index}>
              <span className="news-date">{item.date}</span>{" "}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
