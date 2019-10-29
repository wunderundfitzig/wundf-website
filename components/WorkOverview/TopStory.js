import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'
import { whiteText } from '../../lib/blocks'
import colors from '../../lib/colors'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { Link } from '../../routes'
import { Image, Title, Teaser, Link as LinkTemplate } from './Story.blocks'

const text = css`
  color: ${colors.darkGrey};
`

const TopLink = styled(LinkTemplate)`
  display: inline;
`
  .withComponent('p')

const Wrapper = styled.article`
  display: flex;
  width: 100%;
  background-color: ${colors.lightGrey};
  padding: 30px;

  > a {
    display: flex;
    text-decoration: none;
    max-width: 1000px;
    padding: 0 30px;
    margin: 0 auto;

    &:hover ${TopLink} {
      border-bottom: 1px solid;
    }
  }

  margin-bottom: 40px;
`

const TopImage = styled(Image)`
  width: 100%;
  height: 400px;
  margin-right: 30px;
  max-height: none;
`

const ContentContainer = styled.div`
  flex: 1 1 400px;
  padding-top: 40px;
`

const TopTitle = styled(Title)`
  color: black;
  ${'' /* font-size: 30px !important; */}
  ${'' /* text-shadow: none;
  font-weight: 400;
  margin: 0 0 30px; */}
`

const TopTeaser = styled(Teaser)`
  ${text};
`

const TopStory = ({ story }) =>
  <Wrapper>
    <Link to={`/work/${story.title_slug}`}>
      <a>
        <TopImage url={getAbsolutAssetURL(story.image.path)} />
        <ContentContainer>
          <TopTitle>{story.title}</TopTitle>
          <TopTeaser>{story.teaserText}</TopTeaser>
          <TopLink>{story.linkText}</TopLink>
        </ContentContainer>
      </a>
    </Link>
  </Wrapper>

export default TopStory
