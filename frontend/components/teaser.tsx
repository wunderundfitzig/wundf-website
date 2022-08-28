import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import colors from 'lib/colors'
import breakpoints from 'lib/breakpoints'
import { publicConfig } from 'lib/config/public-config'

type Props = {
  size: 'small' | 'medium' | 'featured'
  type: 'news' | 'story-link' | 'story'
  title: string
  category: string
  description: string
  image: { src: string; width: number; height: number }
  link: {
    text: string
    href: string
    target?: string
  }
}
const Teaser: FunctionComponent<Props> = (props) => {
  const imageUrl = `${publicConfig.backendURL}/${props.image.src}`
  const showDescription = props.size === 'featured' || props.size === 'medium'

  return (
    <article className={`teaser ${props.size} ${props.type}`}>
      <div className='text'>
        <Link href={props.link.href}>
          <a target={props.link.target} rel='noreferrer'>
            <header>
              <p className='category'>{props.category}</p>
              <h2>{props.title}</h2>
            </header>
            {showDescription && <p>{props.description}</p>}
          </a>
        </Link>
        {props.type === 'news' && (
          <Link href={props.link.href}>
            <a className='link' target={props.link.target} rel='noreferrer'>
              {props.link.text}
            </a>
          </Link>
        )}
      </div>

      <Link href={props.link.href}>
        <a className='image' target={props.link.target} rel='noreferrer'>
          <Image
            src={imageUrl}
            layout='fill'
            objectFit='cover'
            objectPosition='50% 50%'
          />
        </a>
      </Link>

      <style jsx>{`
        .teaser {
          display: grid;
          grid-template-areas: 'main';
          align-items: end;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 0;
        }

        .featured.teaser {
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

        a {
          color: inherit;
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
          color: ${colors.blue};
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .featured.teaser:first-child {
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

          .featured.teaser {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 2em;
            grid-template-areas: 'image text';
            align-items: start;
          }

          .medium.teaser {
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
          .featured.teaser {
            grid-column-gap: 2em;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          .featured.teaser {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: 'image text text';
            align-items: center;
          }

          .featured.teaser:first-child {
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

export default Teaser
