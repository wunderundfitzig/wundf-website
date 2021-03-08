import styled from '@emotion/styled'
import { css } from '@emotion/core'
import breakpoints from '../../lib/breakpoints'
import { BackgroundImage, Link as LinkTemplate } from '../../lib/blocks.js'
export { Title } from '../../lib/blocks.js'

export const Wrapper = styled.article`
  margin-bottom: 60px;
  width: 100%;

  @media (min-width: ${breakpoints.m.min}px) {
    margin-bottom: 40px;
  }
`

export const imageStyles = css`
  display: block;
  margin: 0;
  position: relative;
  width: 100%;
  height: 300px;
  height: calc(100vw - 70px);
  max-height: 250px;
  margin-bottom: 0;
`

export const Image = styled(BackgroundImage)`
  ${imageStyles};
`

export const Teaser = styled.p`
  margin: 0 0 20px;
`

export const Link = styled(LinkTemplate)`
  font-weight: bold;

  &::before {
    content: '+ ';
  }
`
