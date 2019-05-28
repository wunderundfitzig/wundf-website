import React from 'react'
import styled from '@emotion/styled'
import { Link } from '../../routes'
import { BackgroundImage, linkStyles } from '../../lib/blocks'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import Markdown from '../Markdown/Markdown.index'

const Story = props => {
  const { story } = props
  return <article>
    <BackgroundImage url={getAbsolutAssetURL(story.image.path)}>
      <h1>{story.title}</h1>
    </BackgroundImage>
    <p>{story.teaserText}</p>
    <Markdown markdown={story.text} />
  </article>
}

export default Story
