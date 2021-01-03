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
        <a>{props.news.linkText}</a>
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
          align-items: end;
          width: 100%;
          position: relative;
          overflow: hidden;
          z-index: 0;
        }

        .text {
          grid-area: main;
          background-color: ${colors.beige};
          padding: 1em 1em 2em 1em;
          width: calc(100% - 3em);
          margin: 6em 0 0;
        }

        h2 {
          font-size: 1.2em;
        }

        .image {
          grid-area: main;
          align-self: start;
          position: relative;
          width: 100%;
          padding-bottom: 180%;
          z-index: -1;
          margin-bottom: 10em;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .work-featured-teaser {
            justify-items: center;
          }

          .text {
            width: calc(100% - 2em);
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          .work-featured-teaser {
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 'image text';
            align-items: start;
            margin-bottom: 2em;
          }

          .image {
            grid-area: image;
            margin: 0;
          }

          .text {
            grid-area: text;
            padding: 0;
            margin: 0;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          .work-featured-teaser {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: 'image text text';
            grid-gap: 2em;
            margin-bottom: 2em;
          }

          .text {
            padding-left: 1em;
            margin-top: 4em;
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
