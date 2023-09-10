import { memo } from 'react'
import Tabs from '@/src/tabs'
import Usage from '@/src/usage'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import ReactMarkdown from 'react-markdown'
import EditOnGitHub from '@/src/components/EditOnGitHub'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import SyntaxHighlighter from '@/src/components/SyntaxHighlighter'

const Markdown = memo(({ pathname, markdown }) => {
  return (
    <article>
      <ReactMarkdown
        className="prose text-sm sm:text-base md:text-lg mb-4 max-w-full dark:prose-invert prose-pre:p-0 [&_pre]:!mb-0"
        children={markdown}
        rehypePlugins={[[rehypeRaw], [rehypeSlug], [rehypeAutolinkHeadings]]}
        remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        components={{
          p: ({ children }) => <div className="mb-4">{children}</div>, // replace p tag to div tag
          pre: ({ children }) => <>{children}</>, // remove pre tag
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                code={String(children).replace(/\n$/, '')}
                language={match[1]}
              />
            ) : (
              <code
                className="before:hidden after:hidden bg-black/10 dark:bg-white/10 rounded-md p-1.5"
                {...props}
              >
                {children}
              </code>
            )
          },
          tabs: ({ node, children, ...rest }) => <Tabs {...rest} />,
          usage: ({ node, children, ...rest }) => <Usage {...rest} />
        }}
      />
      {markdown && <EditOnGitHub pathname={pathname} />}
    </article>
  )
})

export default Markdown