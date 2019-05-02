import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { lightGrey, darkGrey } from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const Wrapper = styled.div`
  @media (min-width: ${breakpoints.l.min}px) {
    display: flex;
    margin-top: 30px;
    width: 100%;
  }
`

export const ClientsContainer = styled.section`
  background-color: ${lightGrey};
  padding: 25px 20px 15px 30px;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.l.min}px) {
    min-width: calc(50% - 100px);
    min-height: 100vh;
    margin-bottom: 0;
    margin-right: 25px;
  }
`

export const StoriesContainer = styled.section`
  flex: 0 1 100%;
`

export const Story = styled.article`
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
