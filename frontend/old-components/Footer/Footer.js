import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { linkStyles } from '../../lib/blocks'
import { darkGrey } from '../../lib/colors'

const FooterInner = styled.footer`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  text-align: center;
  padding: 10px 10px 5px;
  background-color: ${darkGrey};
  font-size: 11px;
  position: relative;
  z-index: 1;

  a {
    ${linkStyles}
    display: block;
    color: white;
    margin: 0 10px 5px;
    white-space: nowrap;

    &::before {
      content: '+ ';
    }
  }
`

// TODO maybe get this link list from the backend
const Footer = () => (
  <FooterInner>
    <a href='https://www.github.com/wunderundfitzig/' target='_blank'>
      Github
    </a>
    <a href='https://www.facebook.com/wunderundfitzig/' target='_blank'>
      Facebook
    </a>
    <a href='https://www.instagram.com/wunderundfitzig/' target='_blank'>
      Instagram
    </a>
    <Link href='/privacy'>
      <a>Datenschutz / Impressum</a>
    </Link>
  </FooterInner>
)
export default Footer
