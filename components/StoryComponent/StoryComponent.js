import React from 'react'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import SplitLayout, { LeftContainer, RightContainer } from '../SplitLayout/SplitLayout'
import { TOCTitle, TOCLink, TopImage, TopTitle, Content, TeaserText, Heading, Image, Text } from './StoryComponent.blocks'

export const TOC = styled(LeftContainer)`
  @media (max-width: ${breakpoints.l.max}px) {
    display: none;
  }
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
