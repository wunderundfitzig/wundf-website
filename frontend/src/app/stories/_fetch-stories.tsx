import { queryPageData } from 'lib/kirby-query'

export type StoryInfo = {
  slug: string
  title: string
  description: string
  image: { src: string; width: number; height: number }
}

type StoriesData = {
  stories: StoryInfo[]
}
export async function fetchStories(): Promise<StoriesData> {
  return queryPageData<StoriesData>({
    query: `page("work")`,
    select: {
      stories: {
        query: 'page.children',
        select: {
          title: true,
          slug: true,
          description: 'page.teaser_text',
          image: {
            query: 'page.cover.toFile',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })
}
