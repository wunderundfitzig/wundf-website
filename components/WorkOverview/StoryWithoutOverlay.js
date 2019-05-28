import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { lightGrey } from '../../lib/colors'
import { Title, Teaser, Link as LinkTemplate, Image, Wrapper } from './Story.blocks'
import Attribution from './Attribution'
import breakpoints from '../../lib/breakpoints'
import { Link } from '../../routes'

const VisibleLink = LinkTemplate.withComponent('p')

const StoryWrapper = styled(Wrapper)`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 0 30px 0 30px;
  min-height: 200px;

  @media (max-width: ${breakpoints.sm.max}px) {
    &:nth-child(2n - 1) {
      background-color: ${lightGrey};
      padding-top: 30px;
      padding-bottom: 40px;
    }
  }

  @media (min-width: ${breakpoints.m.min}px) {
    background-color: none;
    padding: 0 0 0 calc(50% + 15px);
  }

  > a {
    color: inherit;
    text-decoration: none;

    &:hover ${VisibleLink} {
      border-bottom: 1px solid;
    }
  }
`

const StoryTitle = styled(Title)`
  margin-bottom: 1em;

  @media (min-width: ${breakpoints.m.min}px) {
    margin-top: -5px;
    margin-bottom: 0.5em;
  }
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

  @media (min-width: ${breakpoints.m.min}px) {
    margin-top: 0;
  }
`

const StoryWithoutOverlay = ({ story }) =>
  <StoryWrapper>
    <Link to={`story/${story.title_slug}`}>
      <a>
        <StoryTitle>{story.title}</StoryTitle>
        <StoryImage url={getAbsolutAssetURL(story.image.path)}>
          <Attribution imageAttribution={story.imageAttribution} />
        </StoryImage>
        <StoryTeaser>{story.teaserText}</StoryTeaser>
        <VisibleLink>{story.linkText}</VisibleLink>
      </a>
    </Link>
  </StoryWrapper>

export default StoryWithoutOverlay
