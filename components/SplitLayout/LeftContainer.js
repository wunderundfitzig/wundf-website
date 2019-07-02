import React from 'react'
import styled from '@emotion/styled'
import { lightGrey } from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

const Container = styled.aside`
  background-color: ${lightGrey};
  padding: 25px 20px 15px 30px;
  margin-bottom: 0;

  @media (min-width: ${breakpoints.xl.min}px) {
    flex: 1 1 0;
    min-width: calc(50% - 150px);
    min-height: 100vh;
    margin-right: 20px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    margin-right: 30px;
  }
`

const Inner = styled.div`
  max-width: 840px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.xl.min}px) {
    margin: 0;
    padding-left: calc(100% - 250px);
    max-width: none;
  }
`

const LeftContainer = ({ children, className, style }) => {
  return <Container className={className} style={style}>
    <Inner>{children}</Inner>
  </Container>
}

export default LeftContainer
