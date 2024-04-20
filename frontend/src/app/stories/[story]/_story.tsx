import { FunctionComponent } from 'react'
import Image from 'next/image'

import { publicConfig } from 'lib/config/public-config'
import colors from 'lib/colors'
import breakpoints from 'lib/breakpoints'
import Style, { css } from 'components/style'

import KirbyBlocks from 'app/stories/[story]/_kirby-blocks'
import { StoryContent } from './_fetch-story'

type Props = {
  story: StoryContent
}
const Story: FunctionComponent<Props> = (props) => {
  return (
    <article className='story'>
      <div className='image-wrapper'>
        <Image
          fill
          priority
          alt=''
          className='image'
          src={`${publicConfig.backendURL}/${props.story.image.src}`}
          sizes='(max-width: 550px) 100vw, 50vw'
        />
      </div>
      <header>
        <h1>{props.story.title}</h1>
        <p>{props.story.teaserText}</p>
      </header>
      <section className='content'>
        <KirbyBlocks blocks={props.story.content} />
      </section>
      <Style>{css`
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
          line-height: 1.5;
        }

        .story .image-wrapper {
          grid-area: image;
          position: relative;
          width: 100%;
          height: 100%;
          background-color: ${colors.brownGrey};
        }

        .story .image-wrapper .image {
          object-fit: cover;
          object-position: 50% 50%;
        }

        .story header {
          grid-area: title;
          text-align: right;
          padding: 1em 2em 3em 5em;
          justify-self: end;
        }

        .story h1 {
          font-size: 1.7em;
        }

        .story .content {
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

          .story header {
            padding: 0 2em 2em 2em;
            min-width: 320px;
          }

          .story .content {
            padding: 0 3em;
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .story header {
            padding: 0 3em 2em 5em;
          }

          .story h1 {
            font-size: 2em;
          }
        }
      `}</Style>
    </article>
  )
}

export default Story
