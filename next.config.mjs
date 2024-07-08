/** @type {import('next').NextConfig} */

import createMdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

const options = {
  theme: "one-dark-pro",
};

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [[rehypePrettyCode, rehypeHighlight, options]],
};

const withMdx = createMdx({
  options: mdxOptions,
});

const nextConfig = {
  output: "export",
  // basePath: "/next-app",
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

export default withMdx(nextConfig);
