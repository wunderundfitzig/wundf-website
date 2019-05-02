import React from 'react'
import Clients from '../Clients/Clients.index'
import Story from './Story'
import FeaturedStory from './FeaturedStory'
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
      <Story story={secondStory} />
      { otherStories.map(story =>
        <FeaturedStory story={story} />
      )}
    </StoriesContainer>
  </Wrapper>
}

export default WorkOverview
