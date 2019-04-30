import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

const { publicRuntimeConfig } = getConfig()

export async function fetchSigleton (name) {
  const url = `${publicRuntimeConfig.backendURL}/api/singletons/get/${name}`
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export async function fetchCollection (name) {
  const res = await fetch(`${publicRuntimeConfig.backendURL}/api/collections/get/${name}`)
  const data = await res.json()
  return data.entries
}

export function getAbsolutAssetURL (path) {
  return path.charAt(0) === '/'
    ? `${publicRuntimeConfig.backendURL}/storage/uploads${path}`
    : `${publicRuntimeConfig.backendURL}/storage/uploads/${path}`
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
