import { FunctionComponent } from 'react'
import Image from 'next/image'
import { News } from 'lib/models/news'
import breakpoints from 'lib/breakpoints'
import colors from 'lib/colors'

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
          grid-gap: 1em;
          grid-template-columns: 1fr;
          grid-template-areas: 'main';
          align-items: start;
          width: 100%;
          position: relative;
          overflow: hidden;
          z-index: 0;
        }

        .text {
          grid-area: main;
          margin: 4em 2em;
          background-color: ${colors.beige};
          padding: 1em;
        }

        h2 {
          font-size: 1.2em;
        }

        .image {
          grid-area: main;
          position: relative;
          width: 100%;
          padding-bottom: 180%;
          z-index: -1;
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .work-featured-teaser {
            grid-gap: 1em;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 'image text';
          }

          .text {
            grid-area: text;
            max-width: 450px;
          }

          h2 {
            margin: 0;
          }

          .image {
            grid-area: image;
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .work-featured-teaser {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: 'image text text';
            grid-gap: 2em;
            margin-bottom: 2em;
          }

          .text {
            padding-left: 1em;
          }

          h2 {
            font-size: 1.6em;
          }
        }
      `}</style>
    </article>
  )
}

export default WorkFeaturedTeaser
