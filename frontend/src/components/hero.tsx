import React, { FunctionComponent } from 'react'

import breakpoints from 'lib/breakpoints'
import WundFLogo from 'components/wundf-logo'
import Contact from 'components/contact'
import Navigation from 'components/navigation'
import Style, { css } from 'components/style'

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

      <Style>{css`
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

        .hero .slogan {
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

          .hero .wundf-logo {
            position: sticky;
            top: 1.5em;
          }

          .hero .slogan {
            font-size: 55px;
          }
        }
      `}</Style>
    </>
  )
}

export default Hero
