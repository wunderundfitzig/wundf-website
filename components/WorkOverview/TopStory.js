import React from 'react'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import Attribution from './Attribution'
import styled from '@emotion/styled'
import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  min-height: 300px;
  padding: 50px 30px 90px;
  overflow: hidden;
`

const Image = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: ${colors.darkGrey};
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0, 0.8) 10%, rgba(0,0,0, 0.5) 50%, rgba(0,0,0, 0.1) 80%, rgba(0,0,0, 0));
  }
`

const Title = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 400;
  margin: 0 0 50px;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

const Teaser = styled.p`
  width: 80%;
  color: white;
  margin: 0;
  text-shadow: 0 0 4px black;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

const TopStory = ({ story }) =>
  <Wrapper>
    <Image
      url={getAbsolutAssetURL(story.image.path)}
      alt={(story.image.meta || {}).title}>

      <Attribution imageMeta={story.image.meta} />
    </Image>

    <Title>{story.title}</Title>
    <Teaser>{story.teaserText}</Teaser>
  </Wrapper>

export default TopStory
