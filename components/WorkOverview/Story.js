import React from 'react'
import styled from '@emotion/styled'
import { grey, lightGrey } from '../../lib/colors'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { textContent, link, backgroundImage } from './WorkOverview.blocks'
import Attribution from './Attribution'

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  padding: 30px 30px 80px 30px;
  ${'' /* background-color: ${lightGrey} */}
`

const Image = styled.figure`
  ${backgroundImage}
  background-image: url(${props => props.url});
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
  margin-bottom: 30px;
`

const Title = styled.h1`
  ${textContent};
  font-size: 20px;
  font-weight: 400;
  margin: 20px 0 20px;
`

const Teaser = styled.p`
  ${textContent};
  margin: 0 30px 20px 0;
`

const Link = styled.a`
  ${link};
`

const Story = ({ story }) =>
  <Wrapper>
    <Title>{story.title}</Title>
    <Image url={getAbsolutAssetURL(story.image.path)}>
      <Attribution imageAttribution={story.imageAttribution} />
    </Image>
    <Teaser>{story.teaserText}</Teaser>
    <Link>{story.linkText}</Link>
  </Wrapper>

export default Story
