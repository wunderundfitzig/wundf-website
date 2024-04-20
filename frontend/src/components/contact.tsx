import { FunctionComponent } from 'react'

import breakpoints from 'lib/breakpoints'
import colors from 'lib/colors'
import Style, { css } from 'components/style'

interface Props {
  gridArea?: string
}
const Contact: FunctionComponent<Props> = (props) => {
  return (
    <div className='contact'>
      <a href='mailto:info@wundf.net'>info@wundf.net</a> |{' '}
      <span>+49 (0) 30 644 72 444</span>
      <Style>{css`
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
      `}</Style>
    </div>
  )
}

export default Contact
