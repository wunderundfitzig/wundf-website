import { FunctionComponent } from 'react'
import Image, { StaticImageData } from 'next/image'
import eszett from 'eszett'

import breakpoints from 'lib/breakpoints'
import Style, { css } from 'components/style'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

type ClientLogoProps = {
  src: StaticImageData
  alt: string
  url: string
  relativeSize: number
  align: 'left' | 'right' | 'center'
}
const ClientLogo: FunctionComponent<ClientLogoProps> = (props) => {
  const { relativeSize, align, url, ...rest } = props
  return (
    <>
      <a
        href={url}
        className={`client-logo ${align}`}
        target='_blank'
        rel='noopener noreferrer'
        style={{ '--relative-size': props.relativeSize }}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...rest} className={eszett} />
      </a>
      <Style eszett={eszett}>{css`
        &.client-logo {
          width: calc(20px * var(--relative-size));
        }
        &.client-logo.left {
          justify-self: left;
        }
        &.client-logo.center {
          justify-self: center;
        }
        &.client-logo.right {
          justify-self: right;
        }

        &.client-logo img& {
          width: 100%;
          height: auto;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          &.client-logo {
            width: calc(25px * var(--relative-size));
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          &.client-logo {
            width: calc(28px * var(--relative-size));
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          &.client-logo {
            width: calc(30px * var(--relative-size));
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          &.client-logo {
            width: calc(34px * var(--relative-size));
          }
        }
      `}</Style>
    </>
  )
}

export default ClientLogo
