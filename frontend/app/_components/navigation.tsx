'use client'

import React, { FunctionComponent } from 'react'
import NavigationItem from 'app/_components/navigation-item'
import breakpoints from 'app/_lib/breakpoints'

const routes = [
  { href: '/', name: 'work', label: 'work' },
  { href: '/skills', name: 'skills', label: 'skills' },
] as const

type Props = {
  activeRouteName?: 'work' | 'skills'
}
const Navigation: FunctionComponent<Props> = (props) => {
  return (
    <nav id='main' className='navigation'>
      <ul>
        {routes.map((route) => (
          <li key={route.href}>
            <NavigationItem
              route={route}
              isActive={props.activeRouteName === route.name}
            />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .navigation {
          position: relative;
          z-index: 10;
          padding: 1em 1.5em 0;
          max-width: 1030px;
          margin: 0 auto;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          justify-content: end;
          grid-template-columns: min-content min-content;
          grid-column-gap: 3.5em;
        }

        @media (min-width: ${breakpoints.m.min}px) {
          ul {
            margin: 0 1em;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          ul {
            margin: 0 auto;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navigation
