import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import marked from 'marked'
import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const Wrapper = styled.article`
  max-width: 900px;
  margin: 0 auto;
`

export const FixedImage = styled.figure`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: calc(50% + 70px);
  margin: 0;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  transition: opacity 1s;
  background-color: ${colors.lightGrey};
  opacity: ${props => props.active ? 1 : 0};
`

export const Content = styled.div`
  position: relative;
  background-color: ${colors.backgroundGrey};
  margin: 70px 0 200px 50%;
  padding: 30px 40px 20px 40px;
  min-height: calc(100vh - 270px);
  z-index: 1;
`

export const Title = styled.h2`
  margin: 0;
`

export const Markdown = ({ markdown }) =>
  <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
