import { ReactNode } from 'react'

import Footer from './footer'
import GlobalStyles from './global-styles'
import StyledJsxRegistry from './registry'

type Props = {
  children: ReactNode
}
const RootLayout = async (props: Props) => {
  return (
    <html>
      <head>
        <title>wunder & fitzig</title>
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
