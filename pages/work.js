import React from 'react'
import Head from 'next/head'
import { fetchCollection } from '../lib/apiHelpers'
import WorkOverview from '../components/WorkOverview/WorkOverview.index'

const Work = ({ work }) =>
  <>
    <Head><title>wunder & fitzig | work</title></Head>
    <WorkOverview work={work} />
  </>

Work.getInitialProps = async () => {
  // const customers = await fetchCollection('customers')
  const work = await fetchCollection('creatives')

  return { work }
}

export default Work
