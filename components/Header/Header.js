import React from 'react'
import { Header, Nav, NavListItem, Image, LogoImage } from './Header.blocks'
import logo from './wundfLogo.svg'
import creatives from './creatives.svg'
import work from './work.svg'

export default () =>
  <Header>
    <Nav>
      <ul>
        <NavListItem href='/work'>
          <Image src={work} alt='work' />
        </NavListItem>
        <NavListItem href='/' matchSubPages={false}>
          <LogoImage src={logo} alt='wunder & fitzig' />
        </NavListItem>
        <NavListItem href='/creatives'>
          <Image src={creatives} alt='creatives' />
        </NavListItem>
      </ul>
    </Nav>
  </Header>
