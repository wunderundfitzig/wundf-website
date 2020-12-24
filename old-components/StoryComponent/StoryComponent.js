import React from 'react'
import SplitLayout, {
  LeftContainer,
  RightContainer,
} from '../SplitLayout/SplitLayout'
import {
  TopImage,
  TopTitle,
  Content,
  TeaserText,
  Heading,
  Image,
  StyledMarkdown,
  StyledHTML,
} from './StoryComponent.blocks'

const StoryComponent = (props) => {
  const { story } = props

  // const sections = story.content
  //   .filter(section => section.field.name === 'title')
  //   .map(section => section.value)

  return (
    <article>
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
                  return (
                    <Heading
                      key={i}
                      level={section.level}
                      text={section.text}
                    />
                  )
                case 'image':
                  return (
                    <Image
                      key={i}
                      url={section.url}
                      alt={section.alt}
                      caption={section.caption}
                    />
                  )
                case 'html':
                  return <StyledHTML key={i} html={section.html} />
                case 'markdown':
                  return <StyledMarkdown key={i} markdown={section.markdown} />
              }
            })}
          </Content>
        </RightContainer>
      </SplitLayout>
    </article>
  )
}

export default StoryComponent
