type Props = {
  eszett: string
  children: string
}
export default function Style(props: Props) {
  return (
    <style href={props.eszett} precedence='eszett'>
      {`.${props.eszett} { ${props.children} }`}
    </style>
  )
}

// this is a template literal noop so we can syntax highlight css strings
export const css = (
  strings: TemplateStringsArray,
  ...expressions: unknown[]
): string => {
  let result = strings[0]
  for (let i = 1, l = strings.length; i < l; i++) {
    result += expressions[i - 1]
    result += strings[i]
  }
  return result
}
