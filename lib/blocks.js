import styled from '@emotion/styled'
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

export const Link = styled.a`
  color: ${blue};
  text-decoration: none;

  &::before {
    content: '+ '
  }

  &:hover {
    border-bottom: 1px solid inherit;
  }
`
