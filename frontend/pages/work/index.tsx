import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Hero from 'components/hero'
import Work from 'components/work'
import Clients from 'components/clients'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'

export type News = {
  type: 'news'
  slug: string
  title: string
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
  order: number
  description: string
  linkText: string
  storySlug: string
  image?: { src: string; width: number; height: number }
  storyImage: { src: string; width: number; height: number }
}

interface Props {
  news: News[]
  stories: StoryLink[]
}
const WorkPage: NextPage<PageProps<Props>> = (props) => {
  const newsList = [...props.pageData.news, ...props.pageData.stories].sort(
    (a, b) => a.order - b.order
  )

  return (
    <>
      <Hero />
      <Clients />
      <Work newsList={newsList} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<Props>
> = async () => {
  const result = await queryPageData<Props>({
    query: 'page("news")',
    select: {
      news: {
        query: 'page.children.filterBy("intendedTemplate", "news")',
        select: {
          type: 'page.intendedTemplate',
          title: true,
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
            query: 'page.story.toPage.image',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })

  return {
    props: result,
    revalidate: 1,
  }
}

export default WorkPage
