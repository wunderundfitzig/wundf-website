import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import breakpoints from '../../lib/breakpoints'

const Wrapper = styled.article`
  @media (min-width: ${breakpoints.l.min}px) {
    padding-left: calc(100% - 250px)
  }
`

const Title = styled.h1`
  font-style: italic;
  font-weight: normal;
  font-size: 15px;
  margin: 0 0 20px;

  @media (min-width: ${breakpoints.l.min}px) {
    font-size: 17px;
    margin-bottom: 30px;
  }
`

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;

  @media (min-width: ${breakpoints.l.min}px) {
    display: block;
  }
`

const Logo = styled.img`
  height: ${props => 20 * props.relativeSize}px;
  margin: 0 15px 20px 0;

  @media (min-width: ${breakpoints.l.min}px) {
    display: block;
    height: ${props => 25 * props.relativeSize}px;
    margin: 0 0 40px 0;
  }
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
