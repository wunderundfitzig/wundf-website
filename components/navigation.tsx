import React, { FunctionComponent } from 'react'
import colors from 'lib/colors'
import NavigationItem, { Route } from 'components/navigation-item'

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
          z-index: 1;
          padding: 1em 1em 0;
        }

        ul {
          list-style: none;
          margin: 0 auto;
          padding: 0;
          display: grid;
          max-width: 350px;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </nav>
  )
}

export default Navigation
