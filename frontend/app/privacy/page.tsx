import React from 'react'
import ReactMarkdown from 'react-markdown'
import { queryPageData } from 'app/(lib)/kirby-query'
import Navigation from 'app/(components)/navigation'
import TextBlock from './(components)/text-block'

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
