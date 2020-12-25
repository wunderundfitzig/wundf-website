import { FunctionComponent, ImgHTMLAttributes } from 'react'
import breakpoints from 'lib/breakpoints'

interface ClientLogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  relativeSize: number
}
const ClientLogo: FunctionComponent<ClientLogoProps> = (props) => {
  const { relativeSize, alt, ...rest } = props
  return (
    <>
      <img {...rest} alt={alt} />
      <style jsx>{`
        img {
          height: ${15 * relativeSize}px;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          img {
            height: ${17 * relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          img {
            height: ${20 * relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          img {
            height: ${25 * relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          img {
            height: ${25 * relativeSize}px;
          }
        }
      `}</style>
    </>
  )
}

export default ClientLogo
