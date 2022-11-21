import { queryPageData } from 'lib/kirby-query'
import Hero from 'app/(components)/hero'
import Creatives from './(components)/creatives'

export type Creative = {
  title: string
  image: { src: string; width: number; height: number }
  text: string
}

interface PageData {
  creatives: Creative[]
}

const SkillsPage = async () => {
  const pageData = await queryPageData<PageData>({
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

  return (
    <>
      <Hero activeRouteName='skills' />
      <Creatives creatives={pageData.creatives} />
    </>
  )
}

export default SkillsPage
