import React from 'react'
import TopStory from './TopStory'
import styled from '@emotion/styled'

export const Wrapper = styled.section``

const WorkOverview = ({ stories }) => {
  const topStory = stories[0]

  return <Wrapper>
    <TopStory story={topStory} />
  </Wrapper>
}

export default WorkOverview
