import React from 'react'
import styled from '@emotion/styled'
import { beige } from '../../lib/colors'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { textContent, link, backgroundImage } from './WorkOverview.blocks'
import Attribution from './Attribution'

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  margin: 0 0 80px
`

const Image = styled.figure`
  ${backgroundImage}
  background-image: url(${props => props.url});
  display: block;
  width: 100%;
  height: 200px;
  margin-bottom: 0;
`

const Title = styled.h1`
  ${textContent};
  background-color: ${beige};
  font-size: 20px;
  font-weight: 400;
  padding: 20px 30px;
  margin: -80px 40px 0px 0;
`

const Teaser = styled.p`
  ${textContent};
  background-color: ${beige};
  padding: 0 50px 0 30px;
  margin: 0 0 20px;
`

const Link = styled.a`
  ${link};
  padding: 0 50px 0 30px;
`

const FeaturedStory = ({ story }) =>
  <Wrapper>
    <Image url={getAbsolutAssetURL(story.image.path)}>
      <Attribution imageAttribution={story.imageAttribution} />
    </Image>
    <Title>{story.title}</Title>
    <Teaser>{story.teaserText}</Teaser>
    <Link>{story.linkText}</Link>
  </Wrapper>

export default FeaturedStory
