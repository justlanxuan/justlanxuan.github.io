import React, { useState, useMemo } from "react";
import { Calendar, Tag, X } from "lucide-react";

// --- 类型定义 ---
interface PostData {
  title: string;
  description: string;
  lang: "zh-CN" | "en";
  tags: string[];
  date: string;
  cover?: string;
}

interface Post {
  slug: string;
  data: PostData;
}

interface PostFilterProps {
  allPosts: Post[];
  currentLang: "zh-CN" | "en";
}

// --- 高亮辅助组件 ---
const HighlightText = ({
  text,
  keyword,
}: {
  text: string;
  keyword: string;
}) => {
  if (!keyword || !keyword.trim()) {
    return <>{text}</>;
  }
  const escapedKeyword = keyword.replace(/[.*+?^${}()|[]]/g, "\\$&");
  const regex = new RegExp(`(${escapedKeyword})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="highlight-mark">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
};

export default function PostFilter({ allPosts, currentLang }: PostFilterProps) {
  const [filterType, setFilterType] = useState<"all" | "zh-CN" | "en">(
    currentLang,
  );
  const [searchQuery, setSearchQuery] = useState("");

  const t = {
    all: currentLang === "zh-CN" ? "全部" : "All",
    cnOnly: currentLang === "zh-CN" ? "仅中文" : "Chinese Only",
    enOnly: currentLang === "zh-CN" ? "仅英文" : "English Only",
    searchPlaceholder:
      currentLang === "zh-CN" ? "搜索日志或标签..." : "Search logs or tags...",
    noResults:
      currentLang === "zh-CN"
        ? "没有找到匹配的文章"
        : "No matching posts found.",

    clear: currentLang === "zh-CN" ? "清除" : "Clear",
  };

  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const langMatch =
        filterType === "all" ? true : post.data.lang === filterType;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return langMatch;

      const titleMatch = post.data.title.toLowerCase().includes(q);
      const descMatch = post.data.description.toLowerCase().includes(q);
      const tagMatch =
        post.data.tags?.some((tag) => tag.toLowerCase().includes(q)) ?? false;

      return langMatch && (titleMatch || descMatch || tagMatch);
    });
  }, [allPosts, filterType, searchQuery]);

  const filterOptions = [
    { id: "all", label: t.all },
    { id: "zh-CN", label: t.cnOnly },
    { id: "en", label: t.enOnly },
  ];

  return (
    <div className="post-filter-container">
      <div className="filter-controls">
        <div className="filter-radios">
          {filterOptions.map((option) => {
            const isActive = filterType === option.id;
            return (
              <button
                key={option.id}
                onClick={() => setFilterType(option.id as any)}
                className={`radio-item ${isActive ? "active" : ""}`}
                aria-pressed={isActive}>
                <span
                  className={`custom-radio ${isActive ? "active" : ""}`}></span>
                <span className="radio-label">{option.label}</span>
              </button>
            );
          })}
        </div>

        <div className="search-wrapper">
          <input
            aria-label="Input area to search logs"
            type="text"
            className="search-input"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="search-clear-btn">
              <X aria-label="Clear search" />
            </button>
          )}
        </div>
      </div>

      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article key={post.slug} className="post-card">
              <div className="post-meta">
                <time className="post-date">
                  <Calendar size={14} />
                  {new Date(post.data.date).toLocaleDateString(currentLang, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>

                {filterType === "all" && (
                  <span className={`lang-badge ${post.data.lang}`}>
                    {currentLang === "en"
                      ? post.data.lang === "zh-CN"
                        ? "CN"
                        : "EN"
                      : post.data.lang === "zh-CN"
                        ? "中"
                        : "英"}
                  </span>
                )}

                {post.data.tags && post.data.tags.length > 0 && (
                  <div className="post-tags">
                    {post.data.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-item"
                        aria-label="tag-item">
                        <Tag size={12} />
                        <span>
                          <HighlightText text={tag} keyword={searchQuery} />
                        </span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <h2 className="post-title">
                <a href={`/blog/${post.slug}/`}>
                  <HighlightText text={post.data.title} keyword={searchQuery} />
                </a>
              </h2>

              <p className="post-desc">
                <HighlightText
                  text={post.data.description}
                  keyword={searchQuery}
                />
              </p>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>{t.noResults}</p>
            <button
              onClick={() => {
                setFilterType("all");
                setSearchQuery("");
              }}
              className="clear-filter-link">
              {t.clear}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
