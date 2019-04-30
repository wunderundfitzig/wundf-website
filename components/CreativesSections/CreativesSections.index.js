import React from 'react'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import useSectionIndexObserver from './useSectionIndexObserver'
import { Wrapper, PersonImage, Content, Title, Markdown } from './CreativesSections.blocks'

const Creatives = props => {
  const { creatives } = props
  const { sectionRefs, currentSectionIndex } = useSectionIndexObserver()

  return <Wrapper>
    {creatives.map((person, idx) =>
      <section
        key={idx}
        ref={ref => { sectionRefs.current[idx] = ref }}>

        <PersonImage
          url={getAbsolutAssetURL(person.image.path)}
          align={(person.image.meta || {}).align}
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
