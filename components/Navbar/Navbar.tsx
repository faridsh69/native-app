import React, { useState } from 'react'

import { View } from 'react-native'

import Haptics from 'expo-haptics'
import { useRouter } from 'expo-router'

import { ColorsTheme } from 'constants/Colors'
import { APP_PATHS } from 'constants/constants'
import { IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { useColorScheme } from 'hooks/useColorScheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuth } from 'services/hooks/useAuth'

import { Button } from 'components/ui/Button/Button'

import { styles } from './Navbar.styles'
import { NavbarOption, NavbarProps } from './Navbar.types'

export const Navbar = ({ options, logoPressPath = '/' }: NavbarProps) => {
  const colorScheme = useColorScheme()
  const colors = ColorsTheme[colorScheme ?? 'light']
  const router = useRouter()
  const insets = useSafeAreaInsets()
  const { accessToken, autoLogin } = useAuth()

  const [selectedOption, setSelectedOption] = useState<NavbarOption | null>(null)

  const openMenuFor = (option: NavbarOption) => {
    setSelectedOption(option)
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
  }

  const closeMenu = () => {
    setSelectedOption(null)
  }

  const handleClickPath = (path: any) => {
    if (path === '/' || path === '/home') {
      router.push('/')
      return
    }

    if (path === '/profile') {
      autoLogin()
      return
    }

    router.push(path)
  }

  return (
    <View
      style={[
        styles.header,
        { paddingTop: insets.bottom + 52, borderBottomColor: colors.secondary },
      ]}
    >
      <View style={styles.logoBtn} hitSlop={10}>
        <Button
          iconRight={IconsEnum.Logo}
          variant={VariantsEnum.Text}
          size={SizesEnum.S}
          onClick={() => handleClickPath(logoPressPath)}
        />
      </View>

      {/* <View style={styles.options}>
        {options.map(opt => (
          <Pressable
            key={opt.label}
            style={styles.optionBtn}
            onPress={() => openMenuFor(opt)}
            hitSlop={10}
          >
            <Text style={[styles.optionText]}>{opt.label}</Text>
          </Pressable>
        ))}
      </View> */}

      <View style={styles.rightBar}>
        <Button
          iconLeft={IconsEnum.Geo}
          variant={VariantsEnum.Text}
          size={SizesEnum.S}
          onClick={() => Haptics.selectionAsync()}
          label={'Ship to: US' + (accessToken ? ' (logged in)' : '')}
        />
        <Button
          iconLeft={IconsEnum.User}
          variant={VariantsEnum.Text}
          size={SizesEnum.S}
          onClick={() => handleClickPath(APP_PATHS.profile)}
        />
        <Button
          iconLeft={IconsEnum.Tag}
          variant={VariantsEnum.Text}
          size={SizesEnum.S}
          onClick={() => handleClickPath('/flag')}
        />
        <Button
          iconLeft={IconsEnum.Basket}
          variant={VariantsEnum.Text}
          size={SizesEnum.S}
          onClick={() => handleClickPath('/basket')}
        />
      </View>
    </View>
  )
}
