import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'

const Index = props =>
  <>
    <Head><title>wunder & fitzig | news</title></Head>
    <Hero buzzwords={props.buzzwords} />
  </>

Index.getInitialProps = async () => {
  const buzzwords = [
    'Nutzererlebnisse.',
    'Corporate Identities.',
    'Informationsarchitektur.',
    'Nutzererlebnisse.'
  ]

  return { buzzwords }
}

export default Index
