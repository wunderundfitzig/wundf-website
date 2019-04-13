import React from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Hero from '../components/Hero'

const { publicRuntimeConfig } = getConfig()

const Index = props =>
  <>
    <Head><title>wunder & fitzig | news</title></Head>
    <Hero buzzwords={props.buzzwords} />
  </>

Index.getInitialProps = async () => {
  const res = await fetch(publicRuntimeConfig.apiURL + 'singletons/get/buzzwords')
  const buzzwordList = await res.json()
  const buzzwords = buzzwordList.words.map(word => word.value)
  return { buzzwords }
}

export default Index
