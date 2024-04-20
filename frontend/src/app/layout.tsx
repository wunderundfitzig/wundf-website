import { ReactNode } from 'react'
import Footer from '../components/footer'
import GlobalStyles from '../components/global-styles'

type Props = {
  children: ReactNode
}
export default async function RootLayout(props: Props) {
  return (
    <html>
      <head>
        <title>wunder & fitzig</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <GlobalStyles />
      </head>
      <body>
        {props.children}
        <Footer />
      </body>
    </html>
  )
}
