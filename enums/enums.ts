import { BorderRadius, Colors, Sizes, Spacing, fontClasses } from 'styles/common.style'

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
  PrimaryTransparent: Colors.primaryTransparent,

  SecondaryMain: Colors.secondaryMain,
  SecondaryInverse: Colors.secondaryInverse,
  SecondaryTransparent: Colors.secondaryTransparent,

  Error: Colors.error,
  Disabled: Colors.disabledMain,
}

export const FontsEnum = {
  Text12: fontClasses.text12,
  Text14: fontClasses.text14,
  Text16: fontClasses.text16,
  Text18: fontClasses.text18,

  // @TODO 1

  // labels

  Header14: fontClasses.header14,
  Header16: fontClasses.header16,
  Header18: fontClasses.header18,
  Header20: fontClasses.header20,
  Header22: fontClasses.header22,
  Header26: fontClasses.header26,
  Header30: fontClasses.header30,
}

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
