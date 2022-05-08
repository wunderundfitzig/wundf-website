import React from 'react'
import marked from 'marked'

const Markdown = ({ markdown, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: marked.parseInline(markdown) }}
  />
)

export default Markdown
