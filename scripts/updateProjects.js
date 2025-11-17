/** @format */
import fs from "fs";
import matter from "gray-matter";

const dir = "./projects"; // Markdown 目录
const outputFile = "./data/projects.ts"; // 输出文件路径

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

const items = files.map((file) => {
  const { data, content } = matter(fs.readFileSync(`${dir}/${file}`, "utf8"));
  const contentString = JSON.stringify(content);
  const tagsArray = Array.isArray(data.tags) 
    ? JSON.stringify(data.tags) 
    : `["${data.tags}"]`;
  return `{
    title: "${data.title}",
    slug: "${data.slug}",
    tags: ${tagsArray},
    date: "${data.date}",
    image: "${data.image}",
    content: ${contentString}
  }`;
});

// 生成最终字符串
const out = `/** @format */
export const projects = {
  title: "Projects",
  items: [${items.join(",\n")}],
};
`;
// 如果文件已存在，先删除，保证重新生成
if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

fs.writeFileSync(outputFile, out);
console.log("✅ Project Generated successfully!");