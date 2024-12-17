import React, { FunctionComponent } from 'react'
import eszett from 'eszett'

import breakpoints from 'lib/breakpoints'
import WundFLogo from 'components/wundf-logo'
import Contact from 'components/contact'
import Navigation from 'components/navigation'
import { css } from 'components/style'

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
          Nutzer&shy;erlebnisse.
        </h2>
        <WundFLogo gridArea='logo' />
        <Contact gridArea='contact' />
      </section>
      <Navigation activeRouteName={props.activeRouteName} />

      <style href={eszett} precedence='eszett'>{css`
        .${eszett} {
          &.hero {
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

          &.slogan {
            grid-area: slogan;
            font-size: 40px;
            margin: 1em 0 0.5em;
            hyphens: manual;
            width: 100%;
          }

          @media (min-width: ${breakpoints.l.min}px) {
            &.hero {
              padding: 1.5em 1.5em 1em;
              grid-template-columns: 400px 80px;
            }

            & .wundf-logo {
              position: sticky;
              top: 1.5em;
            }

            &.slogan {
              font-size: 55px;
            }
          }
        }
      `}</style>
    </>
  )
}

export default Hero
