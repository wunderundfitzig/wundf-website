'use client'

import React, { FunctionComponent } from 'react'
import colors from 'lib/colors'

import ClientLogo from './client-logo'
import rbbSVG from './client-logos/rbb.svg'
import heinrichboellSVG from './client-logos/heinrichboell.svg'
import asertoSVG from './client-logos/aserto.svg'
import johanniterSVG from './client-logos/johanniter.svg'
import emsSVG from './client-logos/ems.svg'
import dcbPNG from './client-logos/dcb.png'

const clients = [
  {
    name: 'Rundfunk Berlin Brandenburg',
    image: rbbSVG,
    relativeSize: 1.7,
    url: 'https://www.rbb24.de/',
  },
  {
    name: 'aserto',
    image: asertoSVG,
    relativeSize: 2.5,
    url: 'https://aserto.de/',
  },
  {
    name: 'Johanniter-Unfall-Hilfe',
    image: johanniterSVG,
    relativeSize: 3.6,
    url: 'https://www.johanniter.de/johanniter-unfall-hilfe/',
  },
  {
    name: 'Heinrich B\u00f6ll Stiftung Brandenburg',
    image: heinrichboellSVG,
    relativeSize: 4.6,
    url: 'https://www.boell-brandenburg.de/de',
  },
  {
    name: 'EMS Press',
    image: emsSVG,
    relativeSize: 1,
    url: 'https://ems.press/',
  },
  {
    name: 'Dev Crew Berlin',
    image: dcbPNG,
    relativeSize: 2.1,
    url: 'https://dcb.ug/',
  },
]

interface Props {
  gridArea?: string
}
const Clients: FunctionComponent<Props> = (props) => {
  return (
    <div className='clients'>
      <div className='client-logos'>
        {clients.map((client, i) => (
          <ClientLogo
            key={i}
            url={client.url}
            src={client.image}
            relativeSize={client.relativeSize}
            alt={client.name}
            align={i % 3 === 0 ? 'left' : i % 3 === 2 ? 'right' : 'center'}
          />
        ))}
      </div>
      <style jsx>{`
        .clients {
          grid-area: ${props.gridArea};
          background-color: ${colors.orange};
          padding: 3.2em 0 2.5em;
        }

        .client-logos {
          width: 100%;
          max-width: 1030px;
          padding: 0 1.5em 1em;
          margin: 0 auto;
          display: grid;
          align-items: center;
          grid-template-columns: repeat(3, min-content);
          grid-template-rows: min-content min-content;
          justify-content: space-between;
          grid-gap: 1em;
        }

        a {
          width: 100%;
          text-align: left;
        }

        a:nth-child(3n - 1) {
          text-align: center;
        }
        a:nth-child(3n) {
          text-align: right;
        }

        @media (min-width: 650px) {
          .client-logos {
            grid-template-columns: repeat(6, min-content);
            grid-template-rows: min-content;
          }
        }
      `}</style>
    </div>
  )
}

export default Clients
