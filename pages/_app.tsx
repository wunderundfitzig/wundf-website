import { ReactNode } from 'react'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'

function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
