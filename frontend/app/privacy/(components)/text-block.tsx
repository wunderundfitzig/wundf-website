'use client'

import React, { FunctionComponent, ReactElement } from 'react'

type Props = { children: ReactElement }
const TextBlock: FunctionComponent<Props> = (props) => {
  return (
    <div className='text-block'>
      {props.children}
      <style jsx>{`
        .text-block {
          max-width: 900px;
          padding: 0 30px;
          margin: 0 auto 40px;
        }
      `}</style>
    </div>
  )
}

export default TextBlock
