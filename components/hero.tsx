import React, { FunctionComponent } from 'react'

import WundFLogo from 'components/wundf-logo'
import Contact from 'components/contact'
import Clients from 'components/clients'
import Navigation from 'components/navigation'

const Hero: FunctionComponent = () => {
  return (
    <>
      <section className='hero'>
        <h2 className='slogan'>
          Wir <br />
          gestalten <br />
          Nutzererlebnisse
        </h2>
        <WundFLogo gridArea='logo' />
        <Contact gridArea='contact' />
      </section>
      <Clients />
      <Navigation />

      <style jsx>{`
        .hero {
          max-width: 700px;
          margin: 0 auto;
          display: grid;
          grid-template-areas:
            'slogan logo'
            'contact contact'
            'clients clients';
          grid-template-columns: 400px 1fr;
          justify-items: end;
        }

        .slogan {
          grid-area: slogan;
          font-size: 55px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Hero
