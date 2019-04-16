import React from 'react'
import Head from 'next/head'
import { fetchSigleton, fetchCollection } from '../lib/apiHelpers'
import Hero from '../components/Hero'
import News from '../components/News'

const Index = props => {
  const { heroProps, news } = props
  return <>
    <Head><title>wunder & fitzig</title></Head>
    <Hero {...heroProps} />
    <News news={news} />
  </>
}

Index.getInitialProps = async () => {
  // get data for hero
  let heroProps = await fetchSigleton('hero')
  heroProps.buzzwords = heroProps.buzzwords.map(word => word.value)

  // get news
  const news = await fetchCollection('news')

  return { heroProps, news }
}

export default Index
