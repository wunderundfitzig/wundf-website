import { ReactNode } from 'react'

import Footer from '../components/footer'
import GlobalStyles from '../components/global-styles'
import StyledJsxRegistry from '../components/registry'

type Props = {
  children: ReactNode
}
const RootLayout = async (props: Props) => {
  return (
    <html>
      <head>
        <title>wunder & fitzig</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <StyledJsxRegistry>
        <body>
          {props.children}
          <Footer />
          <GlobalStyles />
        </body>
      </StyledJsxRegistry>
    </html>
  )
}
export default RootLayout
