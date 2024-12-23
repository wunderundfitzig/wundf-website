'use client'

import { Fragment, FunctionComponent, ReactElement } from 'react'
import eszett from 'eszett'

import { useSectionIndexObserver } from 'lib/useSectionIndexObserver'
import breakpoints from 'lib/breakpoints'
import colors from 'lib/colors'

import Style, { css } from 'components/style'

interface Props {
  children: { image: ReactElement; content: ReactElement }[]
}

const SectionObserver: FunctionComponent<Props> = (props) => {
  const { sectionRefs, currentSectionIndex } = useSectionIndexObserver()

  return (
    <section className='section-observer'>
      {props.children.map((section, idx) => (
        <Fragment key={idx}>
          <div
            className={`image-wrapper ${
              currentSectionIndex === idx && 'active'
            }`}
          >
            {section.image}
          </div>
          <div
            className='content'
            ref={(ref) => {
              sectionRefs.current[idx] = ref
            }}
          >
            {section.content}
          </div>
        </Fragment>
      ))}
      <Style eszett={eszett}>{css`
        &.section-observer {
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

        &.section-observer &.image-wrapper {
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

        &.section-observer &.image-wrapper.active {
          opacity: 1;
        }

        &.section-observer &.image-wrapper .image {
          object-fit: cover;
          object-position: center;
        }

        &.section-observer &.content {
          position: relative;
          padding: 20px 25px;
        }

        @media (min-width: ${breakpoints.m.min}px) {
          &.section-observer {
            grid-template-columns: calc(50%) 1fr;
            grid-template-rows: auto;
            grid-template-areas: 'images' '.';
          }

          &.section-observer &.image-wrapper {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            margin: 0;
            transition: opacity 1s;
            opacity: 0;
          }

          &.section-observer &.content {
            grid-column: 2 / 3;
            margin: 2em 0;
            padding: 30px 40px 20px 1.8em;
            max-width: 465px;
            min-height: calc(100vh - 270px);
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          &.section-observer {
            grid-template-columns: calc(50% + 50px) 1fr;
          }

          &.section-observer &.image-wrapper {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 100%;
            margin: 0;
            transition: opacity 1s;
            opacity: 0;
          }

          &.section-observer &.content {
            grid-column: 2 / 3;
            margin: 2em 0;
            padding: 30px 40px 20px 2em;
            max-width: 465px;
            min-height: calc(100vh - 270px);
          }
        }
      `}</Style>
    </section>
  )
}

export default SectionObserver
