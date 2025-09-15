/** @format */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 关键！静态导出
  images: { unoptimized: true }, // 必须，Pages 不支持 next/image 优化
};

export default nextConfig;
