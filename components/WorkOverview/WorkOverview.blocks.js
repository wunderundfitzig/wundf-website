import styled from '@emotion/styled'
import { lightGrey } from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const Wrapper = styled.div`
  @media (min-width: ${breakpoints.xl.min}px) {
    display: flex;
    margin-top: 30px;
    width: 100%;
  }
`

export const ClientsContainer = styled.section`
  background-color: ${lightGrey};
  padding: 25px 20px 15px 30px;

  @media (min-width: ${breakpoints.xl.min}px) {
    min-width: calc(50% - 150px);
    min-height: 100vh;
    margin-bottom: 0;
    margin-right: 20px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    margin-right: 30px;
  }
`

export const StoriesContainer = styled.section`
  flex: 0 1 100%;
`

export const OtherStories = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.m.min}px) {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding: 0 30px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    max-width: 700px;
    margin: 0;
    padding-left: 0;
  }
`
