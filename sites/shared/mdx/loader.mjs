// We need fs and path to read from disk
import fs from 'fs'
import path from 'path'

// MDX compiler
import { compile } from '@mdx-js/mdx'

// Remark plugins from the ecosystem
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkCopyLinkedFiles from 'remark-copy-linked-files'
import smartypants from 'remark-smartypants'
// FreeSewing custom remark plugins
import { remarkIntroAsFrontmatter } from './remark-intro-as-frontmatter.mjs'
import { remarkTocAsFrontmatter } from './remark-toc-as-frontmatter.mjs'
// Rehype plugins from the ecosystem
import rehypeHighlight from 'rehype-highlight'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypeJargon from 'pkgs/rehype-jargon/src/index.mjs'
import rehypeHighlightLines from 'pkgs/rehype-highlight-lines/src/index.mjs'

/*
 * Summary: Loads markdown from disk and compiles it as MDX.
 *
 * @param (string) language - language to load (eg: 'en')
 * @param (string) site - site to load (either 'dev' or 'org')
 * @param (string) slug - slug of the page (eg: 'guides/patterns')
 *
 * @link https://mdxjs.com/guides/mdx-on-demand/
 *
 */
const jargonTransform = (term, html) => `<details class="inline jargon-details">
  <summary class="jargon-term">
    ${term}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 jargon-close" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </summary>
  <div class="jargon-info">
  ${html}</div></details>`

export const mdxLoader = async (language, site, slug, jargon) => {
  // TODO: Will this work on Windows?
  const md = await fs.promises.readFile(
    path.resolve(`../../markdown/${site}/${slug}/${language}.md`),
    'utf-8'
  )
  const intro = []
  const mdx = String(
    await compile(md, {
      outputFormat: 'function-body',
      development: false,
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkGfm,
        smartypants,
        [
          remarkCopyLinkedFiles,
          {
            destinationDir: path.resolve(`../${site}/public/mdx`),
            sourceDir: path.resolve(`../../markdown/${site}/${slug}`),
            staticPath: '/mdx/',
          },
        ],
        remarkTocAsFrontmatter,
        [remarkIntroAsFrontmatter, { intro }],
      ],
      rehypePlugins: [
        [rehypeJargon, { jargon, transform: jargonTransform }],
        [
          rehypeHighlight,
          {
            plainText: ['dot', 'http', 'mermaid'],
            aliases: {
              javascript: [
                'design/src/index.mjs',
                'design/src/part.mjs',
                'design/src/bib.mjs',
                'index.mjs',
                'part.mjs',
                'bib.mjs',
              ],
              json: [
                '200.json',
                '201.json',
                '204.json',
                '400.json',
                '401.json',
                '403.json',
                '404.json',
                '500.json',
              ],
              markdown: ['en.md'],
            },
          },
        ],
        [
          rehypeHighlightLines,
          {
            highlightClass: ['highlight-lines', 'border-l-4'],
            strikeoutClass: [
              'strikeout-lines',
              'bg-orange-300',
              'bg-opacity-5',
              'border-l-4',
              'opacity-80',
              'line-through',
              'decoration-orange-500',
            ],
          },
        ],
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: { className: 'heading-autolink' },
          },
        ],
      ],
    })
  )

  return mdx
}
