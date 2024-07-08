import Blog from './content.mdx'

export default function page() {
  return (
    <main className='h-full w-full '>
      <div className='prose dark:prose-invert mx-auto p-4 max-w-[80ch]'>
        <Blog />
      </div>
    </main>
  )
}
