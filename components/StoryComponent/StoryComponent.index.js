import React from 'react'
import styled from '@emotion/styled'
import { BackgroundImage, Title, whiteText } from '../../lib/blocks'
import { beige, orange } from '../../lib/colors'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import SplitLayout from '../SplitLayout/SplitLayout.index'
import Markdown from '../Markdown/Markdown.index'

const TOCTitle = styled(Title)`
  color: ${orange};
  font-style: italic;
  font-weight: normal;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

const TopImage = styled(BackgroundImage)`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 200px 30px 100px;

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
  margin-top: 0;
  margin-bottom: 40px;
`

const Content = styled.div`
  position: relative;
  margin-top: -80px;
  margin-right: 100px;
  max-width: 600px;
  background-color: ${beige};
  padding: 40px 60px 0 30px;
  z-index: 1;
`

const StoryComponent = props => {
  const { story } = props
  return <article>
    <SplitLayout>
      <TOCTitle>Inhalt</TOCTitle>
      <>
        <TopImage url={getAbsolutAssetURL(story.image.path)}>
          <TopTitle>{story.title}</TopTitle>
        </TopImage>
        <Content>
          <TeaserText>{story.teaserText}</TeaserText>
          <Markdown markdown={story.text} />
        </Content>
      </>
    </SplitLayout>
  </article>
}

export default StoryComponent
