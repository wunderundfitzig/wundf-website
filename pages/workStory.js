import React from 'react'
import Head from 'next/head'
import { fetchFromBackend } from '../lib/apiHelpers'
import StoryComponent from '../components/StoryComponent/StoryComponent'

const WorkStory = props => {
  const { slug, story } = props
  return (
    <>
      <Head>
        <title>wunder & fitzig | {slug}</title>
      </Head>
      <StoryComponent story={story} />
    </>
  )
}

WorkStory.getInitialProps = async res => {
  const slug = res.query.storySlug
  const story = await fetchFromBackend(`/work/${slug}`)
  return { slug, story }
}

export default WorkStory
