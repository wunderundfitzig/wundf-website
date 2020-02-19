import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'
import { beige } from '../../lib/colors'
import {
  Title,
  Teaser,
  Link as LinkTemplate,
  Image,
  Wrapper
} from './Story.blocks'

const ContentContainer = styled.div`
  position: relative;
  padding: 30px 30px 0 30px;
  margin: -60px 40px 30px 0;
  background-color: ${beige};
  min-width: 210px;
  z-index: 1;

  @media (min-width: ${breakpoints.sm.min}px) {
    margin-right: calc(100% - 380px);
  }

  @media (min-width: ${breakpoints.m.min}px) {
    margin-top: -180px;
    margin-left: 0;
    margin-right: calc(50% - 15px);
    min-width: 300px;
  }

  @media (min-width: ${breakpoints.l.min}px) {
    margin-top: -80px;
    padding-left: 0;
    margin-right: 0;
  }
`

const VisibleLink = LinkTemplate.withComponent('p')

const StoryWrapper = styled(Wrapper)`
  @media (min-width: ${breakpoints.l.min}px) {
    width: calc(50% - 15px);

    & + & {
      ${ContentContainer} {
        margin-right: 40px;
      }
    }
  }

  > a {
    color: inherit;
    text-decoration: none;

    &:hover ${VisibleLink} {
      border-bottom: 1px solid;
    }
  }
`

const StoryWithOverlay = ({ story }) => (
  <StoryWrapper>
    <Link href='work/[story]' as={`/work/${story.slug}`}>
      <a>
        <Image url={story.image} />
        <ContentContainer>
          <Title>{story.title}</Title>
          <Teaser>{story.teaserText}</Teaser>
          <VisibleLink>{story.linkText}</VisibleLink>
        </ContentContainer>
      </a>
    </Link>
  </StoryWrapper>
)

export default StoryWithOverlay
