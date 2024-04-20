import React, { FunctionComponent } from 'react'
import colors from 'lib/colors'

import ClientLogo from './_client-logo'
import rbbSVG from './_client-logos/rbb.svg'
import heinrichboellSVG from './_client-logos/heinrichboell.svg'
import asertoSVG from './_client-logos/aserto.svg'
import johanniterSVG from './_client-logos/johanniter.svg'
import emsSVG from './_client-logos/ems.svg'
import dcbPNG from './_client-logos/dcb.png'
import Style from 'components/style'

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

const Clients: FunctionComponent = () => {
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
      <Style>{`
        .clients {
          background-color: ${colors.orange};
          padding: 3.2em 0 2em;
        }

        .clients .client-logos {
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

        @media (min-width: 650px) {
          .clients .client-logos {
            grid-template-columns: repeat(6, min-content);
            grid-template-rows: min-content;
          }
        }
      `}</Style>
    </div>
  )
}

export default Clients
