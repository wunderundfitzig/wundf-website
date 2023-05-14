'use client'

import { FunctionComponent } from 'react'
import breakpoints from 'app/_lib/breakpoints'
import colors from 'app/_lib/colors'

import Teaser from 'app/_components/teaser'
import { News, StoryLink } from './page'

function getLink(news: News | StoryLink): {
  href: string
  text: string
  target?: string
} {
  if (news.type === 'news') {
    return {
      href: news.linkURL,
      text: `+ ${news.linkText}`,
      target: '_blank',
    }
  }
  return {
    href: `/stories/${news.storySlug}`,
    text: news.linkText,
  }
}

function getImage(news: News | StoryLink): {
  src: string
  width: number
  height: number
} {
  if (news.type === 'news') return news.image
  return news.image ?? news.storyImage
}

interface Props {
  newsList: (News | StoryLink)[]
}
const Work: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className='work-articles'>
        {props.newsList.map((news) => (
          <Teaser
            {...news}
            key={news.slug}
            image={getImage(news)}
            link={getLink(news)}
          />
        ))}
      </div>
      <style jsx>{`
        .work-articles {
          position: relative;
          list-style: none;
          margin: 0;
          padding: 0;
          padding-bottom: 4em;
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;
          grid-row-gap: 2em;
          grid-column-gap: 4em;
          grid-auto-flow: dense;
          background-color: ${colors.beige};
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .work-articles {
            grid-template-columns: minmax(0, 300px);
            grid-row-gap: 3em;
            background-color: ${colors.blueGrey};
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          .work-articles {
            grid-template-columns: repeat(2, minmax(0, 300px));
            grid-template-areas: 'featured featured';
            grid-column-gap: 1em;
            grid-row-gap: 4em;
            padding-right: 1.5em;
            padding-left: 1.5em;
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .work-articles {
            grid-gap: 2em;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          .work-articles {
            grid-template-columns: repeat(3, minmax(0, 300px));
            grid-template-areas: 'featured featured featured';
            grid-column-gap: 2em;
            grid-row-gap: 4em;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 6em;
          }
        }
      `}</style>
    </section>
  )
}

export default Work
