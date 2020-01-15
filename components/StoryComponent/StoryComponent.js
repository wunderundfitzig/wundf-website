import React from 'react'
import SplitLayout, { LeftContainer, RightContainer } from '../SplitLayout/SplitLayout'
import { TopImage, TopTitle, Content, TeaserText, Heading, Image, Text } from './StoryComponent.blocks'

const StoryComponent = props => {
  const { story } = props

  // const sections = story.content
  //   .filter(section => section.field.name === 'title')
  //   .map(section => section.value)

  return <article>
    <SplitLayout>
      <LeftContainer>
        <TopImage url={story.image} />
      </LeftContainer>
      <RightContainer>
        <Content>
          <TopTitle>{story.title}</TopTitle>
          <TeaserText>{story.teaserText}</TeaserText>
          {story.content.map((section, i) => {
            switch (section.type) {
              case 'heading':
                return <Heading key={i} id={section.text}>{section.text}</Heading>
              case 'image':
                return <Image key={i} src={section.image} />
              case 'text':
                return <Text key={i} markdown={section.text} />
            }
          })}
        </Content>
      </RightContainer>
    </SplitLayout>
  </article>
}

export default StoryComponent
