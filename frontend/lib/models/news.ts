import { array, object, string } from 'fefe'

export const news = object({
  slug: string(),
  title: string(),
  description: string(),
  linkText: string(),
  linkURL: string(),
  image: string(),
})

export const newsList = array(news)

export type News = ReturnType<typeof news>
