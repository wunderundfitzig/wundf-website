import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import Navigation from 'components/navigation'

interface Props {
  content: string
}
const Privacy: NextPage<PageProps<Props>> = (props) => {
  return (
    <>
      <Head>
        <title>wunder & fitzig | Datenschutz | Impressum</title>
      </Head>
      <Navigation />

      <div className='text-block'>
        <ReactMarkdown>{props.pageData.content}</ReactMarkdown>
      </div>
      <style jsx>{`
        .text-block {
          max-width: 900px;
          padding: 0 30px;
          margin: 0 auto 40px;
        }
      `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<Props>
> = async () => {
  const result = await queryPageData<Props>({
    query: 'page("privacy")',
    select: {
      content: 'page.content.markdown_content',
    },
  })

  return {
    props: result,
    revalidate: 1,
  }
}

export default Privacy
