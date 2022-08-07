import { marked } from 'marked'
import { FunctionComponent } from 'react'

interface Props {
  className?: string
  children: string
}
const Markdown: FunctionComponent<Props> = (props) => (
  <div
    className={props.className}
    dangerouslySetInnerHTML={{ __html: marked.parseInline(props.children, {}) }}
  />
)

export default Markdown
