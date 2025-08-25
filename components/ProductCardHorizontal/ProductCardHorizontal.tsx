import { View } from 'react-native'

import { CountriesEnum, FontsEnum, IconsEnum, SizesEnum } from 'enums/enums'

import { ProductCardProps } from 'components/ProductCard/ProductCard.types'
import { ProductImage } from 'components/Templates/ProductImage/ProductImage'
import { Button } from 'components/ui/Button/Button'
import { Chip } from 'components/ui/Chip/Chip'
import { Icon } from 'components/ui/Icon/Icon'
import { Label } from 'components/ui/Label/Label'
import { toastSuccess } from 'components/ui/Toast/Toast'

import { styles } from './ProductCardHorizontal.styles'

export const ProductCardHorizontal = (props: ProductCardProps) => {
  const { wine } = props

  if (!wine) return <></>

  const { src, label, vintage, litr, rate = 4.3, rateCount, country, tags = [] } = wine

  const handleAddBasket = () => {
    toastSuccess({ title: 'Success', description: 'Wine added to basket successfully.' })
  }

  return (
    <View style={styles.productCard}>
      <View style={styles.imageHolder}>
        <ProductImage src={src} width={25} height={84} />
      </View>

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Label
            label={`${label} ${vintage}, ${litr}ml`}
            font={FontsEnum.Label16}
            linesCount={2}
            cursorPointer
          />
        </View>

        <View style={styles.rate}>
          <View style={styles.iconPad}>
            <Icon icon={IconsEnum.Star} size={SizesEnum.S} />
          </View>
          <Label label={`${rate} (${rateCount})`} font={FontsEnum.Label14} cursorPointer />
        </View>

        <View style={styles.tags}>
          <View style={styles.tagItem}>
            <Chip label={country} size={SizesEnum.S} country={CountriesEnum.Fr} noHover />
          </View>
          {tags.map((tag, index) => (
            <View key={String(tag)} style={styles.tagItem}>
              <Chip key={index} label={tag} size={SizesEnum.S} icon={IconsEnum.Grap} noHover />
            </View>
          ))}
        </View>

        <Button label='Buy now' size={SizesEnum.S} onClick={handleAddBasket} width={90} />
      </View>
    </View>
  )
}
