import { FunctionComponent } from 'react'
import Image from 'next/image'
import { Work } from '../pages/work/[story]'
import { publicConfig } from 'lib/config/public-config'
import KirbyBlocks from './kirby-blocks'
import colors from 'lib/colors'

type Props = {
  story: Work
}
const WorkStory: FunctionComponent<Props> = (props) => {
  return (
    <article className='work-story'>
      <div className='image'>
        <Image
          src={`${publicConfig.backendURL}/${props.story.image.src}`}
          layout='fill'
          objectFit='cover'
          objectPosition='50% 50%'
        />
      </div>
      <header>
        <h1>{props.story.title}</h1>
        <p>{props.story.teaserText}</p>
      </header>
      <section className='content'>
        <KirbyBlocks blocks={props.story.content} />
      </section>
      <style jsx>{`
        .work-story {
          display: grid;
          grid-template-areas:
            'title   image   '
            'content content';
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 100vh auto;
          grid-gap: 4em 0;
          justify-items: center;
          align-items: center;
        }

        .image {
          grid-area: image;
          position: relative;
          width: 100%;
          height: 100%;
          background-color: ${colors.brownGrey};
        }

        header {
          grid-area: title;
          text-align: right;
          padding: 5em 3em 8em 5em;
          justify-self: end;
        }

        h1 {
          font-size: 2em;
        }

        .content {
          grid-area: content;
          max-width: 800px;
          width: 100%;
          margin-bottom: 4em;
        }
      `}</style>
    </article>
  )
}

export default WorkStory
