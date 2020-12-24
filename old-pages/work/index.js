import React from 'react'
import Head from 'next/head'
import { fetchFromBackend } from '../../lib/apiHelpers'
import WorkOverview from '../../components/WorkOverview/WorkOverview'

const Work = ({ stories }) => (
  <>
    <Head>
      <title>wunder & fitzig | work</title>
    </Head>
    <WorkOverview stories={stories} />
  </>
)

Work.getInitialProps = async () => {
  const stories = await fetchFromBackend('/work')

  return { stories }
}

export default Work
