import path from 'path'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import codeImport from 'remark-code-import'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import { getHighlighter, loadTheme } from 'shiki'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    published: {
      type: 'boolean',
      default: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(path.join(process.cwd(), '/src/lib/themes/dark.json'))
            return await getHighlighter({ theme })
          },
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
            node.properties.className = ['line']
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className = ['line--highlighted']
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted']
          }
        }
      ]
    ]
  }
})
