'use client'

import { FunctionComponent } from 'react'
import Image, { StaticImageData } from 'next/image'
import breakpoints from 'lib/breakpoints'

type ClientLogoProps = {
  src: StaticImageData
  alt: string
  url: string
  relativeSize: number
  align: 'left' | 'right' | 'center'
}
const ClientLogo: FunctionComponent<ClientLogoProps> = (props) => {
  const { relativeSize, align, ...rest } = props
  return (
    <>
      <a
        href={props.url}
        className={align}
        target='_blank'
        rel='noopener noreferrer'
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image {...rest} />
      </a>
      <style jsx>{`
        a {
          width: ${20 * relativeSize}px;
        }
        a.left {
          justify-self: left;
        }
        a.center {
          justify-self: center;
        }
        a.right {
          justify-self: right;
        }

        a :global(img) {
          width: 100%;
          height: auto;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          a {
            width: ${25 * relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          a {
            width: ${28 * relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          a {
            width: ${30 * relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          a {
            width: ${34 * relativeSize}px;
          }
        }
      `}</style>
    </>
  )
}

export default ClientLogo
