import React, { FunctionComponent } from 'react'
import breakpoints from 'lib/breakpoints'
import colors from 'lib/colors'

import ClientLogo from 'components/client-logo'
import rbbSVG from 'components/client-logos/rbb.svg'
import heinrichboellSVG from 'components/client-logos/heinrichboell.svg'
import eiqSVG from 'components/client-logos/eiq.svg'
import johanniterSVG from 'components/client-logos/johanniter.svg'
import emsSVG from 'components/client-logos/ems.svg'
import dcbPNG from 'components/client-logos/dcb.png'

const clients = [
  {
    name: 'Rundfunk Berlin Brandenburg',
    image: rbbSVG,
    relativeSize: 1,
    url: 'https://www.rbb24.de/',
  },
  {
    name: 'Heinrich B\u00f6ll Stiftung Brandenburg',
    image: heinrichboellSVG,
    relativeSize: 1,
    url: 'https://www.boell-brandenburg.de/de',
  },
  {
    name: 'Johanniter-Unfall-Hilfe',
    image: johanniterSVG,
    relativeSize: 1.1,
    url: 'https://www.johanniter.de/johanniter-unfall-hilfe/',
  },
  {
    name: 'Europ\u00e4isches Institut f\u00fcr Qualit\u00e4tsjournalismus',
    image: eiqSVG,
    relativeSize: 1.9,
    url: 'http://eiq-le.de/',
  },
  {
    name: 'EMS Press',
    image: emsSVG,
    relativeSize: 1.7,
    url: 'https://ems.press/',
  },
  {
    name: 'Dev Crew Berlin',
    image: dcbPNG,
    relativeSize: 1.8,
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
          <a
            key={i}
            href={client.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <ClientLogo
              src={client.image}
              relativeSize={client.relativeSize}
              alt={client.name}
            />
          </a>
        ))}
      </div>
      <style jsx>{`
        .clients {
          grid-area: ${props.gridArea};
          background-color: ${colors.orange};
          padding: 2.5em 0 2em;
        }

        .client-logos {
          width: 100%;
          max-width: 1030px;
          padding: 0 1.5em 1em;
          margin: 0 auto;
          display: grid;
          align-items: baseline;
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
