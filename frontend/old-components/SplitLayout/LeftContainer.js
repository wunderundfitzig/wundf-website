import React from 'react'
import styled from '@emotion/styled'
import { lightGrey } from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

const Container = styled.aside`
  background-color: ${lightGrey};
  margin-bottom: 0;

  @media (min-width: ${breakpoints.l.min}px) {
    flex: 1 1 0;
    min-width: calc(50% - 50px);
    min-height: 100vh;
  }
`

const Inner = styled.div`
  max-width: 840px;
  margin: 0 auto;
`

const LeftContainer = ({ children, className, style }) => {
  return (
    <Container className={className} style={style}>
      <Inner>{children}</Inner>
    </Container>
  )
}

export default LeftContainer
