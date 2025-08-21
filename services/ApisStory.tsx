import { useEffect, useState } from 'react'

//  import { toastError, toastSuccess } from 'components/Toast/Toast'
import { IconsEnum, VariantsEnum } from 'enums/enums'
import { handleException } from 'helpers/handleException'
import { getAuthUserAccessToken, setAuthUserAccessToken } from 'helpers/userMethods'

import { Button } from 'components/ui/Button/Button'

import {
  useCrudAuthLogin,
  useCrudAuthLogout,
  useCrudAuthRegister,
  useCrudEmailAvailablity,
} from './hooks/useCrudAuth'
import { useCrudSiteSearchGlobal } from './hooks/useCrudSiteSearch'
import {
  useCrudSmartSommMessagesIdThumpsDown,
  useCrudSmartSommMessagesIdThumpsUp,
  useCrudSmartSommRegisterSession,
  useCrudSmartSommSampleQueryClicked,
} from './hooks/useCrudSmartsomm'

export const ApisStory = () => {
  // const crudBlogArticlesLatest = useCrudBlogArticlesLatest('blogSlugg')
  // console.log('1 crudBlogArticlesLatest', crudBlogArticlesLatest)

  // const crudBlogArticleAvailableCategories = useCrudBlogArticleAvailableCategories()
  // console.log('2 crudBlogArticleAvailableCategories', crudBlogArticleAvailableCategories.list)

  // const crudFoodDish = useCrudFoodDish('foodSlug')
  // console.log('3 crudFoodDish', crudFoodDish)

  // const crudFoodByGroup = useCrudFoodByGroup({ group_name: 'group1' })
  // console.log('4 crudFoodByGroup', crudFoodByGroup)

  // const crudFoodByGroupMetaData = useCrudFoodByGroupMetaData()
  // console.log('5 crudFoodByGroupMetaData', crudFoodByGroupMetaData)

  // const crudLocationIpAddress = useCrudLocationIpAddress()
  // console.log('6 crudLocationIpAddress', crudLocationIpAddress)

  // const crudLocationMarketLocationHeader = useCrudLocationMarketLocationHeader()
  // console.log('7 crudLocationMarketLocationHeader', crudLocationMarketLocationHeader)

  // const crudLocationReverseGeocode = useCrudLocationReverseGeocode({ latitude: 0, longitude: 0 })
  // console.log('8 crudLocationReverseGeocode', crudLocationReverseGeocode.listApiResponse)

  // const crudGrapesGroupByInitial = useCrudGrapesGroupByInitial({ initial_characters: 'data' })
  // console.log('9 crudGrapesGroupByInitial', crudGrapesGroupByInitial)

  // const crudGrapesTopGrapes = useCrudGrapesTopGrapes()
  // console.log('10 crudGrapesTopGrapes', crudGrapesTopGrapes)

  // const crudGrapesKeyGrapes = useCrudGrapesKeyGrapes()
  // console.log('11 crudGrapesKeyGrapes', crudGrapesKeyGrapes)

  // const crudGrapesGrapeFoods = useCrudGrapesGrapeFoods({
  //   grape_name: 'data',
  // })
  // console.log('12 crudGrapesGrapeFoods', crudGrapesGrapeFoods)

  // const crudMenuAllMenuItems = useCrudMenuAllMenuItems()
  // console.log('13 crudMenuAllMenuItems', crudMenuAllMenuItems)

  // const crudMenuDishesOfTheDay = useCrudMenuDishesOfTheDay()
  // console.log('14 crudMenuDishesOfTheDay', crudMenuDishesOfTheDay)

  // const crudRegionId = useCrudRegionId('us')
  // console.log('15 crudRegionId', crudRegionId)

  // const crudRegionKeyRegions = useCrudRegionKeyRegions()
  // console.log('16 crudRegionKeyRegions', crudRegionKeyRegions)

  // const crudTopRegions = useCrudTopRegions()
  // console.log('17 crudTopRegions', crudTopRegions)

  // const crudGroupByCountry = useCrudGroupByCountry({
  //   initial_characters: 'data',
  // })
  // console.log('18 crudGroupByCountry', crudGroupByCountry)

  // const crudSiteSearchQueryText = useCrudSiteSearchQueryText({
  //   text: 'red',
  //   max_results: 5,
  // })
  // console.log('19 crudSiteSearchQueryText', crudSiteSearchQueryText)

  // const crudSiteSearchDefaults = useCrudSiteSearchDefaults()
  // console.log('20 crudSiteSearchDefaults', crudSiteSearchDefaults)

  // const crudSmartsommAutoComplete = useCrudSmartsommAutoComplete()
  // console.log('21 crudSmartsommAutoComplete', crudSmartsommAutoComplete)

  // const crudSmartSommSampleQueries = useCrudSmartSommSampleQueries({
  //   k_max: 1000,
  //   k_min: 1,
  // })
  // console.log('22 crudSmartSommSampleQueries', crudSmartSommSampleQueries)

  // const crudSmartSommIsAvailable = useCrudSmartSommIsAvailable()
  // console.log('23 crudSmartSommIsAvailable', crudSmartSommIsAvailable)

  // 24
  const crudSmartSommSampleQueryClicked = useCrudSmartSommSampleQueryClicked()

  // 25
  const crudSmartSommRegisterSession = useCrudSmartSommRegisterSession()

  // 26
  const { createMutation: register } = useCrudAuthRegister()

  // 27
  const [emailAvailable, setEmailAvailable] = useState<string>('')
  const { listApiResponse } = useCrudEmailAvailablity({ email: emailAvailable })
  useEffect(() => {
    if (!listApiResponse) return
    if (listApiResponse.is_available) {
      // toastSuccess({ description: emailAvailable + ' is available' })
    } else {
      // toastError({ description: emailAvailable + ' is not available' })
    }
  }, [listApiResponse])

  // 28
  const { createMutation: login } = useCrudAuthLogin()

  // 29
  const accessToken = getAuthUserAccessToken()
  const { createMutation: logout } = useCrudAuthLogout()

  // 30
  const cudSiteSearchGlobal = useCrudSiteSearchGlobal()

  // 31
  const crudSmartSommMessagesIdThumpsUp = useCrudSmartSommMessagesIdThumpsUp()

  // 32
  const crudSmartSommMessagesIdThumpsDown = useCrudSmartSommMessagesIdThumpsDown()

  // const crudSmartSommSettingsInteractionLimit = useCrudSmartSommSettingsInteractionLimit()
  // console.log('33 crudSmartSommSettingsInteractionLimit', crudSmartSommSettingsInteractionLimit)

  return (
    <div style={{ gap: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button
        label='Test smartsomm thumbs down'
        variant={VariantsEnum.Primary}
        onClick={() =>
          crudSmartSommMessagesIdThumpsDown.createMutation.mutate({
            data: {
              message_id: 1123123123,
            },
          })
        }
      />
      <Button
        label='Test smartsomm thumbs up'
        variant={VariantsEnum.Secondary}
        iconRight={IconsEnum.ArrowTopRight}
        onClick={() =>
          crudSmartSommMessagesIdThumpsUp.createMutation.mutate({
            data: {
              message_id: 1,
            },
          })
        }
      />
      <Button
        label='Test smartsomm Register session'
        variant={VariantsEnum.Primary}
        onClick={() =>
          crudSmartSommRegisterSession.createMutation.mutate({
            data: { query: 'red', session_id: '123e4567-e89b-12d3-a456-426614174000' },
          })
        }
      />
      <Button
        label='Test smartsomm Sample Queries clicked'
        variant={VariantsEnum.Secondary}
        onClick={() =>
          crudSmartSommSampleQueryClicked.createMutation.mutate({
            data: { query: 'red' },
          })
        }
      />
      <Button
        label='Test site search global'
        variant={VariantsEnum.Primary}
        onClick={() =>
          cudSiteSearchGlobal.createMutation.mutate({
            data: { query_text: 'red' },
          })
        }
      />
      <Button
        label='Test register api'
        variant={VariantsEnum.Secondary}
        onClick={() =>
          register.mutate({
            data: { email: 'farid@test.com', password: '123456' },
          })
        }
      />
      <Button
        label='Test email availability api'
        onClick={() => setEmailAvailable('farid@test.com')}
      />
      {accessToken}
      {!accessToken && (
        <Button
          label='Test login api'
          variant={VariantsEnum.Secondary}
          onClick={() =>
            login.mutate({
              data: { username: 'farid@test.com', password: '123456' },
              onSuccess: response => {
                setAuthUserAccessToken(response?.data?.access_token)
                // toastSuccess({ description: 'Login successfully' })
              },
              hideToast: true,
            })
          }
        />
      )}
      {!!accessToken && (
        <Button
          label='Test logout api'
          variant={VariantsEnum.Primary}
          onClick={() =>
            logout.mutate({
              data: {},
              onSuccess: response => {
                setAuthUserAccessToken(response?.data?.access_token)
                // toastSuccess({ description: 'Logout successfully' })
              },
              onError: (error: any) => {
                handleException(error, 'Logout Error')
              },
              hideToast: true,
            })
          }
        />
      )}
    </div>
  )
}
