import React from 'react'
import Clients from '../Clients/Clients.index'
import StoryWithoutOverlay from './StoryWithoutOverlay'
import StoryWithOverlay from './StoryWithOverlay'
import TopStory from './TopStory'
import { Wrapper, ClientsContainer, StoriesContainer, OtherStories } from './WorkOverview.blocks'

const WorkOverview = ({ stories, clients }) => {
  const topStory = stories[0]
  const otherStories = stories.slice(1, 3)
  const restStories = stories.slice(3)

  return <Wrapper>
    <ClientsContainer>
      <Clients clients={clients} />
    </ClientsContainer>
    <StoriesContainer>
      <TopStory story={topStory} />
      <OtherStories>
        { otherStories.map(story =>
          <StoryWithOverlay story={story} />
        )}
        { restStories.map(story =>
          <StoryWithoutOverlay story={story} />
        )}
      </OtherStories>
    </StoriesContainer>
  </Wrapper>
}

export default WorkOverview
