import React from 'react'
import marked from 'marked'

const Markdown = ({ markdown, className }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: marked(markdown) }}
  />
)

export default Markdown
