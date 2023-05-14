import React from 'react'
import ReactMarkdown from 'react-markdown'
import { queryPageData } from 'app/_lib/kirby-query'
import Navigation from 'app/_components/navigation'
import TextBlock from './_text-block'

export const metadata = {
  title: 'Datenschutz / Impressum | wunder & fitzig',
}

const Privacy = async () => {
  const pageData = await queryPageData<{ content: string }>({
    query: 'page("privacy")',
    select: {
      content: 'page.content.markdown_content',
    },
  })

  return (
    <>
      <Navigation />
      <TextBlock>
        <ReactMarkdown>{pageData.content}</ReactMarkdown>
      </TextBlock>
    </>
  )
}

export default Privacy
