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
  
  // 处理 links 字段
  const linksArray = data.links && Array.isArray(data.links) 
    ? JSON.stringify(data.links)
    : null;
  
  // 构建对象字符串
  const fields = [
    `title: "${data.title}"`,
    `slug: "${data.slug}"`,
    `tags: ${tagsArray}`,
    `date: "${data.date}"`,
    `image: "${data.image}"`,
    `description: "${data.description}"`,
    `content: ${contentString}`
  ];
  
  // 只有当 links 存在时才添加
  if (linksArray) {
    fields.push(`links: ${linksArray}`);
  }
  
  return `{
    ${fields.join(',\n    ')}
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