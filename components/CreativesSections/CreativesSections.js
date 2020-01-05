import React from 'react'
import useSectionIndexObserver from './useSectionIndexObserver'
import Markdown from '../Markdown/Markdown'
import { Wrapper, PersonImage, Content, CreativesTitle } from './CreativesSections.blocks'

const Creatives = props => {
  const { creatives } = props
  const { sectionRefs, currentSectionIndex } = useSectionIndexObserver()

  return <Wrapper>
    {creatives.map((person, idx) =>
      <article
        key={idx}
        ref={ref => { sectionRefs.current[idx] = ref }}>

        <PersonImage
          url={person.image}
          // align={(person.image.meta || {}).align}
          active={idx === currentSectionIndex} />
        <Content>
          <CreativesTitle>{person.title}</CreativesTitle>
          <Markdown markdown={person.text} />
        </Content>
      </article>
    )}
  </Wrapper>
}

export default Creatives
