import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import StoryComponent from '../../old-components/StoryComponent/StoryComponent'
import Navigation from 'components/navigation'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'

export type Work = {
  title: string
  teaserText: string
  image: { src: string; width: string; height: string }
  content: any
}

interface Props {
  story: Work
}
const Story: NextPage<PageProps<Props>> = (props) => {
  const { story } = props.pageData

  return (
    <>
      <Head>
        <title>wunder & fitzig | {story.title}</title>
      </Head>
      <Navigation />

      <StoryComponent story={story} />
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
    query: `page("work+${slug}")`,
    select: {
      story: {
        query: 'page.children',
        select: {
          title: true,
          teaserText: true,
          content: true,
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

export default Story
