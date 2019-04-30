import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { lightGrey } from '../../lib/colors'

const Wrapper = styled.section`
  background-color: ${lightGrey}
`

const Logo = styled.img`

`

const Clients = ({ clients }) => {
  console.log(clients)
  return <Wrapper>
    {clients.map((client, i) =>
      <Logo key={i} src={getAbsolutAssetURL(client.logo.path)} alt={client.name} />
    )}
  </Wrapper>
}

export default Clients
