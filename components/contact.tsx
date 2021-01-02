import colors from 'lib/colors'
import { FunctionComponent } from 'react'

interface Props {
  gridArea?: string
}
const Contact: FunctionComponent<Props> = (props) => {
  return (
    <div className='contact'>
      <a href='mailto:info@wundf.net'>info@wundf.net</a> |{' '}
      <a>+49 (0) 30 644 72 444</a>
      <style jsx>{`
        .contact {
          grid-area: ${props.gridArea};
          font-size: 0.8em;
          color: ${colors.blue};
        }
      `}</style>
    </div>
  )
}

export default Contact
