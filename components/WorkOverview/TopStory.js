import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { Image, Title, Teaser, Link } from './Story.blocks'
import Attribution from './Attribution'

const whiteText = css`
  max-width: 400px;
  color: white;
  text-shadow: 0 0 2px black;
  line-height: 1.2em;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;

  @media (min-width: ${breakpoints.m.min}px) {
    width: 50%;
  }
`

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  min-height: 300px;
  padding: 50px 30px 90px;

  margin-bottom: 60px;
`

const MovedAttribution = styled(Attribution)`
  right: 10px;
`

const TopImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: none;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0));
  }
`

const ContentContainer = styled.div`
  max-width: 840px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.xl.min}px) {
    margin: 0;
  }
`

const TopTitle = styled(Title)`
  ${whiteText};
  font-size: 30px !important;
  text-shadow: none;
  font-weight: 400;
  margin: 0 0 40px;
`

const TopTeaser = styled(Teaser)`
  ${whiteText};
  width: 80%;
  color: white;
`

const TopLink = styled(Link)`
  ${whiteText};
`

const TopStory = ({ story }) =>
  <Wrapper>
    <TopImage url={getAbsolutAssetURL(story.image.path)}>
      <MovedAttribution imageAttribution={story.imageAttribution} />
    </TopImage>
    <ContentContainer>
      <TopTitle>{story.title}</TopTitle>
      <TopTeaser>{story.teaserText}</TopTeaser>
      <TopLink>{story.linkText}</TopLink>
    </ContentContainer>
  </Wrapper>

export default TopStory
