import { ColorsEnum } from 'enums/enums'

export const ColorsTheme = {
  light: {
    text: ColorsEnum.Black,
    background: ColorsEnum.White,
    tint: ColorsEnum.Black,
    icon: ColorsEnum.Grey600,
    tabIconDefault: ColorsEnum.Grey600,
    tabIconSelected: ColorsEnum.Black,

    primary: ColorsEnum.PrimaryMain,
    secondary: ColorsEnum.SecondaryMain,

    disabled: ColorsEnum.Disabled,
    border: ColorsEnum.Grey200,
  },
  dark: {
    text: ColorsEnum.White,
    background: ColorsEnum.Black,
    tint: ColorsEnum.White,
    icon: ColorsEnum.Grey400,
    tabIconDefault: ColorsEnum.Grey400,
    tabIconSelected: ColorsEnum.White,

    primary: ColorsEnum.PrimaryMain,
    secondary: ColorsEnum.SecondaryMain,

    disabled: ColorsEnum.Disabled,
    border: ColorsEnum.Grey600,
  },
}
