import React from 'react'
import Clients from '../Clients/Clients.index'
import TopStory from './TopStory'
import { Wrapper, ClientsContainer, StoriesContainer } from './WorkOverview.blocks'

const WorkOverview = ({ stories, clients }) => {
  const topStory = stories[0]

  return <Wrapper>
    <ClientsContainer>
      <Clients clients={clients} />
    </ClientsContainer>
    <StoriesContainer>
      <TopStory story={topStory} />
    </StoriesContainer>
  </Wrapper>
}

export default WorkOverview
