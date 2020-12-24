import { FunctionComponent } from 'react'

interface Props {
  gridArea?: string
}
const Contact: FunctionComponent<Props> = (props) => {
  return (
    <div className='contact'>
      <a>info@wundf.net</a> | <a>+49 (0) 30 644 72 444</a>
      <style jsx>{`
        .contact {
          grid-area: ${props.gridArea};
        }
      `}</style>
    </div>
  )
}

export default Contact
