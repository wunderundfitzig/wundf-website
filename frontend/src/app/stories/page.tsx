import React from 'react'
import { queryPageData } from 'lib/kirby-query'
import Navigation from 'components/navigation'
import Stories from './_stories'
import { notFound } from 'next/navigation'

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
  const pageData = await queryPageData<PageData>({
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
  if (pageData === null) notFound()

  return (
    <>
      <Navigation activeRouteName='work' />
      <Stories stories={pageData.stories} />
    </>
  )
}

export default StoriesPage
