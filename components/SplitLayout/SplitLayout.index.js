import React from 'react'
import styled from '@emotion/styled'
import { lightGrey } from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

const Wrapper = styled.div`
  @media (min-width: ${breakpoints.xl.min}px) {
    display: flex;
    margin-top: 30px;
    width: 100%;
  }
`

const LeftContainer = styled.aside`
  background-color: ${lightGrey};
  padding: 25px 20px 15px 30px;
  margin-bottom: 0;

  @media (min-width: ${breakpoints.xl.min}px) {
    min-width: calc(50% - 150px);
    min-height: 100vh;
    margin-right: 20px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    margin-right: 30px;
  }
`

const RightContainer = styled.article`
  flex: 0 1 100%;
`

const LeftInner = styled.div`
  max-width: 840px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.xl.min}px) {
    margin: 0;
    padding-left: calc(100% - 250px)
  }
`

export const RightInner = styled.div`
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

const SplitLayout = ({ children }) => {
  const left = children[0]
  const right = children[1]

  return <Wrapper>
    <LeftContainer>
      <LeftInner>{left}</LeftInner>
    </LeftContainer>
    <RightContainer>
      <RightInner>{right}</RightInner>
    </RightContainer>
  </Wrapper>
}

export default SplitLayout
