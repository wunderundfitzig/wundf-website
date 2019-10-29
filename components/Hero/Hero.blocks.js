import styled from '@emotion/styled'
import colors from '../../lib/colors'
import { fadeIn } from '../../lib/animations'
import breakpoints from '../../lib/breakpoints'

export { Link } from '../../lib/blocks.js'

export const Wrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 20px;
  margin-bottom: 0;
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
  color: ${colors.darkGrey};

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
