import { object, string } from 'fefe'

function any(value: unknown): any {
  return value as any
}

export const workValidator = object({
  title: string(),
  teaserText: string(),
  image: string(),
  content: any,
})

export type Work = ReturnType<typeof workValidator>
