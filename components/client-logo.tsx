import { FunctionComponent, ImgHTMLAttributes } from 'react'
import breakpoints from 'lib/breakpoints'

interface ClientLogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  relativeSize: number
}
const ClientLogo: FunctionComponent<ClientLogoProps> = (props) => {
  const { relativeSize, ...rest } = props
  return (
    <>
      <img {...rest} />
      <style jsx>{`
        img {
          height: ${15 * props.relativeSize}px;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          img {
            height: ${17 * props.relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          img {
            height: ${20 * props.relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          img {
            height: ${25 * props.relativeSize}px;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          img {
            height: ${25 * props.relativeSize}px;
          }
        }
      `}</style>
    </>
  )
}

export default ClientLogo
