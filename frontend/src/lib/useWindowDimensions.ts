// this is from https://stackoverflow.com/a/36862446
import { useState, useEffect } from 'react'

interface Dimensions {
  width: number
  height: number
}

function getWindowDimensions(): Dimensions | null {
  // this might be called on the server where we have no window
  if (typeof window === 'undefined') return null

  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export default function useWindowDimensions(): Dimensions | null {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, []) // passing an empty array here means this will only run on the first render
  // otherwise we would add and remove the event lister on every render

  return windowDimensions
}
