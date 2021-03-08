import { Validator } from 'fefe'
import { failure, Result, success } from 'lib/result-type'

export type FetchError = string
export type FetchResult<T> = Result<T, FetchError>

export async function fetchFromBackend<T>(
  name: string,
  validator: Validator<T>
): Promise<FetchResult<T>> {
  try {
    const res = await fetch(`https://backend.wunderundfitzig.de${name}`)
    const data = await res.json()
    const validData = validator(data)
    return success(validData)
  } catch (e) {
    return failure(e.message)
  }
}
