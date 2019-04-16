import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

const fadeIn = keyframes`
  0% { opacity: 0; }
  30% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 50px;
  margin-bottom: 60px;
  background-color: ${colors.lightGrey};
  animation: ${fadeIn} 1s;

  @media (min-width: ${breakpoints.l.min}px) {
    padding-top: 30px;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    padding-top: 50px;
  }
`

export const Slogan = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
  color: ${colors.black};

  @media (min-width: ${breakpoints.m.min}px) {
    font-size: 35px;
  }
  @media (min-width: ${breakpoints.l.min}px) {
    font-size: 47px;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    font-size: 49px;
  }
`

export const Buzzword = styled.strong`
  font-weight: bold;
  display: block;
  height: 25px;
  color: ${colors.black};
  opacity: ${props => props.visible ? 1 : 0};

  @media (min-width: ${breakpoints.m.min}px) {
    height: 40px;
  }
  @media (min-width: ${breakpoints.l.min}px) {
    height: 62px;
  }
`

export const Contact = styled.div`
  margin: 20px 0 0;
  text-align: center;
  font-size: 14px;
  line-height: 1.7em;
  color: ${colors.textGrey};

  @media (min-width: ${breakpoints.m.min}px) {
    font-size: 16px;
  }
  @media (min-width: ${breakpoints.l.min}px) {
    font-size: 17px;
  }
`

export const PhoneAndMail = styled.p`
  font-family: 'ETBemboLineFigures', serif;
  white-space: nowrap;
  margin: 0;
`
