import styled from '@emotion/styled'

const Wrapper = styled.figcaption`
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
