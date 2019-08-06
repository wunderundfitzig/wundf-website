import styled from '@emotion/styled'
import { css } from '@emotion/core'
import breakpoints from './breakpoints'
import { darkGrey, orange, blue } from './colors'

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
  line-height: 1.3em;

  @media (min-width: ${breakpoints.sm.min}px) {
    font-size: 22px;
  }

  h1, h2, h3 {
    font-weight: bold;
    font-size: 1em;
    color: ${darkGrey};
    margin-top: 2em;
    margin-bottom: 0.5em;
  }

  p {
    margin: 0 0 1.5em;
  }

  a {
    ${linkStyles}
  }

  blockquote {
    border-right: 3px solid ${orange};
    color: ${darkGrey};
    padding: 0;
    margin: 0;
    padding-right: 15px;
    margin-right: -5px;

    cite {
      display: block;
      padding-left: 30%;
      margin: 1em auto 0;
      line-height: 1.2em;
      font-size: 0.8em;
      text-align: right;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      position: relative;
      font-size: 0.9em;
      margin-bottom: 0.3em;
      display: block;
      padding-left: 8px;

      &::before {
        position: absolute;
        top: 0.3em;
        left: 0;
        content: '';
        border-left: 2px solid ${orange};
        display: inline-block;
        height: 0.8em;
        margin-right: 7px;
      }
    }
  }

  table td {
    vertical-align: top;
    border-spacing: 0;
    border-collapse: collapse;
    padding: 0;
    padding-right: 20px;

    &:last-child {
      padding-right: 0;
    }
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
