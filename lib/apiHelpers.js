import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

const { publicRuntimeConfig } = getConfig()

export async function fetchFromBackend (name) {
  try {
    const res = await fetch(`${publicRuntimeConfig.backendURL}${name}`)
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export function throttle ({ func, delay }) {
  let block = false
  let timeoutId

  return function () {
    if (timeoutId) clearTimeout(timeoutId)

    if (block) {
      timeoutId = setTimeout(() => { func() }, delay)
    } else {
      block = true
      setTimeout(() => { block = false }, delay)
      func()
    }
  }
}
