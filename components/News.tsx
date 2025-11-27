import Link from "next/link";

interface NewsItem {
  title: string;
  summary: string;
  tag?: string;
  date?: string;   // ISO 格式最好
  href?: string;   // 允许缺省
  image?: string;  // hover 时展示的图片
}

interface NewsProps {
  items: NewsItem[];
}

export default function News({ items }: NewsProps) {
  if (!items?.length) return null;

  const sortedItems = [...items].sort((a, b) => {
    const timeA = a.date ? new Date(a.date).getTime() : 0;
    const timeB = b.date ? new Date(b.date).getTime() : 0;
    return timeB - timeA;
  });

  return (
    <section className="news-section">
      <div className="news-header">
        <p className="news-eyebrow">News & Highlights</p>
      </div>

      <div className="news-grid">
        {sortedItems.map((item, idx) => {
          const hasLink = Boolean(item.href);
          const key = item.href ?? `${item.title}-${item.date ?? idx}`;

          const card = (
            <article className="news-card flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-face flip-card-front">
                  <div className="news-card-meta">
                    {item.date && <time>{item.date}</time>}
                  </div>
                  <h3 className="news-card-title">{item.title}</h3>
                  <p className="news-card-summary">{item.summary}</p>
                  
                </div>

                <div
                  className="flip-card-face flip-card-back"
                  style={
                    item.image
                      ? { backgroundImage: `url(${item.image})` }
                      : undefined
                  }
                >
                  {hasLink && (
                    <div className="flip-card-back-overlay">
                      <span>Explore More!</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );

          return hasLink ? (
            <Link href={item.href!} key={key} className="news-card-link-wrapper">
              {card}
            </Link>
          ) : (
            <div
              key={key}
              className="news-card-link-wrapper news-card-link-wrapper--static"
            >
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}