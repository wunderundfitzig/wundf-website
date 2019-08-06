import styled from '@emotion/styled'
import { BackgroundImage, Title, longText, whiteText, linkStyles } from '../../lib/blocks'
import { darkGrey, beige, orange } from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'
import Markdown from '../Markdown/Markdown'

export const TOCTitle = styled(Title)`
  color: ${orange};
  font-style: italic;
  font-weight: normal;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

export const TOCLink = styled.a`
  ${linkStyles};
  display: inline-block;
  margin-bottom: 13px;

  &:hover {
    margin-bottom: 12px;
  }
`

export const TopImage = styled(BackgroundImage)`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 200px 30px 100px;

  @media (min-width: ${breakpoints.m.min}px) {
    margin-top: 30px;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0));
  }
`

export const TopTitle = styled(Title)`
  ${whiteText};
  position: relative;
  font-size: 30px !important;
  margin: 0;
  max-width: 500px;
  z-index: 1;
`

export const TeaserText = styled.p`
  ${longText};
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  position: relative;
  margin-top: -80px;
  margin-right: 100px;
  margin-bottom: 30px;
  padding: 40px 30px 0 30px;
  max-width: 600px;
  min-width: calc(100vw - 20px);
  background-color: ${beige};
  z-index: 1;

  @media (min-width: ${breakpoints.sm.min}px) {
    min-width: 0;
    font-size: 20px;
  }
`

export const Content = styled.div`
  padding: 0 30px 0 30px;
  margin-bottom: 80px;
  max-width: 600px;
`

export const Heading = styled(Title)`
  margin-top: 3em;
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
