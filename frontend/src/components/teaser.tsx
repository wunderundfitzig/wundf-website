import { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import eszett, { sz } from 'eszett'

import colors from 'lib/colors'
import breakpoints from 'lib/breakpoints'
import { publicConfig } from 'lib/config/public-config'
import Style, { css } from 'components/style'

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
          className={sz`plain-link`}
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
        {props.type === 'news' && (
          <Link
            className={sz`link`}
            href={props.link.href}
            target={props.link.target}
            rel='noreferrer'
          >
            {props.link.text}
          </Link>
        )}
      </div>

      <Link
        className={sz`image-link`}
        href={props.link.href}
        target={props.link.target}
        rel='noreferrer'
      >
        <Image
          fill
          priority={props.size === 'featured'}
          className={sz`image`}
          alt=''
          src={imageUrl}
          sizes='300px'
        />
      </Link>

      <Style eszett={eszett}>{css`
        &.teaser {
          display: grid;
          grid-template-areas: 'main';
          align-items: end;
          width: 100%;
          height: 100%;
          position: relative;
          z-index: 0;
        }

        &.featured.teaser {
          grid-column: 1 / -1;
        }

        &.teaser &.category {
          margin: 0 0 0.3em;
          font-size: 0.5em;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: ${colors.brownGrey};
          font-weight: bold;
        }

        &.teaser &.text {
          grid-area: main;
          background-color: ${colors.beige};
          padding: 1em 1em 1.5em 1em;
          width: calc(100% - 3em);
          margin: 10em 0 0;
          overflow: hidden;
        }

        &.teaser &.description {
          line-height: 1.4;
        }

        &.teaser h2& {
          font-size: 1em;
          line-height: 1.3;
          margin: 0em 0 0.5em;
          overflow-wrap: break-word;
        }

        &.teaser &.plain-link {
          color: inherit;
        }

        &.teaser &.image-link {
          grid-area: main;
          align-self: start;
          position: relative;
          padding-bottom: 120%;
          margin-bottom: 4em;
          width: 100%;
          z-index: -1;
          background-color: ${colors.brownGrey};
        }

        &.teaser &.image-link &.image {
          object-fit: cover;
          object-position: 50% 50%;
        }

        &.story-link.teaser &.link {
          color: ${colors.darkBlue};
          border: 1px solid ${colors.blueGrey};
          text-align: center;
          display: inline-block;
          margin: 1em auto 0;
          padding: 0.4em 0.7em;
          border-radius: 2px;
          font-size: 0.8em;
        }

        &.teaser &.link {
          font-size: 0.9em;
          color: ${colors.blue};
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          &.featured.teaser:first-child {
            padding-top: 3em;
            padding-bottom: 2em;
          }

          &.teaser &.text {
            justify-self: center;
            width: calc(100% - 2em);
          }

          &.teaser p& {
            font-size: 0.9em;
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          &.teaser &.text {
            width: calc(100% - 1em);
          }

          &.featured.teaser {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 2em;
            grid-template-areas: 'image text';
            align-items: start;
          }

          &.medium.teaser {
            grid-column: span 2;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 2em;
            grid-template-areas:
              'image text'
              'button button';
            align-content: start;
          }

          &.medium.teaser &.image-link,
          &.featured.teaser &.image-link {
            grid-area: image;
            margin: 0;
          }

          &.medium.teaser &.category,
          &.featured.teaser &.category {
            color: ${colors.beige};
          }

          &.medium.teaser &.text {
            grid-area: text;
            width: 100%;
            align-self: center;
            margin: 0;
            padding: 0;
            background-color: transparent;
            color: white;
            -moz-osx-font-smoothing: grayscale;
          }

          &.featured.teaser &.text {
            grid-area: text;
            width: 100%;
            padding: 0;
            margin: 0;
            background-color: transparent;
            color: white;
            -moz-osx-font-smoothing: grayscale;
          }

          &.story-link.teaser &.link {
            display: block;
            width: 100%;
            font-size: 0.7em;
            margin: 0;
          }

          &.medium.story-link.teaser &.link,
          &.featured.story-link.teaser &.link {
            width: auto;
            display: inline-block;
            background-color: ${colors.beige};
            color: ${colors.darkBlue};
            text-decoration: none;
          }

          &.medium.teaser &.link,
          &.featured.teaser &.link {
            color: ${colors.beige};
            -moz-osx-font-smoothing: grayscale;
            text-decoration: underline;
          }
        }
        @media (min-width: ${breakpoints.l.min}px) {
          &.teaser &.text {
            width: calc(100% - 2em);
          }
          &.featured.teaser {
            grid-column-gap: 2em;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          &.featured.teaser {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: 'image text text';
            align-items: center;
          }

          &.featured.teaser:first-child {
            padding-top: 3em;
            padding-bottom: 0;
          }

          &.featured.teaser &.text {
            margin-bottom: 1em;
          }

          &.teaser p& {
            font-size: 0.95em;
          }

          &.featured.teaser h2& {
            font-size: 1.5em;
          }
        }
      `}</Style>
    </article>
  )
}

export default Teaser
