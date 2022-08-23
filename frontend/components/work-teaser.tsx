import { FunctionComponent } from 'react'
import Image from 'next/image'
import colors from 'lib/colors'
import breakpoints from 'lib/breakpoints'
import { publicConfig } from 'lib/config/public-config'
import { News, StoryLink } from 'pages/work'
import Link from 'next/link'

interface Props {
  news: News | StoryLink
  gridArea?: string
}
const WorkTeaser: FunctionComponent<Props> = (props) => {
  const image =
    props.news.type === 'news'
      ? props.news.image
      : props.news.image ?? props.news.storyImage
  const imageUrl = `${publicConfig.backendURL}/${image.src}`

  return (
    <article className={`work-teaser ${props.news.featured && 'featured'}`}>
      <div className='text'>
        <header>
          <p className='category'>{props.news.category}</p>
          <h2>{props.news.title}</h2>
        </header>
        {props.news.featured && <p>{props.news.description}</p>}
        {props.news.type === 'news' ? (
          <a href={props.news.linkURL} target='_blank' rel='noreferrer'>
            {props.news.linkText}
          </a>
        ) : (
          <Link href={`/work/${props.news.storySlug}`}>
            <a>{props.news.linkText}</a>
          </Link>
        )}
      </div>

      <div className='image'>
        <Image
          src={imageUrl}
          layout='fill'
          objectFit='cover'
          objectPosition='50% 50%'
        />
      </div>

      <style jsx>{`
        .work-teaser {
          grid-area: ${props.gridArea ? props.gridArea : ''};
          display: grid;
          grid-template-areas: 'main';
          align-items: end;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 0;
        }

        .featured.work-teaser {
          grid-column: 1 / -1;
        }

        .category {
          margin: 0 0 0.5em;
          font-size: 0.65em;
          text-transform: uppercase;
          color: ${colors.brownGrey};
          font-weight: bold;
        }

        .text {
          grid-area: main;
          background-color: ${colors.beige};
          padding: 1em 1em 2em 1em;
          width: calc(100% - 3em);
          margin: 10em 0 0;
          overflow: hidden;
        }

        h2 {
          font-size: 1.2em;
          margin: 0em 0 0.5em;
        }

        .image {
          grid-area: main;
          align-self: start;
          position: relative;
          padding-bottom: 120%;
          margin-bottom: 4em;
          width: 100%;
          z-index: -1;
          background-color: ${colors.brownGrey};
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .featured.work-teaser:first-child {
            padding-top: 2em;
            padding-bottom: 3em;
          }

          .text {
            justify-self: center;
            width: calc(100% - 2em);
          }

          p {
            font-size: 0.9em;
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          .text {
            width: calc(100% - 1em);
          }

          .featured.work-teaser {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1em;
            grid-template-areas: 'image text';
            align-items: start;
          }

          .featured .image {
            grid-area: image;
            margin: 0;
          }

          .featured .category {
            color: ${colors.beige};
          }

          .featured .text {
            grid-area: text;
            width: 100%;
            padding: 0;
            margin: 0;
            background-color: transparent;
            box-shadow: none;
            color: white;
            -moz-osx-font-smoothing: grayscale;
          }

          .featured a {
            color: ${colors.beige};
            -moz-osx-font-smoothing: grayscale;
            text-decoration: underline;
          }
        }
        @media (min-width: ${breakpoints.l.min}px) {
          .text {
            width: calc(100% - 2em);
          }
          .featured.work-teaser {
            grid-column-gap: 2em;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          .featured.work-teaser {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: 'image text text';
            align-items: center;
          }

          .featured.work-teaser:first-child {
            padding-top: 2em;
            padding-bottom: 2em;
          }

          .featured .text {
            margin-bottom: 1em;
          }

          p {
            font-size: 0.95em;
          }

          .featured h2 {
            font-size: 1.6em;
          }
        }
      `}</style>
    </article>
  )
}

export default WorkTeaser
