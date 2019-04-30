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

const Attribution = ({ imageMeta }) => {
  if (!imageMeta) return null
  const { license, licenseURL, attribution, attributionURL } = imageMeta

  return <Wrapper>
    <License href={licenseURL} target='_blank'>
      {license}
    </License>
    { attributionURL
      ? <a href={attributionURL} target='_blank'>{attribution}</a>
      : attribution
    }
  </Wrapper>
}

export default Attribution
