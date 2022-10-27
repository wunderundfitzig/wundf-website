import { Fragment, FunctionComponent } from 'react'
import Image from 'next/image'
import { publicConfig } from 'lib/config/public-config'
import colors from 'lib/colors'

type HeadingBlock = {
  type: 'heading'
  id: string
  content: {
    level: 'h1' | 'h2' | 'h3'
    text: string
  }
}
type TextBlock = {
  type: 'text'
  id: string
  content: { text: string }
}
type ImageBlock = {
  type: 'image'
  id: string
  content: { image: string; alt: string | null; ratio: number; caption: string }
}

type Block = HeadingBlock | TextBlock | ImageBlock

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
                  src={`${publicConfig.backendURL}/${block.content.image}`}
                  alt={block.content.alt ?? ''}
                  width={2000}
                  height={2000 / block.content.ratio}
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

        figure :global(img) {
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
