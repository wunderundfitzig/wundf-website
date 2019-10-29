import React from 'react'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { SectionTitle, Feed, Image, NewsTitle, Content, LinkWrapper, LinkLabel } from './News.blocks'

export default props => {
  const { news } = props

  return <Feed>
    {news.map(item => {
      return <LinkWrapper href={item.link.url} target='_blank' key={item._id}>
        <article>
          <Image url={getAbsolutAssetURL(item.image.path)} alt={item.image.title}>
            <NewsTitle>{item.title}</NewsTitle>
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
