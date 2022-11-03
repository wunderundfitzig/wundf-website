import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { throttle } from 'lodash'

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

  useEffect(() => {
    const scrollHandler = throttle(() => {
      // if (window.innerWidth < breakpoints.m.min) return

      const sectionIndex = getSectionIndexFrom(sectionRefs.current)
      setCurrentSectionIndex(sectionIndex)
    }, 100)

    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return { sectionRefs, currentSectionIndex }
}
