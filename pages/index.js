import React from 'react'
import Head from 'next/head'
import { fetchSigleton, fetchCollection } from '../lib/apiHelpers'
import Hero from '../components/Hero'

const Index = props =>
  <>
    <Head><title>wunder & fitzig</title></Head>
    <Hero {...props.heroProps} />
  </>

Index.getInitialProps = async () => {
  // get data for hero
  let heroProps = await fetchSigleton('hero')
  heroProps.buzzwords = heroProps.buzzwords.map(word => word.value)

  // get news
  const newsProps = await fetchCollection('news')

  return { heroProps, newsProps }
}

export default Index
