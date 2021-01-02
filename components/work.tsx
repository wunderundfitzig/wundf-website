import colors from 'lib/colors'
import { News } from 'lib/models/news'
import { FunctionComponent } from 'react'
import WorkTeaser from './work-teaser'
import WorkFeaturedTeaser from './work-featured-teaser'

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
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(auto, 300px));
          justify-content: center;
          grid-gap: 2em;
          padding: 2em 0;
          margin: 0 auto;
          background-color: ${colors.beige};
        }

        .first {
          grid-column: span 3;
        }
      `}</style>
    </section>
  )
}

export default Work
