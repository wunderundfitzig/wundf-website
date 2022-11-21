'use client'

import { FunctionComponent } from 'react'
import Image from 'next/image'
import { publicConfig } from 'app/(lib)/config/public-config'
import colors from 'app/(lib)/colors'
import breakpoints from 'app/(lib)/breakpoints'

import KirbyBlocks from 'app/(components)/kirby-blocks'
import { StoryContent } from './fetch-story'

type Props = {
  story: StoryContent
}
const Story: FunctionComponent<Props> = (props) => {
  return (
    <article className='story'>
      <div className='image-wrapper'>
        <Image
          fill
          alt=''
          className='image'
          src={`${publicConfig.backendURL}/${props.story.image.src}`}
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
        .story {
          display: grid;
          grid-template-areas:
            'image'
            'title'
            'content';
          grid-template-columns: 1fr;
          grid-template-rows: 50vh minmax(50vh, auto) auto;
          grid-gap: 0;
          justify-items: center;
          align-items: center;
        }

        .image-wrapper {
          grid-area: image;
          position: relative;
          width: 100%;
          height: 100%;
          background-color: ${colors.brownGrey};
        }

        .image-wrapper :global(.image) {
          object-fit: cover;
          object-position: 50% 50%;
        }

        header {
          grid-area: title;
          text-align: right;
          padding: 1em 2em 3em 5em;
          justify-self: end;
        }

        h1 {
          font-size: 1.7em;
        }

        .content {
          grid-area: content;
          max-width: 800px;
          width: 100%;
          padding: 0 2em;
          margin-bottom: 4em;
          overflow: hidden;
        }

        @media (min-width: ${breakpoints.m.min}px) {
          .story {
            grid-template-areas:
              'title   image   '
              'content content';
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 100vh auto;
            grid-gap: 4em 0;
            justify-items: center;
            align-items: center;
          }

          header {
            padding: 0 2em 2em 2em;
            min-width: 320px;
          }

          .content {
            padding: 0 3em;
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          header {
            padding: 0 3em 2em 5em;
          }

          h1 {
            font-size: 2em;
          }
        }
      `}</style>
    </article>
  )
}

export default Story
