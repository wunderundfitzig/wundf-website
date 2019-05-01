import React from 'react'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import Attribution from './Attribution'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import colors from '../../lib/colors'

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
    background: linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0));
  }
`

const content = css`
  max-width: 400px;
`

const whiteText = css`
  color: white;
  text-shadow: 0 0 2px black;
  line-height: 1.2em;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

const Title = styled.h1`
  ${content};
  ${whiteText};
  text-shadow: none;
  font-size: 30px;
  font-weight: 400;
  margin: 0 0 50px;
`

const Teaser = styled.p`
  ${content};
  ${whiteText};
  width: 80%;
  color: white;
  margin: 0 0 20px;
`

const Link = styled.a`
  ${content};
  ${whiteText};
  font-weight: bold;

  &::before {
    content: '+ ';
  }
`

const TopStory = ({ story }) =>
  <Wrapper>
    <Image url={getAbsolutAssetURL(story.image.path)}>
      <Attribution imageAttribution={story.imageAttribution} />
    </Image>

    <Title>{story.title}</Title>
    <Teaser>{story.teaserText}</Teaser>
    <Link>{story.linkText}</Link>
  </Wrapper>

export default TopStory
