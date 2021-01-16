import React, { FunctionComponent } from 'react'
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
        <>
          <div
            className='content'
            key={idx}
            ref={(ref) => {
              sectionRefs.current[idx] = ref
            }}
          >
            <h2>{person.title}</h2>
            <Markdown>{person.text}</Markdown>
          </div>
          <div className={`image ${currentSectionIndex === idx && 'active'}`}>
            <Image
              src={person.image}
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </>
      ))}
      <style jsx>{`
        .creatives {
          display: grid;
          grid-template-columns: calc(50% + 50px) 1fr;
          grid-template-areas: 'images .';
          justify-items: start;
          margin: 0 auto;
          overflow: visible;
          background-color: ${colors.orange};
          color: ${colors.darkBlue};
        }

        .image {
          grid-area: images;
          width: 100%;
          height: 280px;
          margin: 0;
        }

        .content {
          position: relative;
          padding: 20px 25px;
          margin: -80px 0 40px 40px;
          z-index: 1;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .image {
            height: 400px;
          }

          .content {
            margin-left: 50px;
            padding: 30px 50px 30px 40px;
            margin-top: -100px;
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          .content {
            padding: 45px calc(100% - 500px) 30px 60px;
            margin-bottom: 60px;
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .image {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            margin: 0;
            transition: opacity 1s;
            opacity: 0;
          }

          .image.active {
            opacity: 1;
          }

          .content {
            grid-column: 2 / 3;
            margin: 2em 0;
            padding: 30px 40px 20px 1.5em;
            max-width: 465px;
            min-height: calc(100vh - 270px);
          }
        }
      `}</style>
    </section>
  )
}

export default Creatives
