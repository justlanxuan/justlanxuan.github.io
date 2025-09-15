/** @format */

"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import PageLayout from "@/components/PageLayout";

export default function ProjectsPage() {
  return (
    <PageLayout title={projects.title}>
      <div className="projects-grid">
        {projects.items.map((p, i) => (
          <Link key={i} href={p.link || "#"} className="project-card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="card-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
