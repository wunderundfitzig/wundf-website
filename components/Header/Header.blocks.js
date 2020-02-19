import styled from '@emotion/styled'
import Link from 'next/link'
import { css, keyframes } from '@emotion/core'
import { withRouter } from 'next/router'

import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

const scaleY = keyframes`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`

export const Header = styled.div`
  position: sticky;
  top: 0;
  background-color: ${colors.black};
  height: 50px;
  width: 100%;
  z-index: 200;

  @media (min-width: ${breakpoints.xl.min}px) {
    height: 68px;
  }
`

export const Nav = styled.nav`
  height: 100%;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.xl.min}px) {
    max-width: 700px;
  }

  ul {
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
  }

  li {
    flex: 1 1 33%;
    padding: 0;
    margin: 0;
  }
`

export const Image = styled.img`
  margin-top: 13px;
  height: 16px;

  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top: 20px;
    height: 21px;
  }
`

export const LogoImage = styled.img`
  margin-top: 10px;
  margin-left: -13px;
  height: 35px;

  @media (min-width: ${breakpoints.xl.min}px) {
    margin-top: 16px;
    height: 45px;
  }
`

export const Item = styled.li`
  a {
    position: relative;
    display: block;
    height: 100%;
    text-align: center;
    color: white;
    cursor: pointer;

    &:hover {
      border: 0;
    }

    ${props =>
      props.active &&
      css`
        &::after {
          content: ' ';
          position: absolute;
          margin-left: -12px;
          left: 50%;
          bottom: -10px;
          width: 0;
          height: 0;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
          border-top: 10px solid ${colors.black};
          transform-origin: top;
          animation: ${scaleY} 0.2s;
        }
      `}
  }
`

export const NavListItem = withRouter(
  ({ router, children, matchSubPages = true, ...props }) => {
    const active = matchSubPages
      ? router.pathname.startsWith(props.href)
      : router.pathname === props.href

    return (
      <Item active={active}>
        {/* next link is buggy when child is a emotion component and not a simple a tag
        so we style the a in the sorounding "Item" */}
        <Link {...props}>
          <a>{children}</a>
        </Link>
      </Item>
    )
  }
)
