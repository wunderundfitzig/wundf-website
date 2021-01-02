import { FunctionComponent } from 'react'
import Image from 'next/image'
import { News } from 'lib/models/news'

interface Props {
  news: News
  gridArea?: string
}
const WorkFeaturedTeaser: FunctionComponent<Props> = (props) => {
  return (
    <article className='work-featured-teaser'>
      <div className='text'>
        <h2>{props.news.title}</h2>
        <p>{props.news.description}</p>
      </div>
      <div className='image'>
        <Image
          src={props.news.image}
          layout='fill'
          objectFit='cover'
          objectPosition='50% 50%'
        />
      </div>

      <style jsx>{`
        .work-featured-teaser {
          grid-area: ${props.gridArea};
          display: grid;
          grid-gap: 2em;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas: 'image text text';
          align-items: start;
          width: 100%;
          position: relative;
          overflow: hidden;
          z-index: 0;
          margin-bottom: 2em;
        }

        .text {
          grid-area: text;
          max-width: 450px;
          padding-left: 1em;
        }

        h2 {
          font-size: 1.6em;
          margin: 0;
        }

        .image {
          grid-area: image;
          position: relative;
          width: 100%;
          padding-bottom: 180%;
          z-index: -1;
        }
      `}</style>
    </article>
  )
}

export default WorkFeaturedTeaser
