import { FunctionComponent } from 'react'
import Image from 'next/image'

import { publicConfig } from 'lib/config/public-config'
import colors from 'lib/colors'
import Style, { css } from 'components/style'

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
            return (
              <Heading className='kirby-block' key={block.id}>
                {block.content.text}
              </Heading>
            )
          }
          case 'text':
            return (
              <div
                className='kirby-block'
                key={block.id}
                dangerouslySetInnerHTML={{ __html: block.content.text }}
              />
            )
          case 'image':
            return (
              <figure className='kirby-block' key={block.id}>
                <Image
                  className='image'
                  src={`${publicConfig.backendURL}/${block.content.image.src}`}
                  alt={block.content.alt ?? ''}
                  width={block.content.image.width}
                  height={block.content.image.height}
                  sizes='(max-width: 800px) 100vw, 760px'
                />
                <figcaption
                  dangerouslySetInnerHTML={{ __html: block.content.caption }}
                />
              </figure>
            )
        }
      })}
      <Style>{css`
        figure.kirby-block {
          margin: 2em -2em;
        }

        figure.kirby-block .image {
          width: 100%;
          height: auto;
          background-color: ${colors.brownGrey};
        }

        .kirby-block.figcaption {
          text-align: center;
          padding: 1em;
          font-style: italic;
        }
      `}</Style>
    </>
  )
}
export default KirbyBlocks
