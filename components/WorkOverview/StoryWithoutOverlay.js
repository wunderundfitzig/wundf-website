import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { Title, Teaser, Link, Image, Wrapper } from './Story.blocks'
import Attribution from './Attribution'
import breakpoints from '../../lib/breakpoints'

const StoryWrapper = styled(Wrapper)`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 80px 30px 0 30px;

  @media (min-width: ${breakpoints.m.min}px) {
    padding: 0 0 0 calc(50% + 15px);
    margin-top: 80px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top: 30px;
  }
`

const StoryTitle = styled(Title)`
  margin-bottom: 1.4em;
`

const StoryImage = styled(Image)`
  @media (min-width: ${breakpoints.m.min}px) {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(50% - 15px);
    height: 100%;
  }
`

const StoryTeaser = styled(Teaser)`
  margin-top: 2em;
`

const StoryWithoutOverlay = ({ story }) =>
  <StoryWrapper>
    <StoryTitle>{story.title}</StoryTitle>
    <StoryImage url={getAbsolutAssetURL(story.image.path)}>
      <Attribution imageAttribution={story.imageAttribution} />
    </StoryImage>
    <StoryTeaser>{story.teaserText}</StoryTeaser>
    <Link>{story.linkText}</Link>
  </StoryWrapper>

export default StoryWithoutOverlay
