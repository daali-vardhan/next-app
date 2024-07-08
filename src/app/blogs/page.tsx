import { getAllBlogList } from "@/lib/blogUtils";
import Link from "next/link";

export default function page() {
  const blogs = getAllBlogList();
  return (
    <main className=" w-full h-full">
      <div className="prose dark:prose-invert mx-auto max-w-[80ch] p-4">
        {blogs.map((blog) => {
          return (
            <Link href={`/blogs/${blog}`} key={blog}>
              {blog}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
