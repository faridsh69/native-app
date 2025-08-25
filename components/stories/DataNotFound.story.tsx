import React, { useEffect, useRef, useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { IconsEnum } from 'enums/enums'
import { codeTextStyle } from 'styles/story.style'

import { Button } from 'components/ui/Button/Button'
import { DataNotFound } from 'components/ui/DataNotFound/DataNotFound'

import { Story } from './Story'

export const DataNotFoundStory: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSearch = () => {
    setIsLoading(true)
    timerRef.current = setTimeout(() => {
      setIsLoading(false)
      timerRef.current = null
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <Story>
      <Text style={styles.h4}>25) DataNotFound</Text>
      <Text style={styles.small}>It will show after search data is not found</Text>

      <Text style={codeTextStyle.inline}>
        {
          '<DataNotFound isLoading={isLoading} label="Items not found." icon={IconsEnum.EmptyWine} />'
        }
      </Text>

      <View style={styles.section}>
        <Button label='start searching' onClick={handleSearch} />

        <View style={{ width: 160 }}>
          <DataNotFound isLoading={isLoading} label='Items not found.' icon={IconsEnum.EmptyWine} />
        </View>
      </View>
    </Story>
  )
}

const styles = StyleSheet.create({
  h4: { fontSize: 18, fontWeight: '600' },
  small: { fontSize: 13, lineHeight: 18, opacity: 0.8, marginTop: 6 },
  section: {
    marginTop: 16,
    alignItems: 'flex-start',
    gap: 12,
  },
})
