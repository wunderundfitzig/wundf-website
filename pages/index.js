import React from 'react'
import Head from 'next/head'
import { fetchSigleton, fetchCollection } from '../lib/apiHelpers'
import Hero from '../components/Hero/Hero'
import News from '../components/News/News'
import Clients from '../components/Clients/Clients'

const Index = props => {
  const { heroProps, clients, news } = props
  return <>
    <Head><title>wunder & fitzig</title></Head>
    <Hero {...heroProps} />
    <Clients clients={clients} />
    <News news={news} />
  </>
}

Index.getInitialProps = async () => {
  const [heroProps, clients, news] = await Promise.all([
    fetchSigleton('hero'),
    fetchCollection('clients'),
    fetchCollection('news')
  ])

  const buzzwords = heroProps.buzzwords.map(word => word.value)

  return { heroProps: { ...heroProps, buzzwords }, clients, news }
}

export default Index
