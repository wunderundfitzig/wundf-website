import React, { FunctionComponent } from 'react'

import WundFLogo from 'components/wundf-logo'
import Contact from 'components/contact'
import Clients from 'components/clients'
import Navigation from 'components/navigation'
import breakpoints from 'lib/breakpoints'

const Hero: FunctionComponent = () => {
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
      <Navigation />
      <Clients />

      <style jsx>{`
        .hero {
          max-width: 1030px;
          margin: 0 auto;
          padding: 1.5em;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 60px;
          grid-template-areas:
            'slogan logo'
            'contact contact';
          justify-items: left;
          justify-content: space-between;
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .hero {
            grid-template-columns: 400px 80px;
          }
        }
        .slogan {
          grid-area: slogan;
          font-size: 40px;
          overflow-wrap: break-word;
          width: 100%;
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .slogan {
            font-size: 55px;
          }
        }
      `}</style>
    </>
  )
}

export default Hero
