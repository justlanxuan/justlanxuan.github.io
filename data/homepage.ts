// data/homepage.ts
/** @format */

import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export const homepageData = {
  name: "Lanxuan",
  tagline: "CS & ELEC student @ HKUST",
  avatar: "/avatar.jpg",
  links: [
    {
      name: "GitHub",
      url: "https://github.com/justlanxuan/",
      icon: "github",
      external: true,
    },
    { name: "CV", url: "/cv.pdf", icon: "cv", external: true },
    {
      name: "Gmail",
      url: "mailto:justlanxuan@gmail.com",
      icon: "gmail",
      external: true,
    },
  ],
   news: [
    {
      title: "Tactile Sensor Design",
      summary: "Design a tactile sensor for contact detection of fabrics",
      date: "2024-10-29",
      image: "/img/tactile-sensor-cover.jpg",
      href: "/projects/tactile-sensor",
    },
    {
      title: "Exchange at Seattle!",
      summary: "Looking forward to my exchange semester in winter 2026 at University of Washington!",
      date: "2026-01-05",
      image: "/img/uw.png",
    },
    {
      title: "New Start at HKUST!",
      summary: "Begin my university journey in Hong Kong.",
      date: "2023-09-01",
      image: "/img/hkust.png",
    },
    {
      title: "Attend ICRA 2025!",
      summary: "Present my work and explore the latest in robotics.",
      date: "2025-05-23",
      href: "posts/icra-2025",
      image: "/post/icra1.jpg"
    },
    {
      title: "Summer Exchange at Prague!",
      summary: "Spent a great summer in Prague exploring European culture.",
      date: "2025-06-03",
      image: "/img/prague.jpg",
    },
    
  ],
};
