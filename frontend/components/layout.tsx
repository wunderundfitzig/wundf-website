import { FunctionComponent, ReactNode } from 'react'

import breakpoints from 'lib/breakpoints'
import colors from 'lib/colors'
import Footer from './footer'

type Props = {
  children: ReactNode
}
const Layout: FunctionComponent<Props> = (props) => {
  return <>{props.children}</>
}

export default Layout
