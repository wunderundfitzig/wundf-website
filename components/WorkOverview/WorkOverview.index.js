import React from 'react'
import Clients from '../Clients/Clients.index'
import StoryWithoutOverlay from './StoryWithoutOverlay'
import StoryWithOverlay from './StoryWithOverlay'
import TopStory from './TopStory'
import SplitLayout from '../SplitLayout/SplitLayout.index'

const WorkOverview = ({ stories, clients }) => {
  const topStory = stories[0]
  const otherStories = stories.slice(1, 3)
  const restStories = stories.slice(3)

  return <SplitLayout>
    <Clients clients={clients} />
    <>
      <TopStory story={topStory} />
      { otherStories.map((story, i) =>
        <StoryWithOverlay key={i} story={story} />
      )}
      { restStories.map((story, i) =>
        <StoryWithoutOverlay key={i} story={story} />
      )}
    </>
  </SplitLayout>
}

export default WorkOverview
