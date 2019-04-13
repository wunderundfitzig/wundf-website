import React from 'react'
import { Header, Nav, NavListItem, Image, LogoImage } from './blocks'
import logo from './wundfLogo.svg'
import creatives from './creatives.svg'
import work from './work.svg'

export default () =>
  <Header>
    <Nav>
      <ul>
        <NavListItem href='/creatives'>
          <Image src={creatives} alt='creatives' />
        </NavListItem>
        <NavListItem href='/'>
          <LogoImage src={logo} alt='wunder & fitzig' />
        </NavListItem>
        <NavListItem href='/work'>
          <Image src={work} alt='work' />
        </NavListItem>
      </ul>
    </Nav>
  </Header>
