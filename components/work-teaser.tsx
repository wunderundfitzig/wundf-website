import { FunctionComponent } from 'react'
import Image from 'next/image'
import { News } from 'lib/models/news'
import colors from 'lib/colors'
import breakpoints from 'lib/breakpoints'

interface Props {
  news: News
  gridArea?: string
}
const WorkTeaser: FunctionComponent<Props> = (props) => {
  return (
    <article className='work-teaser'>
      <div className='text'>
        <h2>{props.news.title}</h2>
        <p>{props.news.description}</p>
        <a>{props.news.linkText}</a>
      </div>

      <div className='bg-image'>
        <Image
          src={props.news.image}
          layout='fill'
          objectFit='cover'
          objectPosition='50% 50%'
        />
      </div>

      <style jsx>{`
        .work-teaser {
          grid-area: ${props.gridArea};
          display: grid;
          grid-template-areas: 'main';
          align-items: end;
          width: 100%;
          height: 100%;
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
          overflow: hidden;
        }

        h2 {
          font-size: 1.2em;
        }

        .bg-image {
          grid-area: main;
          align-self: start;
          position: relative;
          padding-bottom: 180%;
          width: 100%;
          z-index: -1;
          margin-bottom: 10em;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .work-teaser {
            justify-items: center;
          }
          .text {
            width: calc(100% - 2em);
          }
        }
      `}</style>
    </article>
  )
}

export default WorkTeaser
