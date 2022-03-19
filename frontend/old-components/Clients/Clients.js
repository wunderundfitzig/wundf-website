import React from 'react'
import { Wrapper, Title, Logos, Logo, LogoLink, Spacer } from './Clients.blocks'
import rbbSVG from './rbb.svg'
import heinrichboellSVG from './heinrichboell.svg'
import eiqSVG from './eiq.svg'
import johanniterSVG from './johanniter.svg'
import emsSVG from './ems.svg'
import dcbPNG from './dcb.png'

const clients = [
  {
    name: 'Rundfunk Berlin Brandenburg',
    image: rbbSVG,
    relativeSize: '1',
    url: 'https://www.rbb24.de/',
  },
  {
    name: 'Heinrich B\u00f6ll Stiftung Brandenburg',
    image: heinrichboellSVG,
    relativeSize: '1',
    url: 'https://www.boell-brandenburg.de/de',
  },
  {
    name: 'Johanniter-Unfall-Hilfe',
    image: johanniterSVG,
    relativeSize: '1.1',
    url: 'https://www.johanniter.de/johanniter-unfall-hilfe/',
  },
  {
    name: 'Europ\u00e4isches Institut f\u00fcr Qualit\u00e4tsjournalismus',
    image: eiqSVG,
    relativeSize: '1.9',
    url: 'http://eiq-le.de/',
  },
  {
    name: 'EMS Press',
    image: emsSVG,
    relativeSize: '1.7',
    url: 'https://ems.press/',
  },
  {
    name: 'Dev Crew Berlin',
    image: dcbPNG,
    relativeSize: '1.8',
    url: 'https://dcb.ug/',
  },
]

const Clients = () => {
  return (
    <Wrapper>
      <Title>Kunden:</Title>
      <Logos>
        {clients.map((client, i) => (
          <LogoLink key={i} href={client.url} target='_blank' rel='noopener'>
            <Logo
              src={client.image}
              relativeSize={client.relativeSize}
              alt={client.name}
            />
          </LogoLink>
        ))}
        <Spacer />
      </Logos>
    </Wrapper>
  )
}

export default Clients
