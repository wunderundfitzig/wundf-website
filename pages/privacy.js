import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { fetchFromBackend } from '../lib/apiHelpers'
import { linkStyles } from '../lib/blocks'
import Markdown from '../components/Markdown/Markdown'

const TextBlock = styled.div`
  max-width: 900px;
  padding: 0 30px;
  margin: 0 auto 40px;

  a {
    ${linkStyles}
  }
`

const Privacy = props => {
  const { content } = props
  return <>
    <Head><title>wunder & fitzig | Datenschutz | Impressum</title></Head>
    <TextBlock>
      <Markdown markdown={content} />
    </TextBlock>
  </>
}

Privacy.getInitialProps = async () => {
  const res = await fetchFromBackend('/privacy')
  return { content: res.content }
}

export default Privacy
