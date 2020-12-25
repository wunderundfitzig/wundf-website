import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import colors from 'lib/colors'

const Navigation: FunctionComponent = () => {
  return (
    <nav id='main' className='navigation'>
      <ul>
        <li>
          <Link href='/#main'>
            <a>work</a>
          </Link>
        </li>
        <li>
          <Link href='/work#main'>
            <a>skills</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .navigation {
          background-color: ${colors.orange};
          padding: 1em;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        a {
          color: white;
          font-style: italic;
        }
      `}</style>
    </nav>
  )
}

export default Navigation
