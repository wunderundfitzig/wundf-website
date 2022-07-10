import { FunctionComponent } from 'react'
import Image from 'next/image'
import breakpoints from 'lib/breakpoints'

type ClientLogoProps = {
  src: StaticImageData
  alt: string
  url: string
  relativeSize: number
  align: 'left' | 'right' | 'center'
}
const ClientLogo: FunctionComponent<ClientLogoProps> = (props) => {
  const { relativeSize, ...rest } = props
  return (
    <>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        <Image layout='intrinsic' {...rest} />
      </a>
      <style jsx>{`
        a {
          width: ${20 * relativeSize}px;
          justify-self: ${props.align};
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