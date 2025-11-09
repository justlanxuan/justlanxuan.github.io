/** @format */
import Link from "next/link";
import { posts } from "@/data/posts";
import PageLayout from "@/components/PageLayout";

export default function PostsPage() {
  return (
    <PageLayout title={posts.title}>
      <main>
        {posts.items.map((post, i) => (
          <article key={i} className="post">
            <h2 style={{ margin: "0.25rem" }}>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <small className="post-date" style={{ display: "block", marginBottom: "0.25rem" }}>
              {post.date}
            </small>
            <p style={{ marginTop: 0 }}>{post.excerpt}</p>
          </article>
        ))}
      </main>
    </PageLayout>
  );
}