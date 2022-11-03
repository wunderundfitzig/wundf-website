import React from 'react'
import Head from 'next/head'
import { queryPageData } from 'lib/kirby-query'
import Navigation from 'components/navigation'
import WorkStory from 'components/story'

export type StoryContent = {
  title: string
  teaserText: string
  image: { src: string; width: string; height: string }
  content: any
}

type PageData = {
  story: StoryContent
}
const Story = async ({ params }: { params: { story: string } }) => {
  console.log(params)
  const { story } = await queryPageData<PageData>({
    query: `page("work/${params.story}")`,
    select: {
      story: {
        query: 'page',
        select: {
          title: true,
          teaserText: 'page.teaser_text',
          content: 'page.main_content.toBlocks',
          image: {
            query: 'page.cover.toFile',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })

  return (
    <>
      <Head>
        <title>{`${story.title} | wunder & fitzig`}</title>
      </Head>
      <Navigation activeRouteName='work' />
      <WorkStory story={story} />
    </>
  )
}

export default Story
