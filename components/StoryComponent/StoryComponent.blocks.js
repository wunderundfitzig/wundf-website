import styled from '@emotion/styled'
import { BackgroundImage, Title, longText, whiteText, linkStyles } from '../../lib/blocks'
import { darkGrey, beige, orange } from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'
import Markdown from '../Markdown/Markdown'

export const TopImage = styled(BackgroundImage)`
  width: 100%;
  height: 400px;
  @media (min-width: ${breakpoints.l.min}px) {
    height: calc(100vh - 80px);
  }
`

export const TopTitle = styled(Title)`
  position: relative;
  font-size: 30px !important;
  margin: 0;
  margin-top: 30px;
`

export const TeaserText = styled.p`
  ${longText};
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  position: relative;
  padding: 0 30px 0 0;
  max-width: 600px;
  min-width: calc(100vw - 20px);

  @media (min-width: ${breakpoints.sm.min}px) {
    min-width: 0;
    font-size: 20px;
  }
`

export const Content = styled.div`
  margin-bottom: 80px;
  max-width: 600px;
  padding: 0 30px;
`

export const Heading = styled(Title)`
  margin-top: 2em;
  margin-bottom: 1.5em;
  text-align: center;
  color: ${orange};
  font-style: italic;
  font-weight: normal;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;

  @media (min-width: ${breakpoints.m.min}px) {
    text-align: left;
  }
`.withComponent('h2')

export const Image = styled.img`
  display: block;
  background-color: ${darkGrey};
  width: calc(100% + 30px);
  margin-bottom: 2em;

  @media (min-width: ${breakpoints.sm.min}px) {
    width: 100%;
  }
`

export const Text = styled(Markdown)`
  ${longText};
`
