import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { darkGrey } from '../../lib/colors'
// import breakpoints from '../../lib/breakpoints'

export const Wrapper = styled.article`
  margin-bottom: 80px;
`

export const Image = styled.figure`
  margin: 0;
  background-color: ${darkGrey};
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.url});
  position: relative;
  z-index: -1;
  display: block;
  width: 100%;
  height: 200px;
  margin-bottom: 0;
`

export const textContent = css`
  max-width: 400px;
`

export const Title = styled.h1`
  ${textContent};
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 20px;
`

export const Teaser = styled.p`
  ${textContent};
  margin: 0 0 20px;
`

export const Link = styled.a`
  ${textContent};
  font-weight: bold;

  &::before {
    content: '+ ';
  }
`
