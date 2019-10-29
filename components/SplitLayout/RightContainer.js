import React from 'react'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'

const Container = styled.article`
  flex: 0 1 100%;
`

const RightContainer = ({ children, className, style }) => {
  return <Container className={className} style={style}>
    {children}
  </Container>
}

export default RightContainer
