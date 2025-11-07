/** @format */
interface NewsItem {
  date: string;
  text: string;
  link?: string;
}
export default function News({ items }: { items: NewsItem[] }) {
  return (
    <section className="news-section">
      <div className="news-card">
        <h2 className="news-title">Recent Work</h2>
        <ul
          className="news-list"
          style={{
            maxHeight: "15rem", 
            overflowY: "auto",
          }}
        >
          {items.map((item, index) => (
            <li key={index}>
              <span className="news-date">{item.date}</span>{" "}
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}