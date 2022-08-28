import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'
import Navigation from 'components/navigation'
import WorkStory from 'components/work-story'

export type Work = {
  title: string
  teaserText: string
  image: { src: string; width: string; height: string }
  content: any
}

type Props = {
  story: Work
}
const Story: NextPage<PageProps<Props>> = (props) => {
  const { story } = props.pageData

  return (
    <>
      <Head>
        <title>{story.title} | wunder & fitzig</title>
      </Head>
      <Navigation activeRouteName='work' />
      <WorkStory story={story} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<SiteQueryResult<Props>> = async (
  ctx
) => {
  const slug = ctx.params?.story as string

  const result = await queryPageData<Props>({
    query: `page("work/${slug}")`,
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

  return {
    props: result,
    revalidate: 1,
  }
}

export default Story
