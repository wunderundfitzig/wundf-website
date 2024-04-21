import { FunctionComponent, ReactElement } from 'react'
import Style, { css } from 'components/style'

type Props = { children: ReactElement }
const TextBlock: FunctionComponent<Props> = (props) => {
  return (
    <div className='text-block'>
      {props.children}
      <Style>{css`
        .text-block {
          max-width: 900px;
          padding: 0 30px;
          margin: 0 auto 40px;
        }
      `}</Style>
    </div>
  )
}

export default TextBlock