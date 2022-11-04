import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

import { publicConfig } from 'lib/config/public-config'

import { Creative } from './page'
import SectionObserver from './section-observer'

interface Props {
  creatives: Creative[]
}

const Creatives: FunctionComponent<Props> = (props) => {
  const { creatives } = props

  return (
    <SectionObserver>
      {creatives.map((person) => ({
        image: (
          <Image
            fill
            alt=''
            className='image'
            src={`${publicConfig.backendURL}/${person.image.src}`}
          />
        ),
        content: (
          <>
            <h2>{person.title}</h2>
            <ReactMarkdown>{person.text}</ReactMarkdown>{' '}
          </>
        ),
      }))}
    </SectionObserver>
  )
}

export default Creatives
