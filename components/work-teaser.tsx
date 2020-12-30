import { FunctionComponent } from 'react'
import Image from 'next/image'
import { News } from 'lib/models/news'
import colors from 'lib/colors'

interface Props {
  news: News
  gridArea?: string
}
const WorkTeaser: FunctionComponent<Props> = (props) => {
  return (
    <article className='work-item'>
      <h2>{props.news.title}</h2>
      <div className='spacer' />
      <div className='bg-image'>
        <Image
          src={props.news.image}
          layout='fill'
          objectFit='cover'
          objectPosition='50% 50%'
        />
      </div>

      <style jsx>{`
        .work-item {
          grid-area: ${props.gridArea};
          display: grid;
          grid-template-areas: 'main';
          align-items: start;
          width: 100%;
          position: relative;
          overflow: hidden;
          z-index: 0;
        }

        .spacer {
          grid-area: main;
          width: 100%;
          padding-bottom: 180%;
        }

        h2 {
          grid-area: main;
          font-size: 1.1em;
          background-color: ${colors.lightGrey};
          width: 70%;
          padding: 1em 1em 1.5em;
          margin: 4em 0;
        }

        .bg-image {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
        }
      `}</style>
    </article>
  )
}

export default WorkTeaser
