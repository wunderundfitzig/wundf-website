import React from 'react'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import SplitLayout, { LeftContainer, RightContainer } from '../SplitLayout/SplitLayout'
import { TOCTitle, TOCLink, TopImage, TopTitle, Content, TeaserText, Heading, Image, Text } from './StoryComponent.blocks'

const StoryComponent = props => {
  const { story } = props

  const sections = story.content
    .filter(section => section.field.name === 'title')
    .map(section => section.value)

  return <article>
    <SplitLayout>
      <LeftContainer>
        <TopImage url={getAbsolutAssetURL(story.image.path)} />
      </LeftContainer>
      <RightContainer>
        <Content>
          <TopTitle>{story.title}</TopTitle>
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
