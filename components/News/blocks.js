import styled from '@emotion/styled'
import colors from '../../lib/colors'
// import breakpoints from '../../lib/breakpoints'

export const Feed = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0 5px;
`

export const Image = styled.img`
  width: 100%;
`

export const Title = styled.h1`
  position: relative;
  margin: -30px 0 0 10px;
  width: 200px;
  text-align: right;
  font-weight: normal;
  background-color: ${colors.backgroundGrey};
  padding: 10px 10px 0;
  font-size: 20px;
  z-index: 10;
`

export const Content = styled.div`
  padding-left: 90px;
  padding-right: 10px;
  margin-bottom: 40px;
  color: ${colors.textGrey};

  a::before {
    content: '+ '
  }
`
