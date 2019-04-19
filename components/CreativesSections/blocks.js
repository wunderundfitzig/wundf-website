import React from 'react'
import styled from '@emotion/styled'
import marked from 'marked'
import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const Wrapper = styled.article`
  max-width: 900px;
  margin: 0 auto;
`

export const PersonImage = styled.figure`
  width: 100%;
  height: 280px;
  margin: 0;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-color: ${colors.lightGrey};

  @media (min-width: ${breakpoints.sm.min}px) {
    height: 400px;
  }

  @media (min-width: ${breakpoints.l.min}px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc(50% + 70px);
    height: auto;
    margin: 0;
    background-position: bottom ${props => props.align || 'center'};
    transition: opacity 1s;
    opacity: ${props => props.active ? 1 : 0};
  }
`

export const Content = styled.div`
  position: relative;
  background-color: ${colors.backgroundGrey};
  padding: 20px 25px;
  margin: -80px 0 40px 40px;
  z-index: 1;

  @media (min-width: ${breakpoints.sm.min}px) {
    margin-left: calc(100% - 350px);
    padding: 30px 40px;
    margin-top: -100px;
  }

  @media (min-width: ${breakpoints.m.min}px) {
    margin-left: calc(100% - 400px);
    margin-bottom: 60px;
  }

  @media (min-width: ${breakpoints.l.min}px) {
    margin: 70px 0 400px 50%;
    padding: 30px 40px 20px 40px;
    min-height: calc(100vh - 270px);
  }
`

export const Title = styled.h2`
  margin: 0;
`

export const Markdown = ({ markdown }) =>
  <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
