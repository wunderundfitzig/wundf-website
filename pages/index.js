import React from 'react'
import Head from 'next/head'
import { fetchSigleton, fetchCollection } from '../lib/apiHelpers'
import Hero from '../components/Hero/Hero'
import News from '../components/News/News'

const Index = props => {
  const { heroProps, news } = props
  return <>
    <Head><title>wunder & fitzig</title></Head>
    <Hero {...heroProps} />
    <News news={news} />
  </>
}

Index.getInitialProps = async () => {
  const [heroProps, news] = await Promise.all([
    fetchSigleton('hero'),
    fetchCollection('news')
  ])

  const buzzwords = heroProps.buzzwords.map(word => word.value)

  return { heroProps: { ...heroProps, buzzwords }, news }
}

export default Index
