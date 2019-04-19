import React from 'react'
import { getAbsoluteURL } from '../../lib/apiHelpers'
import useSectionIndexObserver from './useSectionIndexObserver'
import { Wrapper, FixedImage, Content, Title, Markdown } from './blocks'

const Creatives = props => {
  const { creatives } = props
  const { sectionRefs, currentSectionIndex } = useSectionIndexObserver()

  return <Wrapper>
    {creatives.map((person, idx) =>
      <section
        key={idx}
        ref={ref => { sectionRefs.current[idx] = ref }}>

        <FixedImage
          url={getAbsoluteURL(person.image.path)}
          active={idx === currentSectionIndex} />
        <Content>
          <Title>{person.name}</Title>
          <Markdown markdown={person.text} />
        </Content>
      </section>
    )}
  </Wrapper>
}

export default Creatives
