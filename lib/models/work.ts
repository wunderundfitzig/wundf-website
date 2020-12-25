import { object, string } from 'fefe'

export const workValidator = object({
  url: string(),
  slug: string(),
  title: string(),
  teaserText: string(),
  linkText: string(),
  image: string(),
})

export type Work = ReturnType<typeof workValidator>
