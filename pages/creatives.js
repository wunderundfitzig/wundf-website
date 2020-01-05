import React from 'react'
import Head from 'next/head'
import { fetchFromBackend } from '../lib/apiHelpers'
import CreativesSections from '../components/CreativesSections/CreativesSections'

const Creatives = ({ creatives }) =>
  <>
    <Head><title>wunder & fitzig | creatives</title></Head>
    <CreativesSections creatives={creatives} />
  </>

Creatives.getInitialProps = async () => {
  const creatives = await fetchFromBackend('/creatives')

  return { creatives }
}

export default Creatives
