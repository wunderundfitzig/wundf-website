import { GetStaticProps, NextPage } from 'next'
import Hero from 'components/hero'
import Creatives from 'components/creatives'
import { PageProps, queryPageData, SiteQueryResult } from 'lib/kirby-query'

export type Creative = {
  title: string
  image: { src: string; width: number; height: number }
  text: string
}

interface Props {
  creatives: Creative[]
}
const SkillsPage: NextPage<PageProps<Props>> = (props) => {
  return (
    <>
      <Hero />
      <Creatives creatives={props.pageData.creatives} />
    </>
  )
}

export const getStaticProps: GetStaticProps<
  SiteQueryResult<Props>
> = async () => {
  const result = await queryPageData<Props>({
    query: 'page("creatives")',
    select: {
      creatives: {
        query: 'page.children',
        select: {
          title: true,
          text: 'page.markdown_text',
          image: {
            query: 'page.image',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })

  return {
    props: result,
    revalidate: 1,
  }
}

export default SkillsPage
