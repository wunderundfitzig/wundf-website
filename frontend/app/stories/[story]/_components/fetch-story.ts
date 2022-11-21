import { queryPageData } from 'app/_lib/kirby-query'

export type StoryContent = {
  title: string
  teaserText: string
  image: { src: string; width: string; height: string }
  content: any
}

type PageData = {
  story: StoryContent
}
export async function fetchStory(storySlug: string): Promise<StoryContent> {
  const { story } = await queryPageData<PageData>({
    query: `page("work/${storySlug}")`,
    select: {
      story: {
        query: 'page',
        select: {
          title: true,
          teaserText: 'page.teaser_text',
          content: 'page.main_content.toBlocks',
          image: {
            query: 'page.cover.toFile',
            select: { src: 'file.id', width: true, height: true },
          },
        },
      },
    },
  })
  return story
}
