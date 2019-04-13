import React from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Hero from '../components/Hero'

const { publicRuntimeConfig } = getConfig()

const Index = props =>
  <>
    <Head><title>wunder & fitzig</title></Head>
    <Hero {...props.heroProps} />
  </>

Index.getInitialProps = async () => {
  const res = await fetch(publicRuntimeConfig.apiURL + 'singletons/get/hero')
  let heroProps = await res.json()
  heroProps.buzzwords = heroProps.buzzwords.map(word => word.value)
  return { heroProps }
}

export default Index
