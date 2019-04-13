import React from 'react'
import { getAbsoluteURL } from '../../lib/apiHelpers'
import { Feed, Image, Title, Content, LinkWrapper, LinkLabel } from './blocks'

export default props => {
  const { news } = props
  return <Feed>
    {news.map(item => {
      return <LinkWrapper href={item.link.url} key={item._id}>
        <article>
          <Image src={getAbsoluteURL(item.image.path)} alt={item.image.meta.title} />
          <Title>{item.title}</Title>
          <Content>
            <p>{item.text}</p>
            <LinkLabel>{item.link.label}</LinkLabel>
          </Content>
        </article>
      </LinkWrapper>
    })}
  </Feed>
}
