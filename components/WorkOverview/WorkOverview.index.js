import React from 'react'
import Clients from '../Clients/Clients.index'
import StoryWithoutOverlay from './StoryWithoutOverlay'
import StoryWithOverlay from './StoryWithOverlay'
import TopStory from './TopStory'
import { Wrapper, ClientsContainer, StoriesContainer, OtherStories } from './WorkOverview.blocks'

const WorkOverview = ({ stories, clients }) => {
  const topStory = stories[0]
  const secondStory = stories[1]
  const otherStories = stories.slice(2, 4)
  const restStories = stories.slice(4)

  return <Wrapper>
    <ClientsContainer>
      <Clients clients={clients} />
    </ClientsContainer>
    <StoriesContainer>
      <TopStory story={topStory} />
      <OtherStories>
        <StoryWithoutOverlay story={secondStory} />
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
