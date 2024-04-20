import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import colors from 'lib/colors'
import breakpoints from 'lib/breakpoints'
import Style from 'components/style'

type Route = {
  href: string
  label: string
}

type Props = {
  route: Route
  isActive: boolean
}
const NavigationItem: FunctionComponent<Props> = (props) => {
  return (
    <>
      <Link
        className={`navigation-item ${props.isActive ? 'active' : ''}`}
        href={props.route.href}
        scroll={false}
      >
        {props.route.label}
      </Link>
      <Style>
        {`
        @keyframes scaleY {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }
    
        .navigation-item {
          color: ${colors.orange};
          position: relative;
          display: block;
          height: 100%;
          text-align: center;
          text-decoration: none;
          padding: 0 0 0.4em;
          font-size: 1.2em;
          cursor: pointer;
        }
    
        .navigation-item.active::after {
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
    
        @media (min-width: ${breakpoints.l.min}px) {
          .navigation-item {
            font-size: 1.3em;
          }
        }
    
        @media (min-width: ${breakpoints.xl.min}px) {
          .navigation-item {
            font-size: 1.3em;
          }
        }`}
      </Style>
    </>
  )
}

export default NavigationItem
