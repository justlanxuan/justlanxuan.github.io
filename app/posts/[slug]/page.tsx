/** @format */
import { posts } from "@/data/posts";
import PageLayout from "@/components/PageLayout";
import { marked } from "marked";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.items.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageLayout title="Not Found">
        <main className="post-wrapper">
          <p>Post not found.</p>
        </main>
      </PageLayout>
    );
  }

  const html = marked(post.content);

  return (
    <PageLayout>
      <article className="post-wrapper">
        <header>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-date">{post.date}</p>
        </header>

        <section
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </PageLayout>
  );
}

export function generateStaticParams() {
  return posts.items.map((p) => ({ slug: p.slug }));
}