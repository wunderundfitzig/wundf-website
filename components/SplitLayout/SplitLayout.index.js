import React from 'react'
import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'

export { default as LeftContainer } from './LeftContainer'
export { default as RightContainer } from './RightContainer'

const Wrapper = styled.div`
  @media (min-width: ${breakpoints.xl.min}px) {
    display: flex;
    margin-top: 30px;
    width: 100%;
  }
`

const SplitLayout = ({ children }) => {
  const left = children[0]
  const right = children[1]

  return <Wrapper>
    {left}{right}
  </Wrapper>
}

export default SplitLayout
