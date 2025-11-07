/** @format */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  images: { unoptimized: true }, // 必须，Pages 不支持 next/image 优化
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source", // 让 md 文件内容以纯字符串导入
    });
    return config;
  },
};

export default nextConfig;
