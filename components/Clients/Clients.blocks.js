import styled from '@emotion/styled'
import breakpoints from '../../lib/breakpoints'
import colors from '../../lib/colors'
import { fadeIn } from '../../lib/animations'

export const Wrapper = styled.arcticle`
  background-color: ${colors.lightGrey};
  display: block;
  overflow: hidden;
  animation: ${fadeIn} 1s;
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.l.min}px) {
    margin-bottom: 60px;
  }
`

export const Title = styled.h1`
  display: block;
  font-style: italic;
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  margin: 15px 0 15px;
  padding: 0 20px;
  color: ${colors.darkGrey};
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;

  @media (min-width: ${breakpoints.l.min}px) {
    font-size: 18px;
    margin: 15px auto;
  }
`

export const Logos = styled.div`
  max-width: 1000px;
  padding: 0 20px 0 20px;
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  animation: ${fadeIn} 1s;
`

export const LogoLink = styled.a`
  margin: 0 5px 20px;

  @media (min-width: ${breakpoints.sm.min}px) {
    margin: 0 15px 30px;
  }

  @media (min-width: ${breakpoints.m.min}px) {
    margin: 0 15px 30px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    display: block;
    margin: 0 15px 40px;
  }
`

export const Logo = styled.img`
  height: ${props => 15 * props.relativeSize}px;

  @media (min-width: ${breakpoints.sm.min}px) {
    height: ${props => 17 * props.relativeSize}px;
  }

  @media (min-width: ${breakpoints.m.min}px) {
    height: ${props => 20 * props.relativeSize}px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    height: ${props => 25 * props.relativeSize}px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    height: ${props => 25 * props.relativeSize}px;
  }
`

export const Spacer = styled.div`
  flex: 0 0 40%;
`
