/** @format */
"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import PageLayout from "@/components/PageLayout";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  // ✅ 收集所有项目的 tag（去重）
  const tagSet = Array.from(
    new Set([
      "All",
      ...projects.items.flatMap((p) => p.tags || []),
    ])
  );

  // ✅ 按标签筛选
  const filteredProjects =
    selectedTag === "All"
      ? projects.items
      : projects.items.filter((p) =>
          (p.tags || []).includes(selectedTag)
        );

  return (
    <PageLayout title={projects.title}>
      {/* ===== Filter Buttons ===== */}
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

      {/* ===== Projects Grid ===== */}
      <div className="projects-grid">
        {filteredProjects.map((p, i) => (
          <Link key={i} href={`/projects/${p.slug}`} className="project-card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${p.image})` }}
            />

            <div className="card-content">
              <h3>{p.title}</h3>
              <p className="project-description">{p.description}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}