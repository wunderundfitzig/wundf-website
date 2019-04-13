import React from 'react'
import App, { Container } from 'next/app'
import { css, Global } from '@emotion/core'
import Header from '../components/Header'
import colors from '../lib/colors'

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
            * {
              box-sizing: border-box;
            }
            body {
              color: ${colors.black};
              font-size: 16px;
              background: ${colors.backgroundGrey};
              font-family: 'Noto Serif', serif;
              font-weight: 400;
              margin: 0;
            }
            a {
              color: ${colors.blue};
              text-decoration: none;
              border-bottom: 1px solid $link-blue;

              &:hover {
                border-bottom: 1px solid;
              }
            }
        `}
        />
        <Header />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default WundfWebsite
