import React from 'react'
import Navigation from 'components/navigation'
import WorkStory from './_story'
import { fetchStory } from './_fetch-story'
import { fetchStories } from '../_fetch-stories'

type Params = { story: string }
type Props = {
  params: Promise<Params>
}

export async function generateMetadata(props: Props) {
  const params = await props.params
  const story = await fetchStory(params.story)
  return {
    title: `${story.title} | wunder & fitzig`,
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  const stories = await fetchStories()

  return stories.stories.map((story) => ({
    story: story.slug,
  }))
}

export default async function Story(props: Props) {
  const params = await props.params
  const story = await fetchStory(params.story)

  return (
    <>
      <Navigation activeRouteName='work' />
      <WorkStory story={story} />
    </>
  )
}
