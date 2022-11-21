'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleRegistry, createStyleRegistry } from 'styled-jsx'

type ChildProps = { children: JSX.Element }

export function useStyledJsxRegistry() {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry())

  function styledJsxFlushEffect() {
    const styles = jsxStyleRegistry.styles()
    jsxStyleRegistry.flush()
    return <>{styles}</>
  }

  function StyledJsxRegistry({ children }: ChildProps) {
    return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
  }

  return [StyledJsxRegistry, styledJsxFlushEffect] as const
}

export default function StyledJsxRegistry({
  children,
}: {
  children: JSX.Element
}) {
  const [StyledJsxRegistry, styledJsxFlushEffect] = useStyledJsxRegistry()

  useServerInsertedHTML(() => {
    return <>{styledJsxFlushEffect()}</>
  })

  // Only include style registry on server side for SSR
  if (typeof window === 'undefined') {
    return <StyledJsxRegistry>{children}</StyledJsxRegistry>
  }

  return children
}
