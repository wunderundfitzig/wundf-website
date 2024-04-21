import React from 'react'
import Navigation from 'components/navigation'
import WorkStory from './_story'
import { fetchStory } from './_fetch-story'
import { fetchStories } from '../_fetch-stories'

type Props = {
  params: { story: string }
}

export async function generateMetadata({ params }: Props) {
  const story = await fetchStory(params.story)
  return {
    title: `${story.title} | wunder & fitzig`,
  }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  const stories = await fetchStories()

  return stories.stories.map((story) => ({
    story: story.slug,
  }))
}

const Story = async ({ params }: Props) => {
  const story = await fetchStory(params.story)

  return (
    <>
      <Navigation activeRouteName='work' />
      <WorkStory story={story} />
    </>
  )
}

export default Story
