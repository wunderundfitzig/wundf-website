import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'
import { Title, BackgroundImage, Link } from '../../lib/blocks.js'

const fadeIn = keyframes`
  0% { opacity: 0; }
  30% {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const Feed = styled.div`
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
  padding: 0 15px;
  animation: ${fadeIn} 2s;

  @media (min-width: ${breakpoints.sm.min}px) {
    padding: 0 20px;
  }
`

export const LinkLabel = styled(Link)`
  margin: 0;
`
  .withComponent('p')

export const LinkWrapper = styled.a`
  text-decoration: none;

  &:hover ${LinkLabel} {
    border-bottom: 1px solid inherit;
  }
`

export const Image = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  height: 150px;
  margin-bottom: 30px;

  @media (min-width: ${breakpoints.sm.min}px) {
    margin-bottom: 40px;
  }
  @media (min-width: ${breakpoints.m.min}px) {
    height: 200px;
  }
`

export const NewsTitle = styled(Title)`
  position: absolute;
  bottom: -30px;
  left: 10px;
  width: 11em;
  margin: 0;
  color: ${colors.black};
  text-align: right;
  font-weight: normal;
  background-color: ${colors.beige};
  padding: 0.6em 1em 0.2em;
  font-size: 20px;

  @media (min-width: ${breakpoints.sm.min}px) {
    font-size: 24px;
    bottom: -40px;
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
  margin-bottom: 120px;
  color: ${colors.darkGrey};

  @media (min-width: ${breakpoints.sm.min}px) {
    padding-left: 130px;
  }
  @media (min-width: ${breakpoints.m.min}px) {
    padding-left: 150px;
    padding-right: 20px;
  }

  p {
    margin: 1em 0;
  }
`
