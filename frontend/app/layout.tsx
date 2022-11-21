import { ReactNode } from 'react'

import Footer from './_components/footer'
import GlobalStyles from './_components/global-styles'
import StyledJsxRegistry from './_components/registry'

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
