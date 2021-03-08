import React, { FunctionComponent } from 'react'
import NavigationItem, { Route } from 'components/navigation-item'
import breakpoints from 'lib/breakpoints'

const routes: Route[] = [
  { href: '/work', label: 'work' },
  { href: '/skills', label: 'skills' },
]

const Navigation: FunctionComponent = () => {
  return (
    <nav id='main' className='navigation'>
      <ul>
        {routes.map((route) => (
          <li key={route.href}>
            <NavigationItem route={route} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        .navigation {
          position: relative;
          z-index: 10;
          padding: 0 1.5em 0;
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
