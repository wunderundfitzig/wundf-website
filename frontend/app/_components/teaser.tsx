'use client'

import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import colors from 'app/_lib/colors'
import breakpoints from 'app/_lib/breakpoints'
import { publicConfig } from 'app/_lib/config/public-config'

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
        <Link
          className='plain-link'
          href={props.link.href}
          target={props.link.target}
          rel='noreferrer'
        >
          <header>
            <p className='category'>{props.category}</p>
            <h2>{props.title}</h2>
          </header>
          {showDescription && (
            <p className='description'>{props.description}</p>
          )}
        </Link>
        <Link
          className='link'
          href={props.link.href}
          target={props.link.target}
          rel='noreferrer'
        >
          {props.link.text}
        </Link>
      </div>

      <Link
        className='image-link'
        href={props.link.href}
        target={props.link.target}
        rel='noreferrer'
      >
        <Image className='image' alt='' fill src={imageUrl} />
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
          margin: 0 0 0.3em;
          font-size: 0.5em;
          letter-spacing: 0.09em;
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

        .description {
          line-height: 1.4;
        }

        h2 {
          font-size: 1.2em;
          margin: 0em 0 0.5em;
          overflow-wrap: break-word;
        }

        .teaser :global(.plain-link) {
          color: inherit;
        }

        .teaser :global(.image-link) {
          grid-area: main;
          align-self: start;
          position: relative;
          padding-bottom: 120%;
          margin-bottom: 4em;
          width: 100%;
          z-index: -1;
          background-color: ${colors.brownGrey};
        }

        .teaser :global(.image-link .image) {
          object-fit: cover;
          object-position: 50% 50%;
        }

        .story-link :global(.link) {
          color: ${colors.darkBlue};
          border: 1px solid ${colors.blueGrey};
          text-align: center;
          display: inline-block;
          margin: 1em auto 0;
          padding: 0.4em 0.7em;
          border-radius: 2px;
          font-size: 0.8em;
        }

        .teaser :global(.link) {
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

          .medium :global(.image-link),
          .featured :global(.image-link) {
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

          .story-link :global(.link) {
            display: block;
            width: 100%;
            font-size: 0.7em;
            margin: 0;
          }

          .medium.story-link :global(.link),
          .featured.story-link :global(.link) {
            width: auto;
            display: inline-block;
            background-color: ${colors.beige};
            color: ${colors.darkBlue};
            text-decoration: none;
          }

          .medium :global(.link),
          .featured :global(.link) {
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
