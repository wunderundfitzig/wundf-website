import React from 'react'
import styled from '@emotion/styled'
import { linkStyles } from '../../lib/blocks'
import { lightGrey } from '../../lib/colors'
import { Link } from '../../routes'

const Footer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: ${lightGrey};
  font-size: 11px;
  position: relative;
  z-index: 1;

  a {
    ${linkStyles}
    margin: 0 5px;

    &::before {
      content: '+ '
    }
  }
`

// TODO maybe get this link list from the backend
export default () => <Footer>
  <a href='https://www.github.com/wunderundfitzig/' target='_blank'>Github</a>
  <a href='https://www.facebook.com/wunderundfitzig/' target='_blank'>Facebook</a>
  <a href='https://www.instagram.com/wunderundfitzig/' target='_blank'>Instagram</a>
  <Link><a href='privacy'>Datenschutz / Impressum</a></Link>
</Footer>
