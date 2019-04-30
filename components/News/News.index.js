import React from 'react'
import { getAbsoluteURL } from '../../lib/apiHelpers'
import { Feed, Image, Title, Content, LinkWrapper, LinkLabel } from './News.blocks'

export default props => {
  const { news } = props

  return <Feed>
    {news.map(item => {
      return <LinkWrapper href={item.link.url} target='_blank' key={item._id}>
        <article>
          <Image url={getAbsoluteURL(item.image.path)} alt={(item.image.meta || {}).title}>
            <Title>{item.title}</Title>
          </Image>
          <Content>
            <p>{item.text}</p>
            <LinkLabel>{item.link.label}</LinkLabel>
          </Content>
        </article>
      </LinkWrapper>
    })}
  </Feed>
}
