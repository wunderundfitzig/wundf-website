'use client'

import { FunctionComponent } from 'react'
import Image from 'next/image'
import { publicConfig } from 'app/_lib/config/public-config'
import colors from 'app/_lib/colors'
import { Block } from './_fetch-story'

type Props = {
  blocks: Block[]
}
const KirbyBlocks: FunctionComponent<Props> = (props) => {
  return (
    <>
      {props.blocks.map((block) => {
        switch (block.type) {
          case 'heading': {
            const Heading = block.content.level
            return <Heading key={block.id}>{block.content.text}</Heading>
          }
          case 'text':
            return (
              <div
                key={block.id}
                dangerouslySetInnerHTML={{ __html: block.content.text }}
              />
            )
          case 'image':
            return (
              <figure key={block.id}>
                <Image
                  className='image'
                  src={`${publicConfig.backendURL}/${block.content.image.src}`}
                  alt={block.content.alt ?? ''}
                  width={block.content.image.width}
                  height={block.content.image.height}
                />
                <figcaption
                  dangerouslySetInnerHTML={{ __html: block.content.caption }}
                />
              </figure>
            )
        }
      })}
      <style jsx>{`
        figure {
          margin: 2em -2em;
        }

        figure :global(.image) {
          width: 100%;
          height: auto;
          background-color: ${colors.brownGrey};
        }

        figcaption {
          text-align: center;
          padding: 1em;
          font-style: italic;
        }
      `}</style>
    </>
  )
}
export default KirbyBlocks
