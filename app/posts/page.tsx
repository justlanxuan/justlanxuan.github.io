/** @format */
import Link from "next/link";
import { posts } from "@/data/posts";
import PageLayout from "@/components/PageLayout";

export default function PostsPage() {
  return (
    <PageLayout title={posts.title}>
      {posts.items.map((post, i) => (
        <article key={i} className="post">
          <h2 className="post-title">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="post-date">{post.date}</p>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </PageLayout>
  );
}