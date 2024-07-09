import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeHighlight from "rehype-highlight";

const contentDir = path.join(process.cwd(), "src", "content");

export async function getBlogBySlug(slug: string): Promise<any | null> {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  if (!fs.existsSync(filePath)) return null;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
  }>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrettyCode, rehypeHighlight],
      },
    },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getBlogs() {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name)),
  );
  return blogs;
}

export function getAllBlogList() {
  const files = fs.readdirSync(contentDir);
  return files.map((file) => file.split(".")[0]);
}

export function getAllBlogSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
