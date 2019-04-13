import { Component } from 'react'
import { Slogan, SubSlogan, Contact, PhoneAndMail } from './blocks'

export default class Hero extends Component {
  state = {
    buzzword: this.props.buzzwords[0] + '.'
  }

  replaceWord = async (i = 0) => {
    const { buzzwords } = this.props
    await this.animateTyping({ word: buzzwords[i] + '.', backwards: true })
    await this.animateTyping({ word: buzzwords[++i] + '.' })
    if (i < buzzwords.length - 1) {
      this.timeoutId = setTimeout(() => { this.replaceWord(i) }, 3000)
    }
  }

  animateTyping = ({ word, backwards = false }) => {
    let remainingChars = word.length

    return new Promise(resolve => {
      this.intervalID = setInterval(() => {
        let charecterOffset = --remainingChars
        if (!backwards) {
          charecterOffset *= -1
          if (charecterOffset === 0) charecterOffset = word.length
        }
        this.setState({ buzzword: word.slice(0, charecterOffset) })
        if (remainingChars === 0) {
          clearInterval(this.intervalID)
          resolve()
        }
      }, backwards ? 50 : 150)
    })
  }

  componentDidMount () {
    this.timeoutId = setTimeout(this.replaceWord, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
    clearTimeout(this.timeoutId)
  }

  render () {
    const { buzzword } = this.state

    return <div>
      <Slogan>
        Wir gestalten
        <strong className='buzzword'> { buzzword }</strong>
      </Slogan>
      <SubSlogan>Digital & Analog</SubSlogan>

      <Contact>
        <PhoneAndMail>
          <span>+49 (0) 30 644 72 444 | </span>
          <a href='mailto:info@wunderundfitzig.de'>
            info@wunderundfitzig.de
          </a>
        </PhoneAndMail>
        <a href='https://goo.gl/maps/VsHnP' target='_blank'>
          Lausitzer Straße 47 10999 Berlin
        </a>
      </Contact>
    </div>
  }
}
