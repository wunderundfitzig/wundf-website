import React from 'react'
import styled from '@emotion/styled'
import { beige } from '../../lib/colors'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { Title, Teaser, Link, Image, Wrapper } from './Story.blocks'
import Attribution from './Attribution'

const MovedAttribution = styled(Attribution)`
  top: 8px;
`

const ContentContainer = styled.div`
  padding: 30px 30px 0 30px;
  margin: -60px 40px 0 0;
  background-color: ${beige};
`

const StoryWithOverlay = ({ story }) =>
  <Wrapper>
    <Image url={getAbsolutAssetURL(story.image.path)}>
      <MovedAttribution imageAttribution={story.imageAttribution} />
    </Image>
    <ContentContainer>
      <Title>{story.title}</Title>
      <Teaser>{story.teaserText}</Teaser>
      <Link>{story.linkText}</Link>
    </ContentContainer>
  </Wrapper>

export default StoryWithOverlay
