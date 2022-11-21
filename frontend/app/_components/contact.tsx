import breakpoints from 'app/_lib/breakpoints'
import colors from 'app/_lib/colors'
import { FunctionComponent } from 'react'

interface Props {
  gridArea?: string
}
const Contact: FunctionComponent<Props> = (props) => {
  return (
    <div className='contact'>
      <a href='mailto:info@wundf.net'>info@wundf.net</a> |{' '}
      <span>+49 (0) 30 644 72 444</span>
      <style jsx>{`
        .contact {
          grid-area: ${props.gridArea};
          font-size: 0.85em;
          color: ${colors.blue};
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .contact {
            grid-area: ${props.gridArea};
            font-size: 0.9em;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
