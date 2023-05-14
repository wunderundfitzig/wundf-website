import { queryPageData } from 'app/_lib/kirby-query'
import Hero from 'app/_components/hero'
import Creatives from './_creatives'

export type Creative = {
  title: string
  image: { src: string; width: number; height: number }
  text: string
}

export const metadata = {
  title: 'Skills | wunder & fitzig',
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
