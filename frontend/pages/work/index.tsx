import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Hero from 'components/hero'
import Work from 'components/work'
import Clients from 'components/clients'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'

export type News = {
  slug: string
  title: string
  description: string
  linkText: string
  linkURL: string
  image: { src: string; width: number; height: number }
}

interface Props {
  news: News[]
}
const WorkPage: NextPage<PageProps<Props>> = (props) => {
  return (
    <>
      <Hero />
      <Clients />
      <Work newsList={props.pageData.news} />
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
        query: 'page.children',
        select: {
          title: true,
          slug: true,
          description: true,
          linkText: 'page.link_text',
          linkURL: 'page.link_url',
          image: {
            query: 'page.image',
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
