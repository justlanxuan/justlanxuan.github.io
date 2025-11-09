/** @format */

"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import PageLayout from "@/components/PageLayout";

// 定义课程项类型
interface CourseItem {
  title: string;
  filterTags?: string[];
  displayTags?: string[];
  link?: string;
  note?: string | null;
}

export default function CoursesPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  // 收集所有 filterTag（去重）
  const tagSet = Array.from(
    new Set([
      "All",
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
          selectedTag === "All"
            ? year.items
            : year.items.filter((c: CourseItem) =>
                (c.filterTags || []).includes(selectedTag)
              );

        if (filteredItems.length === 0) return null;

        return (
          
          <section key={i} className="year-block">
            <h2 className="year-heading">
              {year.year} <span className="term">({year.term})</span>
            </h2>
            <div className="course-list">
              {filteredItems.map((course: CourseItem, j) => (
                <div key={j} className="course-item">
                  {/* 标题 + Note */}
                  {course.link ? (
                    <span className="course-title">
                      {course.title}
                      {course.link && (
                        <>
                          {" "}
                          (
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                          >
                            Link
                          </a>
                          )
                        </>
                      )}
                    </span>
                  ) : (
                    <span className="course-title">
                      {course.title}
                      {course.note && (
                        <>
                          {" "}
                          (
                          <a
                            href={course.note}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600"
                          >
                            Note
                          </a>
                          )
                        </>
                      )}
                    </span>
                  )}

                  {/* Tags */}
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
