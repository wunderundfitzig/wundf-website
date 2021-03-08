import { object, string } from 'fefe'

export const textPage = object({
  content: string(),
})

export type TextPage = ReturnType<typeof textPage>
