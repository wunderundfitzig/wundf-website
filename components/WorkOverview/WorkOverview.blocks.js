import styled from '@emotion/styled'
import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const Wrapper = styled.section``

export const TopStoryWrapper = styled.article`
  position: relative;
  width: 100%;
  min-height: 300px;
  padding: 50px 30px 90px;
  overflow: hidden;
`

export const TopStoryImage = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: ${colors.darkGrey};
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0, 0.8) 10%, rgba(0,0,0, 0.5) 50%, rgba(0,0,0, 0.1) 80%, rgba(0,0,0, 0));
  }
`

export const TopStoryTitle = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: 400;
  margin: 0 0 50px;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

export const TopStoryTeaser = styled.p`
  width: 80%;
  color: white;
  margin: 0;
  text-shadow: 0 0 4px black;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

export const AttributionWrapper = styled.figcaption`
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-size: 10px;
  font-family: sans-serif;
  color: white;
  z-index: 1;

  a {
    color: white;

    &:hover {
      border: 0;
    }
  }
`

export const AttributionLicense = styled.a`
  &::after {
    content: ' '
  }
`
