import React from 'react'
import App, { Container } from 'next/app'
import { css, Global } from '@emotion/core'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import colors from '../lib/colors'
import breakpoints from '../lib/breakpoints'

class WundfWebsite extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Global
          styles={css`
            @font-face {
                font-family: 'ETBembo';
                src: url('/static/fonts/et-book-roman-old-style-figures-webfont.woff2') format('woff2'),
                     url('/static/fonts/et-book-roman-old-style-figures-webfont.woff') format('woff');
                font-weight: normal;
                font-style: normal;
            }

            @font-face {
                font-family: 'ETBemboLineFigures';
                src: url('/static/fonts/et-book-roman-line-figures-webfont.woff2') format('woff2'),
                     url('/static/fonts/et-book-roman-line-figures-webfont.woff') format('woff');
                font-weight: normal;
                font-style: normal;
            }

            @font-face {
                font-family: 'ETBembo';
                src: url('/static/fonts/et-book-semi-bold-old-style-figures-webfont.woff2') format('woff2'),
                     url('/static/fonts/et-book-semi-bold-old-style-figures-webfont.woff') format('woff');
                font-weight: bold;
                font-style: normal;
            }

            * {
              box-sizing: border-box;
            }
            body {
              color: ${colors.black};
              font-size: 18px;
              background: ${colors.beige};
              font-family: 'ETBembo', serif;
              font-weight: 400;
              margin: 0;

              @media (min-width: ${breakpoints.sm.min}px) {
                font-size: 20px;
              }
            }
        `}
        />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    )
  }
}

export default WundfWebsite
