import { queryPageData } from 'src/lib/kirby-query'
import { notFound } from 'next/navigation'

type HeadingBlock = {
  type: 'heading'
  id: string
  content: {
    level: 'h2' | 'h3'
    text: string
  }
}
type TextBlock = {
  type: 'text'
  id: string
  content: { text: string }
}
type ImageBlock = {
  type: 'image'
  id: string
  content: {
    image: { src: string; width: number; height: number }
    alt: string | null
    caption: string
  }
}

export type Block = HeadingBlock | TextBlock | ImageBlock

export type StoryContent = {
  title: string
  teaserText: string
  image: { src: string; width: string; height: string }
  content: Block[]
}

type PageData = {
  story: StoryContent
}
export async function fetchStory(storySlug: string): Promise<StoryContent> {
  const pageData = await queryPageData<PageData>({
    query: `page("work/${storySlug}")`,
    select: {
      story: {
        query: 'page',
        select: {
          title: true,
          teaserText: 'page.teaser_text',
          content: 'page.main_content.toHeadlessBlocks',
          image: {
            query: 'page.cover.toFile',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })
  if (pageData === null) notFound()

  return pageData.story
}
