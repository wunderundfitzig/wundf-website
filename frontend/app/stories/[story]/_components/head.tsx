import { fetchStory } from './fetch-story'

type Props = {
  params: { story: string }
}
export default async function StoryHead({ params }: Props) {
  const story = await fetchStory(params.story)

  return (
    <>
      <title>
        <>{story.title} | wunder & fitzig</>
      </title>
    </>
  )
}
