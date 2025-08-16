import { BorderRadius, Colors, fonts, Sizes, Spacing } from 'styles/common.style'

export enum SizesEnum {
  S = 's',
  M = 'm',
  L = 'l',
}

export enum SizesPixelEnum {
  s = Sizes.s,
  m = Sizes.m,
  l = Sizes.l,
}

export const ColorsEnum = {
  Black: Colors.black,
  White: Colors.white,

  Grey100: Colors.grey100,
  Grey200: Colors.grey200,
  Grey300: Colors.grey300,
  Grey400: Colors.grey400,
  Grey500: Colors.grey500,
  Grey600: Colors.grey600,
  Grey700: Colors.grey700,
  Grey800: Colors.grey800,

  PrimaryMain: Colors.primaryMain,
  PrimaryInverse: Colors.primaryInverse,
  PrimaryTransparent: Colors.primaryLight,

  SecondaryMain: Colors.secondaryMain,
  SecondaryInverse: Colors.secondaryInverse,
  SecondaryTransparent: Colors.secondaryLight,

  Error: Colors.error,
  Disabled: Colors.disabledMain,
} as const

export type ColorsEnum = (typeof ColorsEnum)[keyof typeof ColorsEnum]

export const FontsEnum = {
  Text12: fonts.text12,
  Text14: fonts.text14,
  Text16: fonts.text16,

  Header12: fonts.header12,
  Header14: fonts.header14,
  Header16: fonts.header16,
  Header18: fonts.header18,
  Header20: fonts.header20,
  Header22: fonts.header22,
  Header26: fonts.header26,
  Header30: fonts.header30,
} as const

export type FontsEnum = (typeof FontsEnum)[keyof typeof FontsEnum]

export enum SpacingEnum {
  S = Spacing.s,
  M = Spacing.m,
  L = Spacing.l,
}

export enum BorderRadiusEnum {
  S = BorderRadius.s,
  M = BorderRadius.m,
  L = BorderRadius.l,
}

export enum TextAlignEnum {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

export enum IconsEnum {
  Share = 'share',
  Comment = 'comment',
  Like = 'like',
  Dots = 'dots',
  Verified = 'verified',
  Filters = 'filters',
  Night = 'night',
  Review = 'review',
  Post = 'post',
  View = 'view',
  CloseSmall = 'closeSmall',
  CloseMedium = 'closeMedium',
  CloseBold = 'closeBold',
  Burger = 'burger',
  ArrowDown = 'arrowDown',
  ArrowRight = 'arrowRight',
  ArrowLeft = 'arrowLeft',
  Geo = 'geo',
  User = 'user',
  Tag = 'tag',
  Basket = 'basket',
  Logo = 'logo',
  Sort = 'sort',
  Plus = 'plus',
  Grap = 'grap',
  Star = 'star',
  Car = 'car',
  ArrowTopRight = 'arrowTopRight',
  ArrowLogo = 'arrowLogo',
  Check = 'check',
  Invisible = 'invisible',
  Visible = 'visible',
  Info = 'info',
  Mines = 'mines',
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
  France = 'france',
  EmptyWine = 'emptyWine',

  // Calendar = 'calendar',
  // Edit = 'edit',
  // Phone = 'phone',
  // Ok = 'ok',
  // Trash = 'trash',
  // Mail = 'mail',
  // Money = 'money',
  // Copy = 'copy',
  // ArrowTop = 'arrowTop',
  // ArrowBottom = 'arrowBottom',

  // NotFound = 'notFound',
  // Required = 'required',
  // Info = 'info',
  // ThreeDots = 'threeDots',
  // File = 'file',
  // Download = 'download',
}

export enum SidesEnum {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
  All = 'all',
}

export enum VariantsEnum {
  Primary = 'primary',
  Secondary = 'secondary',
  Text = 'text',
}

export const variantColorMap: Record<VariantsEnum, string> = {
  [VariantsEnum.Primary]: ColorsEnum.PrimaryMain,
  [VariantsEnum.Secondary]: ColorsEnum.SecondaryMain,
  [VariantsEnum.Text]: ColorsEnum.SecondaryTransparent,
}
