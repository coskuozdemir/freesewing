// Hooks
import { useCallback } from 'react'
import { useDynamicMdx } from 'shared/hooks/use-dynamic-mdx.mjs'
// Components
import { MdxWrapper } from 'shared/components/wrappers/mdx.mjs'
import { measurements } from 'config/measurements.mjs'

export const useMeasurementDocs = (locale) => {
  const loader = (m) =>
    useCallback(
      () =>
        import(
          /* webpackInclude: /docs\/measurements\/[a-z]+\/[a-z][a-z]\.md$/ */ `markdown/docs/measurements/${m}/${locale}.md`
        ),

      [locale]
    )

  const docs = {}

  for (const m of measurements) {
    const { MDX, frontmatter } = useDynamicMdx(loader(m.toLowerCase()))
    docs[m] = (
      <>
        <h2>{frontmatter.title}</h2>
        <MdxWrapper>{MDX}</MdxWrapper>
      </>
    )
  }

  return docs
}
