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

        h2 {
          grid-area: main;
          font-size: 1.2em;
          background-color: ${colors.lightGrey};
          padding: 1em 1em 1.5em;
          margin: 4em 2em 4em 0;
        }

        .bg-image {
          grid-area: main;
          padding-bottom: 180%;
          width: 100%;
          z-index: -1;
        }
      `}</style>
    </article>
  )
}

export default WorkTeaser