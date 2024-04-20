import breakpoints from 'lib/breakpoints'
import colors from 'lib/colors'
import Style from './style'

export default async function GlobalStyles() {
  return (
    <Style>
      {`@font-face {
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

        p {
          line-height: 1.5;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          body {
            font-size: 20px;
          }
        }

        a {
          color: ${colors.blue};
          text-decoration: none;
        }
      `}
    </Style>
  )
}
