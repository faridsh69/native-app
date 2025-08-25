import { View } from 'react-native'

import { FontsEnum, SizesEnum } from 'enums/enums'

import { Icon } from 'components/ui/Icon/Icon'
import { Image } from 'components/ui/Image/Image'
import { Label } from 'components/ui/Label/Label'
import { Loader } from 'components/ui/Loader/Loader'

import { styles } from './DataNotFound.styles'
import { DataNotFoundProps } from './DataNotFound.types'

export const DataNotFound = (props: DataNotFoundProps) => {
  const { isLoading, label: propsLabel, icon, image, className } = props

  // const { t } = useTrans()

  // const finalLabel = propsLabel || t('No results found!')
  // const label = isLoading ? t('Searching...') : finalLabel
  const finalLabel = propsLabel || 'No results found!'
  const label = isLoading ? 'Searching...' : finalLabel

  return (
    <View style={[styles.wrapper]}>
      {isLoading && <Loader label='' subLabel='' size={SizesEnum.L} />}

      {!isLoading && !image && !!icon && <Icon icon={icon} style={styles.icon} />}

      {!isLoading && !!image && (
        // Your custom Image component — assumes it accepts `src` in RN too
        <Image src={image} />
      )}

      <Label label={label} font={FontsEnum.Text14} disabled />
    </View>
  )
}
