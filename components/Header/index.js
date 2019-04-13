import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { withRouter } from 'next/router'
import { Link } from '../../routes'

import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'
import logo from './wundfLogo.svg'
import creatives from './creatives.svg'
import work from './work.svg'

const scaleY = keyframes`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`

const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.black};
  height: 50px;
  width: 100%;
  z-index: 200;

  @media (min-width: ${breakpoints.xl.min}px) {
    height: 68px;
  }
`

const Nav = styled.nav`
  height: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.xl.min}px) {
    max-width: 700px;
  }

  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  li {
    flex: 1 1 33%;
    padding: 0;
    margin: 0;
  }
`

const Image = styled.img`
  margin-top: 13px;
  height: 16px;

  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top: 20px;
    height: 21px;
  }
`

const Logo = styled.img`
  margin-top: 10px;
  margin-left: -13px;
  height: 35px;

  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top: 16px;
    height: 45px;
  }
`

const ActiveLink = styled.a`
  position: relative;
  display: block;
  height: 100%;
  text-align: center;
  cursor: pointer;

  ${props => props.active && css`
    &::after {
      content: ' ';
      position: absolute;
      margin-left: -12px;
      left: 50%;
      bottom: -10px;
      width: 0;
      height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-top: 10px solid ${colors.black};
      transform-origin: top;
      animation: ${scaleY} 0.2s;
    }
  `}
`

const NavListItem = withRouter(({ router, children, ...props }) => {
  console.log(router.pathname, props.href)
  return <li>
    <Link {...props}>
      <ActiveLink active={router.pathname === props.href}>{children}</ActiveLink>
    </Link>
  </li>
})

export default () =>
  <Header>
    <Nav>
      <ul>
        <NavListItem href='/creatives'>
          <Image src={creatives} alt='creatives' />
        </NavListItem>
        <NavListItem href='/'>
          <Logo src={logo} alt='wunder & fitzig' />
        </NavListItem>
        <NavListItem href='/work'>
          <Image src={work} alt='work' />
        </NavListItem>
      </ul>
    </Nav>
  </Header>
