import React from 'react'
import styled from '@emotion/styled'
import { Link } from '../../routes'

import colors from '../../lib/colors'
import logo from './wundfLogo.svg'
import creatives from './creatives.svg'
import work from './work.svg'

const Header = styled.div`
  background-color: ${colors.black};
  color: white;
`

export default () =>
  <Header>
    <nav>
      <ul>
        <li>
          <Link href='creatives'>
            <a><img src={creatives} alt='creatives' /></a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            {/* <img className='menu-logo'
              src='/assets/img/logo.svg'
              alt='wunder &amp; fitzig' /> */}
            <a><img src={logo} alt='wunder & fitzig' /></a>
          </Link>
        </li>
        <li>
          <Link href='work'>
            <a><img src={work} alt='work' /></a>
          </Link>
        </li>
      </ul>
    </nav>
  </Header>
