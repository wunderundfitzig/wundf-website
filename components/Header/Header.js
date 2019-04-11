import React from 'react'
import styled from '@emotion/styled'
import colors from '../../lib/colors'
import { Link } from '../../routes'

const Header = styled.div`
  background-color: ${colors.black};
  color: white;
`

// export default () =>
//   <Header>hey ho</Header>

export default () =>
  <Header>
    <nav>
      <ul>
        <li>
          <Link href='creatives'>
            {/* <img className='menu-img'
              src='/assets/img/creatives.svg'
              alt='creatives' /> */}
            <a>creatives</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            {/* <img className='menu-logo'
              src='/assets/img/logo.svg'
              alt='wunder &amp; fitzig' /> */}
            <a>news</a>
          </Link>
        </li>
        <li>
          <Link href='work'>
            {/* <img className='menu-img'
              src='/assets/img/work.svg'
              alt='work' /> */}
            <a>work</a>
          </Link>
        </li>
      </ul>
    </nav>
  </Header>
