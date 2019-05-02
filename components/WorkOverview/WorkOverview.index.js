import React from 'react'
import Clients from '../Clients/Clients.index'
import StoryWithoutOverlay from './StoryWithoutOverlay'
import StoryWithOverlay from './StoryWithOverlay'
import TopStory from './TopStory'
import { Wrapper, ClientsContainer, StoriesContainer } from './WorkOverview.blocks'

const WorkOverview = ({ stories, clients }) => {
  const topStory = stories[0]
  const secondStory = stories[1]
  const otherStories = stories.slice(2)

  return <Wrapper>
    <ClientsContainer>
      <Clients clients={clients} />
    </ClientsContainer>
    <StoriesContainer>
      <TopStory story={topStory} />
      <StoryWithoutOverlay story={secondStory} />
      { otherStories.map(story =>
        <StoryWithOverlay story={story} />
      )}
    </StoriesContainer>
  </Wrapper>
}

export default WorkOverview
