/** @format */

import { about } from "@/data/about";
import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout title={about.title}>
      {about.items.map((item, i) => (
        <p key={i} dangerouslySetInnerHTML={{ __html: item.content }} />
      ))}
    </PageLayout>
  );
}
