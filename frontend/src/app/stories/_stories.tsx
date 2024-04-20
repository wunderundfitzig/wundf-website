'use client'

import { FunctionComponent } from 'react'
import Teaser from 'src/components/teaser'
import colors from 'src/lib/colors'
import { StoryInfo } from './page'

interface Props {
  stories: StoryInfo[]
}
const Stories: FunctionComponent<Props> = (props) => {
  return (
    <section className='stories'>
      <h2>Alle Stories</h2>
      {props.stories.map((story) => (
        <Teaser
          {...story}
          size='featured'
          type='story-link'
          category='story'
          link={{ href: `/stories/${story.slug}`, text: 'Geschichte lesen' }}
          key={story.slug}
        />
      ))}
      <style jsx>{`
        .stories {
          display: grid;
          grid-template-columns: minmax(auto, 900px);
          justify-content: center;
          grid-gap: 3em;
          margin: 0 auto;
          padding-bottom: 6em;
          background-color: ${colors.darkBlue};
        }

        h2 {
          color: white;
          margin: 2em 0 0;
        }
      `}</style>
    </section>
  )
}

export default Stories
