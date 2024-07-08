import { getBlogBySlug, getAllBlogSlug } from "@/lib/blogUtils"
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllBlogSlug()
}



export default async function page({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug)
  if(blog === null) return notFound();
  const {frontmatter,content} = blog;
  return (
    <main className='h-full w-full p-4'>
      <h1 className="text-blue-400 text-4xl font-bold text-center">{frontmatter.title}</h1>
      <div className='prose dark:prose-invert mx-auto p-4 max-w-[80ch]'>
        {
          content
        }
      </div>
    </main>
  )
}
