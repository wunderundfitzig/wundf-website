import { queryPageData } from 'lib/kirby-query'
import Hero from 'components/hero'
import Creatives from './_creatives'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export type Creative = {
  title: string
  image: { src: string; width: number; height: number }
  text: string
}

export const metadata: Metadata = {
  title: 'Skills | wunder & fitzig',
  description:
    'wunder & fitzig sind Martina Springmann und Manuel Reich. Zusammen gestalten wir seit 2011 digitale und analoge Produkte.',
}

export const revalidate = 10

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
  if (pageData === null) notFound()

  return (
    <>
      <Hero activeRouteName='skills' />
      <Creatives creatives={pageData.creatives} />
    </>
  )
}

export default SkillsPage
