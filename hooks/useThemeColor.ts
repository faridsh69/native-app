import { ColorsEnum } from 'enums/enums'
import { useColorScheme } from 'hooks/useColorScheme'

export function useThemeColor(
  props: { light?: ColorsEnum; dark?: ColorsEnum },
  color: ColorsEnum,
): string {
  const theme = useColorScheme() ?? 'light'
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  }

  return color
}
