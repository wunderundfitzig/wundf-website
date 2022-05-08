import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import { darkGrey } from 'lib/colors'

// TODO maybe get this link list from the backend
const Footer: FunctionComponent = () => (
  <div className='footer'>
    <a
      href='https://www.github.com/wunderundfitzig/'
      target='_blank'
      rel='noreferrer'
    >
      Github
    </a>
    <a
      href='https://www.facebook.com/wunderundfitzig/'
      target='_blank'
      rel='noreferrer'
    >
      Facebook
    </a>
    <a
      href='https://www.instagram.com/wunderundfitzig/'
      target='_blank'
      rel='noreferrer'
    >
      Instagram
    </a>
    <Link href='/privacy'>
      <a>Datenschutz / Impressum</a>
    </Link>
    <style jsx>
      {`
        .footer {
          display: flex;
          flex-flow: wrap;
          justify-content: center;
          text-align: center;
          padding: 10px 10px 5px;
          background-color: ${darkGrey};
          font-size: 11px;
          position: relative;
          z-index: 1;
        }

        a {
          display: block;
          color: white;
          margin: 0 10px 5px;
          white-space: nowrap;
        }

        a::before {
          content: '+ ';
        }
      `}
    </style>
  </div>
)
export default Footer
