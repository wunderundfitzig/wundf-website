import styled from '@emotion/styled'
import { css } from '@emotion/core'
import breakpoints from './breakpoints'
import { darkGrey, blue } from './colors'

export const whiteText = css`
  color: white;
  text-shadow: 0 0 2px black;
  line-height: 1.2em;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

export const linkStyles = css`
  color: ${blue};
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid;
  }
`

export const longText = css`
  font-size: 20px;
  @media (min-width: ${breakpoints.sm.min}px) {
    font-size: 22px;
  }

  a {
    ${linkStyles}
  }
`

export const Link = styled.a`
  ${linkStyles};
  display: inline;

  &::before {
    content: '+ '
  }
`

export const Title = styled.h1`
  font-weight: normal;
  font-size: 22px;
  margin: 0 0 1em;

  @media (min-width: ${breakpoints.sm.min}px) {
    font-size: 26px;
  }
`

export const BackgroundImage = styled.figure`
  display: block;
  margin: 0;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-color: ${darkGrey};
`
