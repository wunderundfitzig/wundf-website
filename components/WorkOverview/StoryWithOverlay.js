import React from 'react'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'
import { beige } from '../../lib/colors'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { Title, Teaser, Link, Image, Wrapper } from './Story.blocks'
import Attribution from './Attribution'

const MovedAttribution = styled(Attribution)`
  bottom: 68px;
  left: 10px;
`

const ContentContainer = styled.div`
  position: relative;
  padding: 30px 30px 0 30px;
  margin: -60px 40px 0 0;
  background-color: ${beige};
  min-width: 210px;
  z-index: 1;

  @media (min-width: ${breakpoints.sm.min}px) {
    margin-right: calc(100% - 380px);
  }

  @media (min-width: ${breakpoints.m.min}px) {
    padding-left: 0;
    margin-right: 0;
  }
`

const StoryWrapper = styled(Wrapper)`
  @media (min-width: ${breakpoints.m.min}px) {
    width: calc(50% - 15px);

    & + & {
      ${ContentContainer} {
        margin-right: 40px;
      }
  }
  }
`

const StoryWithOverlay = ({ story }) =>
  <StoryWrapper>
    <Image url={getAbsolutAssetURL(story.image.path)}>
      <MovedAttribution imageAttribution={story.imageAttribution} />
    </Image>
    <ContentContainer>
      <Title>{story.title}</Title>
      <Teaser>{story.teaserText}</Teaser>
      <Link>{story.linkText}</Link>
    </ContentContainer>
  </StoryWrapper>

export default StoryWithOverlay
