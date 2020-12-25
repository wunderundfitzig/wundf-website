import { GetStaticProps, NextPage } from 'next'
import ErrorPage from 'next/error'
import { fetchFromBackend, FetchResult } from 'lib/apiHelpers'
import { News, newsList } from 'lib/models/news'
import Hero from 'components/hero'
import Work from 'components/work'

interface Props {
  newsResult: FetchResult<News[]>
}
const WorkPage: NextPage<Props> = (props) => {
  if (props.newsResult.error !== null) {
    return <ErrorPage statusCode={500} title={props.newsResult.error} />
  }

  return (
    <>
      <Hero />
      <Work newsList={props.newsResult.data} />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const newsResult = await fetchFromBackend('/news', newsList)
  return {
    props: { newsResult },
  }
}

export default WorkPage
