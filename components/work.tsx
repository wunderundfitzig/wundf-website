import colors from 'lib/colors'
import { News } from 'lib/models/news'
import { FunctionComponent } from 'react'
import WorkTeaser from './work-teaser'
import breakpoints from 'lib/breakpoints'

interface Props {
  newsList: News[]
}
const Work: FunctionComponent<Props> = (props) => {
  return (
    <section>
      <div className='work-articles'>
        {props.newsList.map((news, idx) => (
          <WorkTeaser
            key={news.slug}
            news={news}
            gridArea={idx === 0 ? 'featured' : undefined}
            featured={idx === 0}
          />
        ))}
      </div>
      <style jsx>{`
        .work-articles {
          position: relative;
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas: 'featured';
          justify-content: center;
          grid-gap: 2em;
          background-color: ${colors.beige};
        }

        @media (min-width: ${breakpoints.sm.min}px) {
          .work-articles {
            grid-template-columns: minmax(0, 300px);
          }
        }

        @media (min-width: ${breakpoints.m.min}px) {
          .work-articles {
            grid-template-columns: repeat(2, minmax(0, 300px));
            grid-template-areas: 'featured featured';
            grid-gap: 1em;
            padding: 1em;
          }
        }

        @media (min-width: ${breakpoints.xl.min}px) {
          .work-articles {
            grid-template-columns: repeat(3, minmax(0, 300px));
            grid-template-areas: 'featured featured featured';
            grid-gap: 2em;
            padding: 2em 0;
          }
        }
      `}</style>
    </section>
  )
}

export default Work
