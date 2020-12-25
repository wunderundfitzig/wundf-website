export type Success<Data> = { error: null; data: Data }
export type Failure<Error> = { error: Error }
export type Result<Data, Error> = Success<Data> | Failure<Error>

export const success = <Data>(data: Data): Success<Data> => ({
  error: null,
  data: data,
})

export const failure = <Error>(error: Error): Failure<Error> => ({
  error: error,
})
