import React from 'react'
import Head from 'next/head'
import Navigation from 'app/(components)/navigation'
import WorkStory from './(components)/story'
import { fetchStory } from './(components)/fetch-story'

const Story = async ({ params }: { params: { story: string } }) => {
  const story = await fetchStory(params.story)

  return (
    <>
      <Head>
        <title>{`${story.title} | wunder & fitzig`}</title>
      </Head>
      <Navigation activeRouteName='work' />
      <WorkStory story={story} />
    </>
  )
}

export default Story
