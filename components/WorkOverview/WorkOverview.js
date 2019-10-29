import React from 'react'
import StoryWithoutOverlay from './StoryWithoutOverlay'
import StoryWithOverlay from './StoryWithOverlay'
import TopStory from './TopStory'

import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'

const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.m.min}px) {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding: 0 30px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    max-width: 1000px;
    margin-top: 30px;
  }
`

const WorkOverview = ({ stories, clients }) => {
  const topStory = stories[0]
  const otherStories = stories.slice(1, 3)
  const restStories = stories.slice(3)

  return <>
    <TopStory story={topStory} />
    <Inner>
      { otherStories.map((story, i) =>
        <StoryWithOverlay key={i} story={story} />
      )}
      { restStories.map((story, i) =>
        <StoryWithoutOverlay key={i} story={story} />
      )}
    </Inner>
  </>
}

export default WorkOverview
