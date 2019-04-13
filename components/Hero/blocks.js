import styled from '@emotion/styled'

import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const Slogan = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 400;
  margin-top: 25px;
  margin-bottom: 0;
  color: ${colors.black};

  @media (min-width: ${breakpoints.m.min}px) {
    font-size: 35px;
  }
  @media (min-width: ${breakpoints.l.min}px) {
    font-size: 47px;
    margin-top: 40px;
    white-space: nowrap;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    font-size: 49px;
    margin-top: 40px;
  }

  strong {
    font-weight: bold;
    display: block;
    height: 25px;
    color: ${colors.textGrey};

    @media (min-width: ${breakpoints.m.min}px) {
      height: 40px;
    }
    @media (min-width: ${breakpoints.l.min}px) {
      height: 62px;
    }
  }
`

export const Contact = styled.div`
  margin: 20px 0 50px;
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
