import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1:({children}) => (<h1 className='text-4xl text-primary'>{children}</h1>)
  }
}