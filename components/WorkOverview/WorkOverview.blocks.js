import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { lightGrey, darkGrey } from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const textContent = css`
  max-width: 400px;
`

export const backgroundImage = css`
  margin: 0;
  background-color: ${darkGrey};
  background-size: cover;
  background-position: center;
`

export const link = css`
  ${textContent};
  font-weight: bold;

  &::before {
    content: '+ ';
  }
`

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
