import { News } from 'lib/models/news'
import { FunctionComponent } from 'react'

interface Props {
  newsList: News[]
}
const Work: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <ul>
        {props.newsList.map((news) => (
          <li key={news.slug}>{news.title}</li>
        ))}
      </ul>
    </section>
  )
}

export default Work
