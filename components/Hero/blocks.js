import styled from '@emotion/styled'
import { css } from '@emotion/core'

import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

const sloagans = css`
  width: calc(100% + 50px);
  margin-left: -25px;
  text-align: center;
  font-size: 23px;
  font-weight: 400;
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
export const Slogan = styled.h1`
  composes: ${sloagans};
  margin-top:  25px;
  margin-bottom: 0;
  white-space: nowrap;

  @media (min-width: ${breakpoints.l.min}px) {
    margin-top: 40px;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top: 70px;
    height: 68px;
  }

  strong {
    font-weight: 600
  }
`

export const SubSlogan = styled.h2`
  composes: ${sloagans};
  margin-top: 0;
  margin-bottom: 0;
`

export const Contact = styled.div`
  margin: 20px 0 20px;
  text-align: center;
  font-size: 12px;
  line-height: 1.7em;
  color: ${colors.textGrey};

  @media (min-width: ${breakpoints.m.min}px) {
    font-size: 14px;
  }
  @media (min-width: ${breakpoints.l.min}px) {
    font-size: 17px;
    margin-top: 40px;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top : 50px;
    margin-bottom: 50px;
  }
`

export const PhoneAndMail = styled.p`
  white-space: nowrap;
  margin: 0;
`
