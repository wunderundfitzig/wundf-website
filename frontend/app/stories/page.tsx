import React from 'react'
import { queryPageData } from 'lib/kirby-query'
import Navigation from 'components/navigation'
import Stories from './stories'

export type StoryInfo = {
  slug: string
  title: string
  description: string
  image: { src: string; width: number; height: number }
}

type PageData = {
  stories: StoryInfo[]
}
const StoriesPage = async () => {
  const { stories } = await queryPageData<PageData>({
    query: `page("work")`,
    select: {
      stories: {
        query: 'page.children',
        select: {
          title: true,
          slug: true,
          description: 'page.teaser_text',
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
      <Navigation activeRouteName='work' />
      <Stories stories={stories} />
    </>
  )
}

export default StoriesPage
