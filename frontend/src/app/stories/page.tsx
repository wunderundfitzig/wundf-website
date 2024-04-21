import React from 'react'
import { notFound } from 'next/navigation'

import Navigation from 'components/navigation'
import Stories from './_stories'
import { fetchStories } from './_fetch-stories'

export type StoryInfo = {
  slug: string
  title: string
  description: string
  image: { src: string; width: number; height: number }
}

export const metadata = {
  title: 'Stories | wunder & fitzig',
}

const StoriesPage = async () => {
  const pageData = await fetchStories()
  if (pageData === null) notFound()

  return (
    <>
      <Navigation activeRouteName='work' />
      <Stories stories={pageData.stories} />
    </>
  )
}

export default StoriesPage
