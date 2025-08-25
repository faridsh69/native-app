export type NavbarProps = {
  options: NavbarOption[]
  logoPressPath?: string
}

export type NavbarOption = {
  label: string
  categories?: {
    label: string
    path: string
    options: { label: string; path: string }[]
  }[]
}
