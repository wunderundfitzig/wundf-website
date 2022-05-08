import { Component } from 'react'
import {
  Wrapper,
  Slogan,
  Buzzword,
  Contact,
  PhoneAndMail,
  Link,
} from './Hero.blocks'

export default class Hero extends Component {
  // state = {
  //   buzzword: this.props.buzzwords[this.props.buzzwords.length - 1] + '.',
  //   buzzwordVisible: false
  // }
  //
  // replaceWord = async (i = 0) => {
  //   const { buzzword } = this.state
  //   const { buzzwords } = this.props
  //   await this.animateTyping({ word: buzzword + '.', backwards: true })
  //   await this.animateTyping({ word: buzzwords[i] + '.' })
  //   if (i < buzzwords.length - 1) {
  //     this.timeoutId = setTimeout(() => { this.replaceWord(++i) }, 3000)
  //   }
  // }
  //
  // animateTyping = ({ word, backwards = false }) => {
  //   let remainingChars = word.length
  //
  //   return new Promise(resolve => {
  //     this.intervalID = setInterval(() => {
  //       let charecterOffset = --remainingChars
  //       if (!backwards) {
  //         charecterOffset *= -1
  //         if (charecterOffset === 0) charecterOffset = word.length
  //       }
  //       this.setState({ buzzword: word.slice(0, charecterOffset) })
  //       if (remainingChars === 0) {
  //         clearInterval(this.intervalID)
  //         resolve()
  //       }
  //     }, backwards ? 20 : 70)
  //   })
  // }
  //
  // componentDidMount () {
  //   this.setState({ buzzword: '', buzzwordVisible: true })
  //   this.timeoutId = setTimeout(this.replaceWord, 800)
  // }
  //
  // componentWillUnmount () {
  //   clearInterval(this.intervalID)
  //   clearTimeout(this.timeoutId)
  // }

  render() {
    const { phoneNumber, mail, address, addressURL } = this.props
    // const { buzzword, buzzwordVisible } = this.state

    return (
      <Wrapper>
        <Slogan>
          Wir gestalten
          <Buzzword visible>Nutzererlebnisse</Buzzword>
        </Slogan>

        <Contact>
          <PhoneAndMail>
            <span>{phoneNumber} | </span>
            <Link href={`mailto:${mail}`}>{mail}</Link>
          </PhoneAndMail>
          <Link href={addressURL} target='_blank'>
            {address}
          </Link>
        </Contact>
      </Wrapper>
    )
  }
}
