/** @format */

"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import PageLayout from "@/components/PageLayout";

export default function CoursesPage() {
  const [selectedTag, setSelectedTag] = useState("ALL");

  // 收集所有 filterTag（去重）
  const tagSet = Array.from(
    new Set([
      "ALL",
      ...courses.years.flatMap((y) =>
        y.items.flatMap((c) => c.filterTags || [])
      ),
    ])
  );

  return (
    <PageLayout title={courses.title}>
      {/* filter bar */}
      <div className="filter-buttons">
        {tagSet.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {courses.years.map((year, i) => {
        // 按 filterTag 过滤
        const filteredItems =
          selectedTag === "ALL"
            ? year.items
            : year.items.filter((c) =>
                (c.filterTags || []).includes(selectedTag)
              );

        if (filteredItems.length === 0) return null;

        return (
          <section key={i} className="year-block">
            <h2 className="year-heading">
              {year.year} <span className="term">({year.term})</span>
            </h2>
            <div className="course-list">
              {filteredItems.map((course, j) => (
                <div key={j} className="course-item">
                  {course.link ? (
                    <a href={course.link} className="course-title">
                      {course.title}
                    </a>
                  ) : (
                    <span className="course-title">{course.title}</span>
                  )}
                  {course.displayTags && course.displayTags.length > 0 && (
                    <span className="tags">
                      {course.displayTags.map((t, k) => (
                        <span key={k} className="tag">
                          {t}
                        </span>
                      ))}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </PageLayout>
  );
}
