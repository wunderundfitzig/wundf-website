import colors from 'lib/colors'
import { News } from 'lib/models/news'
import { FunctionComponent } from 'react'
import WorkTeaser from './work-teaser'
import WorkFeaturedTeaser from './work-featured-teaser'
import breakpoints from 'lib/breakpoints'

interface Props {
  newsList: News[]
}
const Work: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <ul>
        {props.newsList.map((news, idx) =>
          idx === 0 ? (
            <li key={news.slug} className='first'>
              <WorkFeaturedTeaser news={news} />
            </li>
          ) : (
            <li key={news.slug}>
              <WorkTeaser news={news} />
            </li>
          )
        )}
      </ul>
      <style jsx>{`
        ul {
          position: relative;
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          justify-content: center;
          grid-gap: 2em;
          background-color: ${colors.beige};
          grid-gap: 0;
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          ul {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          ul {
            grid-template-columns: repeat(2, minmax(0, 300px));
            grid-gap: 1em;
            padding: 1em;
          }

          .first {
            grid-column: span 2;
          }
        }

        @media (min-width: ${breakpoints.l.min}px) {
          ul {
            grid-template-columns: repeat(3, minmax(0, 300px));
            grid-gap: 2em;
            padding: 2em 0;
          }

          .first {
            grid-column: span 3;
          }
        }
      `}</style>
    </section>
  )
}

export default Work
