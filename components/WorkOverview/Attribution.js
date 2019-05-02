import styled from '@emotion/styled'
import { grey } from '../../lib/colors'

const Wrapper = styled.figcaption`
  position: absolute;
  right: 0;
  bottom: -14px;
  font-size: 8px;
  font-family: sans-serif;
  color: ${grey};
  z-index: 1;

  a {
    color: inherit;

    &:hover {
      border: 0;
    }
  }
`

const License = styled.a`
  &::after {
    content: ' '
  }
`

const Attribution = ({ imageAttribution, className }) => {
  const { license, licenseURL, text, sourceURL } = imageAttribution

  return <Wrapper className={className}>
    <License href={licenseURL} target='_blank'>
      {license}
    </License>
    { sourceURL
      ? <a href={sourceURL} target='_blank'>{text}</a>
      : text
    }
  </Wrapper>
}

export default Attribution
