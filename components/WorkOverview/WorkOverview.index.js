import React from 'react'
import Clients from '../Clients/Clients.index'
import TopStory from './TopStory'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'

export const Wrapper = styled.div`
  @media (min-width: ${breakpoints.l.min}px) {
    display: flex;
    margin-top: 30px;
  }
`

const WorkOverview = ({ stories, clients }) => {
  const topStory = stories[0]

  return <Wrapper>
    <Clients clients={clients} />
    <section>
      <TopStory story={topStory} />
    </section>
  </Wrapper>
}

export default WorkOverview
