import React, { Fragment, FunctionComponent } from 'react'
import Image from 'next/image'
import { useSectionIndexObserver } from 'lib/useSectionIndexObserver'
import breakpoints from 'lib/breakpoints'
import colors from 'lib/colors'
import { Creative } from 'lib/models/creative'
import Markdown from 'components/markdown'

interface Props {
  creatives: Array<Creative>
}

const Creatives: FunctionComponent<Props> = (props) => {
  const { creatives } = props
  const { sectionRefs, currentSectionIndex } = useSectionIndexObserver()

  return (
    <section className='creatives'>
      {creatives.map((person, idx) => (
        <Fragment key={idx}>
          <div className={`image ${currentSectionIndex === idx && 'active'}`}>
            <Image
              src={person.image}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
          <div
            className='content'
            ref={(ref) => {
              sectionRefs.current[idx] = ref
            }}
          >
            <h2>{person.title}</h2>
            <Markdown>{person.text}</Markdown>
          </div>
        </Fragment>
      ))}
      <style jsx>{`
        .creatives {
          display: grid;
          grid-template-rows: 40vh 1fr;
          grid-template-areas: 'images' '.';
          justify-items: start;
          margin: 0 auto;
          overflow: visible;
          background-color: ${colors.orange};
          color: ${colors.darkBlue};
          z-index: -1;
        }

        .image {
          grid-area: images;
          margin: 0;
          position: sticky;
          top: 0;
          height: 100%;
          width: 100%;
          margin: 0;
          transition: opacity 1s;
          opacity: 0;
          z-index: 1;
          box-shadow: 0 1.4em 5px 0 ${colors.orange};
        }

        .image.active {
          opacity: 1;
        }

        .content {
          position: relative;
          padding: 20px 25px;
        }

        @media (min-width: ${breakpoints.m.min}px) {
          .creatives {
            grid-template-columns: calc(50%) 1fr;
            grid-template-rows: auto;
            grid-template-areas: 'images' '.';
          }
          .image {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            margin: 0;
            transition: opacity 1s;
            opacity: 0;
          }

          .content {
            grid-column: 2 / 3;
            margin: 2em 0;
            padding: 30px 40px 20px 1.8em;
            max-width: 465px;
            min-height: calc(100vh - 270px);
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .creatives {
            grid-template-columns: calc(50% + 50px) 1fr;
          }
          .image {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            margin: 0;
            transition: opacity 1s;
            opacity: 0;
          }

          .content {
            grid-column: 2 / 3;
            margin: 2em 0;
            padding: 30px 40px 20px 2em;
            max-width: 465px;
            min-height: calc(100vh - 270px);
          }
        }
      `}</style>
    </section>
  )
}

export default Creatives
