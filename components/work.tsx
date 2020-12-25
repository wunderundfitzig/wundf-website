import { News } from 'lib/models/news'
import { FunctionComponent } from 'react'
import WorkTeaser from './work-teaser'

interface Props {
  newsList: News[]
}
const Work: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <ul>
        {props.newsList.map((news) => (
          <li key={news.slug}>
            <WorkTeaser news={news} />
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </section>
  )
}

export default Work
