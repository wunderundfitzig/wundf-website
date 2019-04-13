import React from 'react'
import { getAbsoluteURL } from '../../lib/apiHelpers'
import { Feed, Image, Title, Content } from './blocks'

export default props => {
  const { news } = props
  return <Feed>
    {news.map(item => {
      return <article key={item._id}>
        <Image src={getAbsoluteURL(item.image.path)} alt={item.image.meta.title} />
        <Title>{item.title}</Title>
        <Content>
          <p>{item.text}</p>
          <a href={item.link.url}>{item.link.label}</a>
        </Content>
      </article>
    })}
  </Feed>
}
