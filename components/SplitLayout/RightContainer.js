import React from 'react'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'

const Container = styled.article`
  flex: 0 1 100%;
`

export const Inner = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.m.min}px) {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding: 0 30px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    max-width: 800px;
    margin: 0;
    padding-left: 0;
  }
`

const RightContainer = ({ children, className, style }) => {
  return <Container className={className} style={style}>
    <Inner>{children}</Inner>
  </Container>
}

export default RightContainer
