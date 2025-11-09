/** @format */
import Link from "next/link";  
import { posts } from "@/data/posts";
import PageLayout from "@/components/PageLayout";
import { marked } from "marked";

export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = posts.items.findIndex((p) => p.slug === slug);
  const post = posts.items[index];

  if (!post) {
    return (
      <PageLayout title="Not Found">
        <main className="post-wrapper">
          <p>Post not found.</p>
        </main>
      </PageLayout>
    );
  }

  const prevPost = posts.items[index - 1];
  const nextPost = posts.items[index + 1];
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
        <nav className="post-nav">
          {prevPost ? (
            <Link href={`/posts/${prevPost.slug}`} className="prev-post">
              ← {prevPost.title}
            </Link>
          ) : (
            <span />
          )}

          {nextPost && (
            <Link href={`/posts/${nextPost.slug}`} className="next-post">
              {nextPost.title} →
            </Link>
          )}
        </nav>
      </article>
    </PageLayout>
  );
}

export function generateStaticParams() {
  return posts.items.map((p) => ({ slug: p.slug }));
}