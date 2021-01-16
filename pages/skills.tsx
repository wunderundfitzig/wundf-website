import { GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import { fetchFromBackend, FetchResult } from 'lib/apiHelpers'
import { Creative, creativesList } from 'lib/models/creative'
import Hero from 'components/hero'
import Creatives from 'components/creatives'

interface Props {
  creativesResult: FetchResult<Creative[]>
}
const SkillsPage: NextPage<Props> = (props) => {
  if (props.creativesResult.error !== null) {
    return <ErrorPage statusCode={500} title={props.creativesResult.error} />
  }

  return (
    <>
      <Hero />
      <Creatives creatives={props.creativesResult.data} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const creativesResult = await fetchFromBackend('/creatives', creativesList)
  return {
    props: { creativesResult },
  }
}

export default SkillsPage
