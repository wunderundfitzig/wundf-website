import { privateConfig } from 'src/lib/config/private-config'
import { publicConfig } from 'src/lib/config/public-config'

export const getBasicAuthHeader = (
  user: string,
  password: string
): Record<'Authorization', string> => {
  const credentials = Buffer.from(`${user}:${password}`).toString('base64')
  return {
    Authorization: `Basic ${credentials}`,
  }
}

export async function queryBackend(query: {
  query: string
  select?: Record<string, unknown>
}): Promise<unknown | null> {
  const result = await fetch(`${publicConfig.backendURL}/api/query`, {
    method: 'POST',
    headers: {
      ...getBasicAuthHeader(
        privateConfig.backendUser,
        privateConfig.backendPassword
      ),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
    next: { revalidate: 60 },
  })
  if (result.status >= 300) {
    const resultText = await result.json()
    console.error(resultText)
    throw new Error(result.statusText)
  }
  const json = await result.json()
  return json.result
}

export async function queryPageData<T>(pageQuery: {
  query: string
  select?: Record<string, unknown>
}): Promise<({ title: string } & T) | null> {
  return queryBackend({
    query: pageQuery.query,
    select: { title: true, ...(pageQuery.select ?? {}) },
  }) as Promise<({ title: string } & T) | null>
}
