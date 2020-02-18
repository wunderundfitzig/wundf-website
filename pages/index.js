import React from 'react'
import Head from 'next/head'
import { fetchFromBackend } from '../lib/apiHelpers'
import Hero from '../components/Hero/Hero'
import News from '../components/News/News'
import Clients from '../components/Clients/Clients'

const Index = props => {
  const { news, heroProps } = props
  return (
    <>
      <Head>
        <title>wunder & fitzig</title>
      </Head>
      <Hero {...heroProps} />
      <Clients />
      <News news={news} />
    </>
  )
}

Index.getInitialProps = async () => {
  const [heroProps, news] = await Promise.all([
    fetchFromBackend('/info'),
    fetchFromBackend('/news')
  ])

  return { news, heroProps }
}

export default Index
