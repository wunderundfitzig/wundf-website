import React from 'react'
import { queryPageData } from 'lib/kirby-query'

import Hero from 'components/hero'
import Work from './work'
import Clients from './clients'

export type News = {
  type: 'news'
  slug: string
  title: string
  category: string
  size: 'small' | 'medium' | 'featured'
  order: number
  description: string
  linkText: string
  linkURL: string
  image: { src: string; width: number; height: number }
}
export type StoryLink = {
  type: 'story-link'
  slug: string
  title: string
  category: string
  size: 'small' | 'medium' | 'featured'
  order: number
  description: string
  linkText: string
  storySlug: string
  image?: { src: string; width: number; height: number }
  storyImage: { src: string; width: number; height: number }
}

type PageData = {
  news: News[]
  stories: StoryLink[]
}
const WorkPage = async () => {
  const pageData = await queryPageData<PageData>({
    query: 'page("news")',
    select: {
      news: {
        query: 'page.children.filterBy("intendedTemplate", "news")',
        select: {
          type: 'page.intendedTemplate',
          title: true,
          category: true,
          size: true,
          slug: true,
          order: 'page.indexOf',
          description: true,
          linkText: 'page.link_text',
          linkURL: 'page.link_url',
          image: {
            query: 'page.news_image.toFile',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
      stories: {
        query: 'page.children.filterBy("intendedTemplate", "story-link")',
        select: {
          type: 'page.intendedTemplate',
          title: true,
          category: true,
          size: true,
          slug: true,
          order: 'page.indexOf',
          description: true,
          linkText: 'page.link_text',
          storySlug: 'page.story.toPage.slug',
          image: {
            query: 'page.news_image.toFile',
            select: { src: 'file.id', width: true, height: true },
          },
          storyImage: {
            query: 'page.story.toPage.cover.toFile',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })
  const newsList = [...pageData.news, ...pageData.stories].sort(
    (a, b) => a.order - b.order
  )

  return (
    <>
      <Hero activeRouteName='work' />
      <Clients />
      <Work newsList={newsList} />
    </>
  )
}

export default WorkPage
