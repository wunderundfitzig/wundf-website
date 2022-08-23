import colors from 'lib/colors'
import { FunctionComponent } from 'react'
import breakpoints from 'lib/breakpoints'
import { News, StoryLink } from 'pages/work'
import WorkTeaser from './work-teaser'

interface Props {
  newsList: (News | StoryLink)[]
}
const Work: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className='work-articles'>
        {props.newsList.map((news) => (
          <WorkTeaser key={news.slug} news={news} />
        ))}
      </div>
      <style jsx>{`
        .work-articles {
          position: relative;
          list-style: none;
          margin: 0;
          padding: 0;
          padding-bottom: 4em;
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;
          grid-row-gap: 2em;
          grid-column-gap: 4em;
          background-color: ${colors.beige};
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .work-articles {
            grid-template-columns: minmax(0, 300px);
            grid-row-gap: 3em;
            background-color: ${colors.blueGrey};
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          .work-articles {
            grid-template-columns: repeat(2, minmax(0, 300px));
            grid-template-areas: 'featured featured';
            grid-column-gap: 1em;
            grid-row-gap: 4em;
            padding-right: 1.5em;
            padding-left: 1.5em;
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          .work-articles {
            grid-gap: 2em;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          .work-articles {
            grid-template-columns: repeat(3, minmax(0, 300px));
            grid-template-areas: 'featured featured featured';
            grid-column-gap: 2em;
            grid-row-gap: 4em;
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 6em;
          }
        }
      `}</style>
    </section>
  )
}

export default Work
