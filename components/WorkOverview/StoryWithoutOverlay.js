import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { Title, Teaser, Link, Image, Story } from './WorkOverview.blocks'
import Attribution from './Attribution'

const Wrapper = styled(Story)`
  position: relative;
  width: 100%;
  padding: 60px 30px 0 30px;
`

const StoryTeaser = styled(Teaser)`
  margin-top: 20px;
`

const StoryWithoutOverlay = ({ story }) =>
  <Wrapper>
    <Title>{story.title}</Title>
    <Image url={getAbsolutAssetURL(story.image.path)}>
      <Attribution imageAttribution={story.imageAttribution} />
    </Image>
    <StoryTeaser>{story.teaserText}</StoryTeaser>
    <Link>{story.linkText}</Link>
  </Wrapper>

export default StoryWithoutOverlay
