import React from 'react'
import { Wrapper, Title, Logos, Logo, Spacer } from './Clients.blocks'
import rbbSVG from './rbb.svg'
import heinrichboellSVG from './heinrichboell.svg'
import eiqSVG from './eiq.svg'
import vereinWirtschaftPNG from './vereinWirtschaft.png'
import udkSVG from './udk.svg'
import dcbPNG from './dcb.png'

const clients = [
  {
    'name': 'Rundfunk Berlin Brandenburg',
    'image': rbbSVG,
    'relativeSize': '1'
  },
  {
    'name': 'Heinrich B\u00f6ll Stiftung Brandenburg',
    'image': heinrichboellSVG,
    'relativeSize': '1'
  },
  {
    'name': 'Europ\u00e4isches Institut f\u00fcr Qualit\u00e4tsjournalismus',
    'image': eiqSVG,
    'relativeSize': '1.9'
  },
  {
    'name': 'Verein zur F\u00f6rderung der Wirtschaftskommunikation e.V.',
    'image': vereinWirtschaftPNG,
    'relativeSize': '1.5'
  },
  {
    'name': 'Universit\u00e4t der K\u00fcnste Berlin',
    'image': udkSVG,
    'relativeSize': '1'
  },
  {
    'name': 'Dev Crew Berlin',
    'image': dcbPNG,
    'relativeSize': '1.8'
  }
]

const Clients = () => {
  return <Wrapper>
    <Title>Kunden:</Title>
    <Logos>
      {clients.map((client, i) =>
        <Logo
          key={i}
          src={client.image}
          relativeSize={client.relativeSize}
          alt={client.name} />
      )}
      <Spacer />
    </Logos>
  </Wrapper>
}

export default Clients
