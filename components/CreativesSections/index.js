import React, { Component } from 'react'
import { getAbsoluteURL, throttle } from '../../lib/apiHelpers'
import { Wrapper, FixedImage, Content, Title, Markdown } from './blocks'

export default class Creatives extends Component {
  state = {
    currentSectionIndex: 0
  }
  sectionRefs = []

  setCurrentSectionFromScrollPosition = () => {
    // if (this.props.isMobile) return

    const currentSectionIndex = this.sectionRefs
      .filter(ref => ref !== null)
      .reduce((currentSectionIndex, sectionRef, index) => {
        const topOffset = sectionRef.getBoundingClientRect().top
        const twoThirds = (window.innerHeight * 2 / 3)
        return topOffset - twoThirds < 0 ? index : currentSectionIndex
      }, 0)

    if (this.state.currentSectionIndex === currentSectionIndex) return
    this.setState({ currentSectionIndex })
  }

  componentDidMount () {
    this.setCurrentSectionFromScrollPosition()
    this.scrollHandler = throttle({
      func: this.setCurrentSectionFromScrollPosition,
      delay: 100
    })
    window.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  render () {
    const { creatives } = this.props
    const { currentSectionIndex } = this.state

    return <Wrapper>
      {creatives.map((person, idx) =>
        <section
          key={idx}
          ref={sectionRef => { this.sectionRefs[idx] = sectionRef }}>

          <FixedImage
            url={getAbsoluteURL(person.image.path)}
            active={idx === currentSectionIndex} />
          <Content>
            <Title>{person.name}</Title>
            <Markdown markdown={person.text} />
          </Content>
        </section>
      )}
    </Wrapper>
  }
}
