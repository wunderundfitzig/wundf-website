import React, { FunctionComponent } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { fetchFromBackend, FetchResult } from '../lib/apiHelpers'
import { TextPage, textPage } from 'lib/models/text-page'
import Markdown from 'components/markdown'

interface Props {
  textPageResult: FetchResult<TextPage>
}
const Privacy: FunctionComponent<Props> = (props) => {
  if (props.textPageResult.error !== null) {
    return <ErrorPage statusCode={500} title={props.textPageResult.error} />
  }
  const { content } = props.textPageResult.data

  return (
    <>
      <Head>
        <title>wunder & fitzig | Datenschutz | Impressum</title>
      </Head>
      <div className='text-block'>
        <Markdown>{content}</Markdown>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const textPageResult = await fetchFromBackend('/privacy', textPage)
  return { props: { textPageResult } }
}

export default Privacy
