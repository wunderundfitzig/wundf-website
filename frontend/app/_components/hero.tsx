'use client'

import React, { FunctionComponent } from 'react'

import WundFLogo from 'app/_components/wundf-logo'
import Contact from 'app/_components/contact'
import Navigation from 'app/_components/navigation'
import breakpoints from 'app/_lib/breakpoints'

type Props = {
  activeRouteName: 'work' | 'skills'
}
const Hero: FunctionComponent<Props> = (props) => {
  return (
    <>
      <section className='hero'>
        <h2 className='slogan' lang='de-DE'>
          Wir <br />
          gestalten <br />
          Nutzer
          <wbr />
          erlebnisse.
        </h2>
        <WundFLogo gridArea='logo' />
        <Contact gridArea='contact' />
      </section>
      <Navigation activeRouteName={props.activeRouteName} />

      <style jsx>{`
        .hero {
          max-width: 1030px;
          margin: 0 auto;
          padding: 1.5em 1.5em 2em;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 60px;
          grid-template-areas:
            'slogan logo'
            'contact contact';
          justify-items: left;
          justify-content: space-between;
        }

        .slogan {
          grid-area: slogan;
          font-size: 40px;
          margin: 1em 0 0.5em;
          overflow-wrap: break-word;
          width: 100%;
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .hero {
            padding: 1.5em 1.5em 1em;
            grid-template-columns: 400px 80px;
          }

          .hero :global(.wundf-logo) {
            position: sticky;
            top: 1.5em;
          }

          .slogan {
            font-size: 55px;
          }
        }
      `}</style>
    </>
  )
}

export default Hero
