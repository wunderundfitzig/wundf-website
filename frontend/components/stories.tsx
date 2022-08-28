import { FunctionComponent } from 'react'
import Link from 'next/link'
import { StoryInfo } from 'pages/stories'

interface Props {
  stories: StoryInfo[]
}
const Stories: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className='stories'>
        <ul>
          {props.stories.map((story) => (
            <li key={story.slug}>
              <Link href={`/stories/${story.slug}`}>
                <a>{story.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .stories {
          max-width: 900px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  )
}

export default Stories
