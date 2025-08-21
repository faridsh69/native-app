import { ColorsEnumType, IconsEnum } from 'enums/enums'

export type ToastCardProps = {
  title?: string
  description?: string
  icon?: IconsEnum
  iconColor?: ColorsEnumType
  closeToast?: () => void
}

export type ShowToastOptions = {
  autoHide?: boolean
  visibilityTime?: number
}
