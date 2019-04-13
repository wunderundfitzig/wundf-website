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
  position: relative;
  width: 100%;
  height: 150px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.sm.min}px) {
    height: 200px;
    margin-bottom: 30px;
  }
`

export const Title = styled.h1`
  position: absolute;
  bottom: -20px;
  left: 10px;
  width: 11em;
  margin: 0;
  color: ${colors.black};
  text-align: right;
  font-weight: normal;
  background-color: ${colors.backgroundGrey};
  padding: 0.5em 1em 0;
  font-size: 20px;

  @media (min-width: ${breakpoints.sm.min}px) {
    font-size: 24px;
    bottom: -30px;
    left: 20px;
  }

  @media (min-width: ${breakpoints.m.min}px) {
    font-size: 27px;
  }
`

export const Content = styled.div`
  overflow: hidden;
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
