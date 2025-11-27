/** @format */
import { homepageData } from "@/data/homepage";
import HomeIntro from "@/components/Intro";
import News from "@/components/News";

export default function HomePage() {
  return (
    <>
      <HomeIntro />
       <div className="news-divider" />
      <News items={homepageData.news} />
    </>
  );
}
