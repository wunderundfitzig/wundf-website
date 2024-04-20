import React from 'react'
import Navigation from 'components/navigation'
import WorkStory from './_story'
import { fetchStory } from './_fetch-story'

export async function generateMetadata({
  params,
}: {
  params: { story: string }
}) {
  const story = await fetchStory(params.story)
  return {
    title: `${story.title} | wunder & fitzig`,
  }
}

const Story = async ({ params }: { params: { story: string } }) => {
  const story = await fetchStory(params.story)

  return (
    <>
      <Navigation activeRouteName='work' />
      <WorkStory story={story} />
    </>
  )
}

export default Story
