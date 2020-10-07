import React from 'react'
import { Wrapper, Title, Logos, Logo, Spacer } from './Clients.blocks'
import rbbSVG from './rbb.svg'
import heinrichboellSVG from './heinrichboell.svg'
import eiqSVG from './eiq.svg'
import johaniterSVG from './johaniter.svg'
import emsSVG from './ems.svg'
import dcbPNG from './dcb.png'

const clients = [
  {
    name: 'Rundfunk Berlin Brandenburg',
    image: rbbSVG,
    relativeSize: '1'
  },
  {
    name: 'Heinrich B\u00f6ll Stiftung Brandenburg',
    image: heinrichboellSVG,
    relativeSize: '1'
  },
  {
    name: 'Europ\u00e4isches Institut f\u00fcr Qualit\u00e4tsjournalismus',
    image: eiqSVG,
    relativeSize: '1.9'
  },
  {
    name: 'EMS Press',
    image: emsSVG,
    relativeSize: '1.6'
  },
  {
    name: 'Johaniter Unfallhilfe',
    image: johaniterSVG,
    relativeSize: '1.1'
  },
  {
    name: 'Dev Crew Berlin',
    image: dcbPNG,
    relativeSize: '1.8'
  }
]

const Clients = () => {
  return (
    <Wrapper>
      <Title>Kunden:</Title>
      <Logos>
        {clients.map((client, i) => (
          <Logo
            key={i}
            src={client.image}
            relativeSize={client.relativeSize}
            alt={client.name}
          />
        ))}
        <Spacer />
      </Logos>
    </Wrapper>
  )
}

export default Clients
