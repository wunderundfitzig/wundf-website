import { useState, useEffect, useRef } from 'react'
import { throttle } from 'lodash'
import breakpoints from 'lib/breakpoints'

function getSectionIndexFrom(sectionArray: Array<any>) {
  const newSectionIndex = sectionArray
    .filter((ref) => ref !== null)
    .reduce((sectionIndex, sectionRef, index) => {
      const topOffset = sectionRef.getBoundingClientRect().top
      const twoThirds = (window.innerHeight * 2) / 3
      return topOffset - twoThirds < 0 ? index : sectionIndex
    }, 0)

  return newSectionIndex
}

export function useSectionIndexObserver() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const sectionRefs = useRef<Array<any>>([])

  const scrollHandler = useRef(
    throttle(() => {
      if (window.innerWidth < breakpoints.l.min) return

      const sectionIndex = getSectionIndexFrom(sectionRefs.current)
      setCurrentSectionIndex(sectionIndex)
    }, 100)
  )

  useEffect(() => {
    scrollHandler.current()
    window.addEventListener('scroll', scrollHandler.current)
    return () => {
      window.removeEventListener('scroll', scrollHandler.current)
    }
  })

  return { sectionRefs, currentSectionIndex }
}
