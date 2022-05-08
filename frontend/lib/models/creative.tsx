import { array, object, string } from 'fefe'

export const creative = object({
  title: string(),
  image: string(),
  text: string(),
})

export const creativesList = array(creative)

export type Creative = ReturnType<typeof creative>
