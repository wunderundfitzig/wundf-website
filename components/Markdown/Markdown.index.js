import React from 'react'
import marked from 'marked'

const Markdown = ({ markdown }) =>
  <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />

export default Markdown
