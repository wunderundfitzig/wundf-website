import React from 'react'

const HTML = ({ html, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
)

export default HTML
