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
          background-color: ${colors.orange};
          padding: 0 1em;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}</style>
    </nav>
  )
}

export default Navigation
