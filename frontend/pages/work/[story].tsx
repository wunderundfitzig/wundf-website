import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { Work, workValidator } from '../../lib/models/work'
import { fetchFromBackend, FetchResult } from '../../lib/apiHelpers'
import StoryComponent from '../../old-components/StoryComponent/StoryComponent'
import Navigation from 'components/navigation'

interface Props {
  slug: string
  storyResult: FetchResult<Work>
}
const Story: NextPage<Props> = (props) => {
  const { slug, storyResult } = props
  if (storyResult.error !== null) {
    return <ErrorPage statusCode={500} title={storyResult.error} />
  }
  return (
    <>
      <Head>
        <title>wunder & fitzig | {slug}</title>
      </Head>
      <Navigation />

      <StoryComponent story={storyResult.data} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.story as string
  const storyResult = await fetchFromBackend(`/work/${slug}`, workValidator)
  return { props: { slug, storyResult }, revalidate: 1 }
}

export default Story
