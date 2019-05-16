import styled from '@emotion/styled'
import { css } from '@emotion/core'
import breakpoints from './breakpoints'
import { lightGrey, blue } from './colors'

export const Title = styled.h1`
  font-weight: normal;
  font-size: 22px;
  margin: 0 0 1em;

  @media (min-width: ${breakpoints.sm.min}px) {
    font-size: 24px;
  }
`

export const BackgroundImage = styled.figure`
  display: block;
  margin: 0;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-color: ${lightGrey};
`

export const linkStyles = css`
  color: ${blue};
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid;
  }
`

export const Link = styled.a`
  ${linkStyles};

  &::before {
    content: '+ '
  }
`
