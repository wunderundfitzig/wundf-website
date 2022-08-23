import { FunctionComponent } from 'react'
import Image from 'next/image'
import colors from 'lib/colors'
import breakpoints from 'lib/breakpoints'
import { publicConfig } from 'lib/config/public-config'
import { News, StoryLink } from 'pages/work'
import Link from 'next/link'

function getLinkProps(
  news: News | StoryLink
): { href: string; linkText: string; target?: string } {
  if (news.type === 'news') {
    return {
      href: news.linkURL,
      linkText: `+ ${news.linkText}`,
      target: '_blank',
    }
  }
  return {
    href: `/work/${news.storySlug}`,
    linkText: news.linkText,
  }
}

type Props = {
  news: News | StoryLink
}
const WorkTeaser: FunctionComponent<Props> = (props) => {
  const image =
    props.news.type === 'news'
      ? props.news.image
      : props.news.image ?? props.news.storyImage
  const imageUrl = `${publicConfig.backendURL}/${image.src}`
  const showDescription =
    props.news.size === 'featured' || props.news.size === 'medium'
  const { href, target, linkText } = getLinkProps(props.news)

  return (
    <article className={`work-teaser ${props.news.size} ${props.news.type}`}>
      <div className='text'>
        <header>
          <p className='category'>{props.news.category}</p>
          <h2>{props.news.title}</h2>
        </header>
        {showDescription && <p>{props.news.description}</p>}
        <Link href={href}>
          <a className='link' target={target} rel='noreferrer'>
            {linkText}
          </a>
        </Link>
      </div>

      <Link href={href}>
        <a className='image' target={target} rel='noreferrer'>
          <Image
            src={imageUrl}
            layout='fill'
            objectFit='cover'
            objectPosition='50% 50%'
          />
        </a>
      </Link>

      <style jsx>{`
        .work-teaser {
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
          padding: 1em 1em 1.5em 1em;
          width: calc(100% - 3em);
          margin: 10em 0 0;
          overflow: hidden;
        }

        h2 {
          font-size: 1.2em;
          margin: 0em 0 0.5em;
          overflow-wrap: break-word;
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

        .story-link .link {
          color: ${colors.darkBlue};
          border: 1px solid ${colors.blueGrey};
          text-align: center;
          display: inline-block;
          margin: 1em auto 0;
          padding: 0.4em 0.7em;
          border-radius: 2px;
          font-size: 0.8em;
        }

        .link {
          font-size: 0.9em;
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
            grid-column-gap: 2em;
            grid-template-areas: 'image text';
            align-items: start;
          }

          .medium.work-teaser {
            grid-column: span 2;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 2em;
            grid-template-areas:
              'image text'
              'button button';
            align-content: start;
          }

          .medium .image,
          .featured .image {
            grid-area: image;
            margin: 0;
          }

          .medium .category,
          .featured .category {
            color: ${colors.beige};
          }

          .medium .text {
            grid-area: text;
            width: 100%;
            align-self: center;
            margin: 0;
            padding: 0;
            background-color: transparent;
            color: white;
            -moz-osx-font-smoothing: grayscale;
          }

          .featured .text {
            grid-area: text;
            width: 100%;
            padding: 0;
            margin: 0;
            background-color: transparent;
            color: white;
            -moz-osx-font-smoothing: grayscale;
          }

          .story-link .link {
            display: block;
            width: 100%;
          }

          .medium.story-link .link,
          .featured.story-link .link {
            width: auto;
            display: inline-block;
            background-color: ${colors.beige};
            color: ${colors.darkBlue};
            text-decoration: none;
          }

          .medium .link,
          .featured .link {
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
