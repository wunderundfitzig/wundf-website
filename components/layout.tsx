import { FunctionComponent } from 'react'

import breakpoints from 'lib/breakpoints'
import colors from 'lib/colors'

const Layout: FunctionComponent = (props) => {
  return (
    <>
      {props.children}

      <style jsx global>{`
        @font-face {
          font-family: 'ETBembo';
          src: url('/fonts/et-book-roman-old-style-figures-webfont.woff2')
              format('woff2'),
            url('/fonts/et-book-roman-old-style-figures-webfont.woff')
              format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'ETBemboLineFigures';
          src: url('/fonts/et-book-roman-line-figures-webfont.woff2')
              format('woff2'),
            url('/fonts/et-book-roman-line-figures-webfont.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'ETBembo';
          src: url('/fonts/et-book-semi-bold-old-style-figures-webfont.woff2')
              format('woff2'),
            url('/fonts/et-book-semi-bold-old-style-figures-webfont.woff')
              format('woff');
          font-weight: bold;
          font-style: normal;
        }

        * {
          box-sizing: border-box;
        }

        body {
          color: ${colors.black};
          font-size: 18px;
          font-family: 'ETBembo', serif;
          font-weight: 400;
          margin: 0;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          body {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  )
}

export default Layout
