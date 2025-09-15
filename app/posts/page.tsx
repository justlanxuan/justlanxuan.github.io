/** @format */

import { posts } from "@/data/posts";
import PageLayout from "@/components/PageLayout";

export default function PostsPage() {
  return (
    <PageLayout title={posts.title}>
      {posts.items.map((post, i) => (
        <article key={i} className="post">
          <h2 className="post-title">{post.title}</h2>
          <p className="post-date">{post.date}</p>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      ))}
    </PageLayout>
  );
}
