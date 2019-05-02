import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { Image, Title, Teaser, Link } from './WorkOverview.blocks'
import Attribution from './Attribution'

const whiteText = css`
  color: white;
  text-shadow: 0 0 2px black;
  line-height: 1.2em;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  min-height: 300px;
  padding: 50px 30px 90px;
  overflow: hidden;
`

const TopImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0));
  }
`

const TopTitle = styled(Title)`
  ${whiteText};
  text-shadow: none;
  font-size: 30px;
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
      <Attribution imageAttribution={story.imageAttribution} />
    </TopImage>

    <TopTitle>{story.title}</TopTitle>
    <TopTeaser>{story.teaserText}</TopTeaser>
    <TopLink>{story.linkText}</TopLink>
  </Wrapper>

export default TopStory
