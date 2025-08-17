import { useCallback, useRef, useState } from 'react'

import { NativeSyntheticEvent, TextLayoutEventData } from 'react-native'

export type UseIsTextFit = {
  /** true when NOT truncated */
  isFit: boolean
  /** at least one measurement happened */
  measured: boolean
  /** pass to <Text onTextLayout={onTextLayout} /> */
  onTextLayout: (e: NativeSyntheticEvent<TextLayoutEventData>) => void
}

/** Detects truncation using RN's rendered lines + ellipsis check */
export const useIsTextFit = (maxLines = 1, originalText?: string): UseIsTextFit => {
  const [isFit, setIsFit] = useState(true)
  const [measured, setMeasured] = useState(false)
  const prevRef = useRef(isFit)

  const onTextLayout = useCallback(
    (e: NativeSyntheticEvent<TextLayoutEventData>) => {
      const limit = Math.max(1, maxLines)
      const { lines } = e.nativeEvent

      let next = true
      if (lines.length < limit) next = true
      else if (lines.length > limit) next = false
      else {
        const last = (lines[limit - 1]?.text ?? '').trimEnd()
        const rnEllipsis = last.endsWith('\u2026') || last.endsWith('...')
        const sourceEllipsis =
          typeof originalText === 'string' &&
          (originalText.trimEnd().endsWith('\u2026') || originalText.trimEnd().endsWith('...'))
        next = sourceEllipsis ? true : !rnEllipsis
      }

      if (next !== prevRef.current) {
        prevRef.current = next
        setIsFit(next)
      }
      if (!measured) setMeasured(true)
    },
    [maxLines, originalText, measured],
  )

  return { isFit, measured, onTextLayout }
}
