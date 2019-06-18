import React from 'react'
import styled from '@emotion/styled'
import { BackgroundImage, Title, whiteText, linkStyles } from '../../lib/blocks'
import { darkGrey, beige, orange } from '../../lib/colors'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import breakpoints from '../../lib/breakpoints'
import SplitLayout, { LeftContainer, RightContainer } from '../SplitLayout/SplitLayout.index'
import Markdown from '../Markdown/Markdown.index'

const TOC = styled(LeftContainer)`
  @media (max-width: ${breakpoints.l.max}px) {
    display: none;
  }
`

const TOCTitle = styled(Title)`
  color: ${orange};
  font-style: italic;
  font-weight: normal;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

const TOCLink = styled.a`
  ${linkStyles};
`

const TopImage = styled(BackgroundImage)`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 200px 30px 100px;

  @media (min-width: ${breakpoints.m.min}px) {
    margin-top: 30px;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0));
  }
`

const TopTitle = styled(Title)`
  ${whiteText};
  position: relative;
  font-size: 30px !important;
  margin: 0;
  max-width: 500px;
  z-index: 1;
`

const TeaserText = styled.p`
  font-style: italic;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 30px;
  padding-right: 30px;
`

const Content = styled.div`
  position: relative;
  margin-top: -80px;
  margin-right: 100px;
  margin-bottom: 80px;
  max-width: 600px;
  min-width: calc(100vw - 30px);
  background-color: ${beige};
  padding: 40px 30px 0 30px;
  z-index: 1;

  @media (min-width: ${breakpoints.sm.min}px) {
    min-width: 0;
  }
`

const Heading = styled(Title)`
  margin-top: 2em;
`.withComponent('h2')

const Image = styled.img`
  display: block;
  background-color: ${darkGrey};
  width: calc(100% + 30px);
  margin-bottom: 2em;

  @media (min-width: ${breakpoints.sm.min}px) {
    width: 100%;
  }
`

const Text = styled(Markdown)`
  text-align: justify;
`

const StoryComponent = props => {
  const { story } = props

  const sections = story.content
    .filter(section => section.field.name === 'title')
    .map(section => section.value)

  return <article>
    <SplitLayout>
      <TOC>
        <TOCTitle>Inhalt</TOCTitle>
        {sections.map((section, i) =>
          <TOCLink key={i} href={`#${section}`}>{section}</TOCLink>
        )}
      </TOC>
      <RightContainer>
        <TopImage url={getAbsolutAssetURL(story.image.path)}>
          <TopTitle>{story.title}</TopTitle>
        </TopImage>
        <Content>
          <TeaserText>{story.teaserText}</TeaserText>
          {story.content.map((section, i) => {
            switch (section.field.name) {
              case 'title':
                return <Heading key={i} id={section.value}>{section.value}</Heading>
              case 'image':
                return <Image key={i} src={getAbsolutAssetURL(section.value.path)} />
              case 'markdown':
                return <Text key={i} markdown={section.value} />
            }
          })}
        </Content>
      </RightContainer>
    </SplitLayout>
  </article>
}

export default StoryComponent
