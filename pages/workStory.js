import React from 'react'
import Head from 'next/head'
import { fetchCollection } from '../lib/apiHelpers'
import StoryComponent from '../components/StoryComponent/StoryComponent.index'

const WorkStory = props => {
  const { slug, story } = props
  return <>
    <Head><title>wunder & fitzig | {slug}</title></Head>
    <StoryComponent story={story} />
  </>
}

WorkStory.getInitialProps = async (res) => {
  const slug = res.query.storySlug
  const work = await fetchCollection('work', { filter: { title_slug: slug }, limit: 1 })
  return { slug: slug, story: work[0] }
}

export default WorkStory
