import { FunctionComponent } from 'react'
import Image from 'next/image'
import { News } from 'lib/models/news'
import colors from 'lib/colors'

interface Props {
  news: News
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
          width: 100vw;
          min-height: 100vw;
          position: relative;
          overflow: hidden;
        }

        h2 {
          font-size: 1.1em;
          background-color: ${colors.beige};
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
