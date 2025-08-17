import { ColorsEnumType } from 'enums/enums'
import { useColorScheme } from 'hooks/useColorScheme'

export function useThemeColor(
  props: { light?: ColorsEnumType; dark?: ColorsEnumType },
  color: ColorsEnumType,
): string {
  const theme = useColorScheme() ?? 'light'
  const colorFromProps = props[theme]

  if (colorFromProps) {
    return colorFromProps
  }

  return color
}
