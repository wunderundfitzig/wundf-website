import React from 'react'
import Head from 'next/head'
import { fetchCollection } from '../lib/apiHelpers'
import WorkOverview from '../components/WorkOverview/WorkOverview.index'
import Clients from '../components/Clients/Clients.index'

const Work = ({ clients, stories }) =>
  <>
    <Head><title>wunder & fitzig | work</title></Head>
    <Clients clients={clients} />
    <WorkOverview stories={stories} />
  </>

Work.getInitialProps = async () => {
  const [clients, stories] = await Promise.all([
    fetchCollection('clients'),
    fetchCollection('work')
  ])

  return { stories, clients }
}

export default Work
