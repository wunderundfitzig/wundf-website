import styled from '@emotion/styled'
import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const Feed = styled.div`
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
  padding: 0 8px;

  @media (min-width: ${breakpoints.sm.min}px) {
    padding: 0 12px;
  }
  @media (min-width: ${breakpoints.m.min}px) {
    padding: 0 20px;
  }
`

export const LinkLabel = styled.p`
  margin: 0;
  color: ${colors.blue};

  &::before {
    content: '+ '
  }
`

export const LinkWrapper = styled.a`
  &:hover ${LinkLabel} {
    text-decoration: underline;
  }
`

export const Image = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;

  @media (min-width: ${breakpoints.sm.min}px) {
    height: 200px;
  }
`

export const Title = styled.h1`
  position: relative;
  margin: -30px 0 0 10px;
  width: 200px;
  color: ${colors.black};
  text-align: right;
  font-weight: normal;
  background-color: ${colors.backgroundGrey};
  padding: 10px 10px 0;
  font-size: 20px;
  z-index: 10;

  @media (min-width: ${breakpoints.sm.min}px) {
    font-size: 24px;
    padding: 10px 15px 0;
    margin-left: 20px;
    margin-top: -35px;
    width: 240px;
  }

  @media (min-width: ${breakpoints.m.min}px) {
    font-size: 27px;
    padding: 10px 20px 0;
    margin-top: -46px;
    width: 250px;
  }
`

export const Content = styled.div`
  padding-left: 90px;
  padding-right: 10px;
  margin-bottom: 40px;
  color: ${colors.textGrey};

  @media (min-width: ${breakpoints.sm.min}px) {
    padding-left: 130px;
  }
  @media (min-width: ${breakpoints.sm.min}px) {
    padding-left: 150px;
    padding-right: 20px;
  }
`
