import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import colors from 'lib/colors'
import { useRouter } from 'next/dist/client/router'

export interface Route {
  href: string
  label: string
}

interface Props {
  route: Route
}
const NavigationItem: FunctionComponent<Props> = (props) => {
  const router = useRouter()
  const isActive = router.pathname.startsWith(props.route.href)

  return (
    <>
      <Link href={props.route.href}>
        <a className={isActive ? 'active' : undefined}>{props.route.label}</a>
      </Link>
      <style jsx>{`
        @keyframes scaleY {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        a {
          color: ${colors.orange};
          font-style: italic;
          position: relative;
          display: block;
          height: 100%;
          text-align: center;
          text-decoration: none;
          padding: 0.5em;
          cursor: pointer;
        }

        a.active::after {
          content: ' ';
          position: absolute;
          margin-left: -12px;
          left: 50%;
          bottom: -10px;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 10px solid white;
          transform-origin: top;
          animation: scaleY 0.2s;
        }
      `}</style>
    </>
  )
}

export default NavigationItem
