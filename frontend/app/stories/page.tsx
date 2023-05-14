import React from 'react'
import { queryPageData } from 'app/_lib/kirby-query'
import Navigation from 'app/_components/navigation'
import Stories from './_stories'

export type StoryInfo = {
  slug: string
  title: string
  description: string
  image: { src: string; width: number; height: number }
}

export const metadata = {
  title: 'Stories | wunder & fitzig',
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
