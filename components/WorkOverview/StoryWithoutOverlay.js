import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { Title, Teaser, Link, Image, Wrapper } from './Story.blocks'
import Attribution from './Attribution'

const StoryWrapper = styled(Wrapper)`
  position: relative;
  width: 100%;
  padding: 60px 30px 0 30px;
`

const StoryTeaser = styled(Teaser)`
  margin-top: 20px;
`

const StoryWithoutOverlay = ({ story }) =>
  <StoryWrapper>
    <Title>{story.title}</Title>
    <Image url={getAbsolutAssetURL(story.image.path)}>
      <Attribution imageAttribution={story.imageAttribution} />
    </Image>
    <StoryTeaser>{story.teaserText}</StoryTeaser>
    <Link>{story.linkText}</Link>
  </StoryWrapper>

export default StoryWithoutOverlay
