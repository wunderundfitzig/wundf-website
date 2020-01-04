import React from 'react'
import { Feed, Image, NewsTitle, Content, LinkWrapper, LinkLabel } from './News.blocks'

export default props => {
  const { news } = props

  return <Feed>
    {news.map(item => {
      return <LinkWrapper href={item.url} target='_blank' key={item.slug}>
        <article>
          <Image url={item.image}>
            <NewsTitle>{item.title}</NewsTitle>
          </Image>
          <Content>
            <p>{item.description}</p>
            <LinkLabel>{item.linkText}</LinkLabel>
          </Content>
        </article>
      </LinkWrapper>
    })}
  </Feed>
}
