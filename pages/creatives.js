import React from 'react'
import Head from 'next/head'
import { fetchCollection } from '../lib/apiHelpers'
import CreativesSections from '../components/CreativesSections/CreativesSections'

const Creatives = ({ creatives }) =>
  <>
    <Head><title>wunder & fitzig | creatives</title></Head>
    <CreativesSections creatives={creatives} />
  </>

Creatives.getInitialProps = async () => {
  // get news
  const creatives = await fetchCollection('creatives')

  return { creatives }
}

export default Creatives
