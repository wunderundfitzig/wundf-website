import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { News } from 'lib/models/news'
import Hero from 'components/hero'
import Work from 'components/work'
import Clients from 'components/clients'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'

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
          linkText: true,
          linkURL: true,
          image: {
            query: 'page.image',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })

  console.log(result)

  return {
    props: result,
    revalidate: 1,
  }
}

export default WorkPage
