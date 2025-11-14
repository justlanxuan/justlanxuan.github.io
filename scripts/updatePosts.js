/** @format */
import fs from "fs";
import matter from "gray-matter";

const dir = "./posts"; // Markdown 目录
const outputFile = "./data/posts.ts"; // 输出文件路径

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

const items = files.map((file) => {
  const { data, content } = matter(fs.readFileSync(`${dir}/${file}`, "utf8"));
  const contentString = JSON.stringify(content); // 处理换行符
  return `{
    title: "${data.title}",
    date: "${data.date}",
    slug: "${data.slug}",
    excerpt: "${data.excerpt || ""}",
    content: ${contentString}
  }`;
});

// 生成最终字符串
const out = `/** @format */
export const posts = {
  title: "Posts",
  items: [${items.join(",\n")}],
};
`;
// 如果文件已存在，先删除，保证重新生成
if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

fs.writeFileSync(outputFile, out);
console.log("✅ Post Generated successfully!");