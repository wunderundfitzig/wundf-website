import React from 'react'
import ReactMarkdown from 'react-markdown'
import { queryPageData } from 'lib/kirby-query'
import Navigation from 'components/navigation'

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

      <div className='text-block'>
        <ReactMarkdown>{pageData.content}</ReactMarkdown>
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

export default Privacy
