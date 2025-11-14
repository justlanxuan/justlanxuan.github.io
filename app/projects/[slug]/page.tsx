/** @format */
import { projects } from "@/data/projects";
import PageLayout from "@/components/PageLayout";
import { marked } from "marked";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.items.findIndex((p) => p.slug === slug);
  const project = projects.items[index];

  if (!project) {
    return (
      <PageLayout title="Not Found">
        <main className="post-wrapper">
          <p>Project not found.</p>
        </main>
      </PageLayout>
    );
  }
  const html = marked(project.content);

  return (
    <PageLayout>
      <article className="project-wrapper">
        <header>
          <h1 className="project-title">{project.title}</h1>
        </header>
        {project.tags && project.tags.length > 0 && (
          <div className="filter-buttons">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <section
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </PageLayout>
  );
}

export function generateStaticParams() {
  return projects.items.map((p) => ({ slug: p.slug }));
}