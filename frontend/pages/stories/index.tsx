import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import Navigation from 'components/navigation'
import Stories from 'components/stories'

export type StoryInfo = {
  slug: string
  title: string
  description: string
  image: { src: string; width: number; height: number }
}

type Props = {
  stories: StoryInfo[]
}
const StoriesPage: NextPage<PageProps<Props>> = (props) => {
  const { stories } = props.pageData

  return (
    <>
      <Navigation activeRouteName='work' />
      <Stories stories={stories} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<Props>
> = async () => {
  const result = await queryPageData<Props>({
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

  return {
    props: result,
    revalidate: 1,
  }
}

export default StoriesPage
