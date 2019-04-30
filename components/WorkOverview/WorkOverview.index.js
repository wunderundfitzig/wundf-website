import React from 'react'
import { getAbsoluteURL } from '../../lib/apiHelpers'
import { Wrapper, TopStoryWrapper, TopStoryImage, TopStoryTitle, TopStoryTeaser, AttributionWrapper, AttributionLicense } from './WorkOverview.blocks'

const Attribution = ({ imageMeta }) => {
  if (!imageMeta) return null
  const { license, licenseURL, attribution, attributionURL } = imageMeta

  return <AttributionWrapper>
    <AttributionLicense href={licenseURL} target='_blank'>
      {license}
    </AttributionLicense>
    { attributionURL
      ? <a href={attributionURL} target='_blank'>{attribution}</a>
      : attribution
    }
  </AttributionWrapper>
}

const TopStory = ({ story }) =>
  <TopStoryWrapper>
    <TopStoryImage
      url={getAbsoluteURL(story.image.path)}
      alt={(story.image.meta || {}).title}>

      <Attribution imageMeta={story.image.meta} />
    </TopStoryImage>

    <TopStoryTitle>{story.title}</TopStoryTitle>
    <TopStoryTeaser>{story.teaserText}</TopStoryTeaser>
  </TopStoryWrapper>

const WorkOverview = ({ work }) => {
  const topStory = work[0]
  return <Wrapper><TopStory story={topStory} /></Wrapper>
}

export default WorkOverview
