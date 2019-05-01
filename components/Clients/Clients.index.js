import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { lightGrey } from '../../lib/colors'

const Wrapper = styled.section`
  background-color: ${lightGrey};
  padding: 25px 20px 15px;
  margin-bottom: 20px;
`

const Title = styled.h1`
  font-style: italic;
  font-weight: normal;
  font-size: 15px;
  margin: 0 0 20px;
`

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
`

const Logo = styled.img`
  height: ${props => 20 * props.relativeSize}px;
  margin: 0 15px 20px 0;
`

const Spacer = styled.div`
  flex: 0 0 40%;
`

const Clients = ({ clients }) => {
  return <Wrapper>
    <Title>Kunden</Title>
    <Logos>
      {clients.map((client, i) =>
        <Logo
          key={i}
          src={getAbsolutAssetURL(client.logo.path)}
          relativeSize={client.relativeSize}
          alt={client.name} />
      )}
      <Spacer />
    </Logos>
  </Wrapper>
}

export default Clients
