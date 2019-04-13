import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'

const { publicRuntimeConfig } = getConfig()

export async function fetchSigleton (name) {
  const url = `${publicRuntimeConfig.apiURL}/singletons/get/${name}`
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export async function fetchCollection (name) {
  const res = await fetch(`${publicRuntimeConfig.apiURL}/collections/get/${name}`)
  const data = await res.json()
  return data.entries
}
