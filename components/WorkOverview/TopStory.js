import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'
import colors from '../../lib/colors'
import { Link } from '../../routes'
import { Image, Title, Teaser, Link as LinkTemplate } from './Story.blocks'

const text = css`
  color: white;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;

  @media (min-width: ${breakpoints.l.min}px) {
    color: ${colors.black};
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: auto;
    -o-font-smoothing: auto;
  }
`

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  background-color: ${colors.darkGrey};
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.l.min}px) {
    background-color: ${colors.lightGrey};
  }
`

const TopLink = styled(LinkTemplate)`
  ${text};
  display: inline;
`
  .withComponent('p')

const Inner = styled.a`
  text-decoration: none;
  max-width: 840px;
  margin: 0 auto;
  flex: 1 1 auto;
  cursor: pointer;

  &:hover ${TopLink} {
    border-bottom: 1px solid;
  }

  @media (min-width: ${breakpoints.l.min}px) {
    display: flex;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    max-width: 940px;
  }
`

const TopImage = styled(Image)`
  width: 100%;
  height: 300px;
  max-height: none;

  @media (min-width: ${breakpoints.l.min}px) {
    height: 100%;
    min-height: 400px;
  }
`

const ContentContainer = styled.div`
  flex: 1 1 400px;
  padding: 30px;
`

const TopTitle = styled(Title)`
  ${text};
`

const TopTeaser = styled(Teaser)`
  ${text};
  font-size: 0.9em;
`

const TopStory = ({ story }) =>
  <Wrapper>
    <Link to={`/work/${story.slug}`}>
      <Inner>
        <TopImage url={story.image} />
        <ContentContainer>
          <TopTitle>{story.title}</TopTitle>
          <TopTeaser>{story.teaserText}</TopTeaser>
          <TopLink>{story.linkText}</TopLink>
        </ContentContainer>
      </Inner>
    </Link>
  </Wrapper>

export default TopStory
