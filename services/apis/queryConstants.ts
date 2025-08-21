import { QueryClient } from '@tanstack/react-query'
import { handleException } from 'helpers/handleException'
import { ApiKeyMapType } from 'services/types/services'

import {
  getAuthEmailAvailabilityApi,
  getAuthGoogleAuthorizeApi,
  getAuthGoogleCallbackApi,
  getAuthTokenApi,
  postAuthForgetPasswordApi,
  postAuthLoginApi,
  postAuthLogoutApi,
  postAuthRefreshNewApi,
  postAuthRefreshUseApi,
  postAuthRegisterApi,
  postAuthRequestVerifyTokenApi,
  postAuthResetPasswordApi,
  postAuthVerifyApi,
} from './authApis'
import {
  getBlogArticlesAvailableCategoriesApi,
  getBlogArticlesIdApi,
  getBlogArticlesLatestApi,
} from './blogApis'
import {
  createDiscourseCommentApi,
  createDiscourseReviewApi,
  deleteDiscourseCommentApi,
  deleteDiscourseReviewApi,
  getDiscourseMyFeedApi,
  getDiscourseMyFollowingsApi,
  getDiscourseMyReviewsApi,
  getDiscourseReviewApi,
  getDiscourseReviewCommentsApi,
  getDiscourseReviewsApi,
  getDiscourseStatisticsUserApi,
  getDiscourseUsersApi,
  postDiscourseFollowerApi,
  postDiscourseLikeApi,
  postDiscourseRatingImageApi,
  updateDiscourseCommentApi,
  updateDiscourseReviewApi,
} from './discourseApis'
import {
  postEventsSearchResultClickApi,
  postEventsShopClickApi,
  postEventsWineShareApi,
} from './eventsApis'
import { getFoodByGroupApi, getFoodByGroupMetaDataApi, getFoodDishApi } from './foodApis'
import {
  getGrapesGrapeFoodsApi,
  getGrapesGroupByInitialApi,
  getGrapesKeyGrapesApi,
  getGrapesSlugApi,
  getGrapesTopGrapesApi,
} from './grapeApis'
import {
  getLocationIpAddressApi,
  getLocationMarketLocationHeaderApi,
  getLocationReverseGeocodeApi,
} from './locationapis'
import { getMenuAllMenuItemsApi, getMenuDishesOfTheDayApi } from './menuApis'
import {
  deleteOtherNewsletterSubscriptionApi,
  getOtherUppUpdate,
  postOtherContactUsApi,
  postOtherNewsletterSubscriptionApi,
  postOtherPartnershipApi,
  postOthersCreateAppLinkApi,
} from './othersApis'
import {
  getRegionGroupByCountryApi,
  getRegionIdApi,
  getRegionKeyRegionsApi,
  getRegionTopRegionsApi,
} from './regionApis'
import {
  getSelectedGrapesApi,
  getSelectedQueriesApi,
  getSelectedQueryApi,
  getSelectedRegionsApi,
} from './selectedApis'
import { getSharingDetailApi, getSharingTokenApi } from './sharingApis'
import {
  deleteShoppingCartsCartIdRemovePromotionsApi,
  deleteShoppingCartsLineItemsApi,
  getShoppingCartByIdApi,
  getShoppingOrdersApi,
  getShoppingOrdersOrderIdApi,
  getShoppingProductsVendorStripAccountIdApi,
  getShoppingProductsWinesSlugApi,
  postShoppingCartsApi,
  postShoppingCartsCartIdApplyPromotionsApi,
  postShoppingCartsCartIdCheckoutApi,
  postShoppingCartsCartIdCompleteApi,
  postShoppingCartsLineItemsApi,
  postShoppingProductsVintageBulkIdApi,
  putShoppingCartsLineItemsApi,
} from './shoppingApis'
import {
  getSiteSearchDefaultsApi,
  getSiteSearchQueryTextApi,
  postSiteSearchGlobalApi,
} from './siteSearchApis'
import {
  getSmartSommAutoCompleteApi,
  getSmartSommIsAvailableApi,
  getSmartSommPopularWinesApi,
  getSmartSommSampleQueriesApi,
  getSmartSommSettingsInteractionLimitApi,
  postSmartSommMessagesIdThumpsDownApi,
  postSmartSommMessagesIdThumpsUpApi,
  postSmartSommRegisterSessionApi,
  postSmartSommSampleQueryClickedApi,
} from './smartsommApis'
import {
  deleteUserProfileRemoveVintageFromDrinkingHistoryApi,
  deleteUserProfileRemoveVintageFromWineCellarApi,
  deleteUserProfileRemoveVintageFromWishlistsApi,
  deleteUserProfileWishlistsDeleteApi,
  getUserProfileCountryCodeApi,
  getUserProfileDrinkingHistoryStatisticsApi,
  getUserProfileHandPickedApi,
  getUserProfileRatingsApi,
  getUserProfileRatingStatisticApi,
  getUserProfileWineCellarStatisticApi,
  getUserProfileWishlistsApi,
  postUserProfileWishlistsCreateApi,
  putUserProfileAddVintageToDrinkingHistoryApi,
  putUserProfileAddVintageToWineCellarApi,
  putUserProfileAddVintageTowishlistsApi,
  putUserProfileWishlistsUpdateApi,
} from './userProfileApis'
import {
  deleteUsersMeApi,
  getUsersMeApi,
  postUsersMeChangePasswordApi,
  putUsersMeApi,
} from './usersApis'
import {
  getVintagesAlsoBoughtApi,
  getVintagesCompactVintagesApi,
  getVintagesPromoApi,
  getVintagesSearchFromSmartsommApi,
  getVintagesSlugApi,
  getVintagesVintageIdUserPreferencesApi,
  getVintagesVintageUserPreferencesApi,
  getVintagesWineSlugFullDetailsApi,
  postVintagesSearchApi,
  postVintagesSearchWithMetaApi,
  postVintagesTopVintagesSearchApi,
} from './vintageApis'
import {
  deleteWineRatingReviewApi,
  deleteWineRatingUndoRateIdLikeApi,
  getWineRatingApi,
  getWineRatingBaseUrlMetaApi,
  patchWineRatingReviewApi,
  postWineRatingReviewApi,
  putWineRatingRateIdLikeApi,
} from './wineRatingApis'

const GET_APIS_TOAST_MESSAGE_SUFFIX = 'loaded successfully.'
export const UTILS_QUERY_KEYS = {
  auth: {
    register: 'Registered successfully.', // 1 auth/register
    jwtLogin: 'Login successfully.', // 2 auth/jwt/login
    jwtLogout: 'Logout successfully.', // 3 auth/jwt/logout
    emailAvailability: 'Email is available.', // 4 user-email/availability
    forgetPassword: 'Forget password email sent successfully.', // 5 auth/forgot-password
    resetPassword: 'New password set successfully.', // 6 auth/reset-password
    googleAuthorize: 'Redirecting to google...', // 7 auth/google/authorize
    googleCallback: 'Login via google successfully.', // 8 auth/google/callback
    token: `Auth token ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 9 auth/token
    refreshNew: 'Auth token refreshed successfully.', // 10 auth/refresh/new
    refreshUse: 'Auth token used successfully.', // 11 auth/refresh/use
    verify: 'Auth token verified successfully.', // 12 auth/verify
    requestVerifyToken: 'Auth request token verified successfully.', // 13 auth/request-verify-token
  },
  blog: {
    articlesLatest: `Latests blogs  ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 14 blog/articles/latest
    // articlesId: 'blog/article/id', // 15 single
    articlesAvailableCategories: `Blog categories  ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 16 blog/articles/available-categories
  },
  food: {
    dish: `Food dish ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 17 food/dish
    byGroup: `Food group ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 18 food/by-group
    byGroupMetadata: `Food group meta ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 19 food/by-group/metadata
  },
  location: {
    ipAddress: `Location ip address ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 20 location/ip-address
    marketLocationHeader: `Location market ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 21 location/market-location-header
    reverseGeocode: `Location geocode ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 22 reverse-geocode
  },
  grapes: {
    bySlug: `Grape item ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 23 grapes/slug
    groupByInitial: `Grape group ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 24 grapes/group-by-initial
    topGrapes: `Top grapes ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 25 grapes/top-grapes
    keyGrapes: `Grape keys ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 26 grapes/key-grapes
    grapeFoods: `Grape foods ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 27 grape-foods
  },
  menu: {
    allMenuItems: `Menu items ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 28 menu/all-menu-items
    dishesOfTheDay: `Menu day dishes ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 29 menu/dishes-of-the-day
  },
  region: {
    id: `Region ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 30 region/id
    keyRegions: `Key regions ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 31 region/key-regions
    topRegions: `Top regions ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 32 region/top-regions
    groupByCountry: `Region countries ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 33 region/group-by-country
  },
  siteSearch: {
    queryText: `Search query ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 34 site-search/query/text
    defaults: `Search defaults ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 35 site-search/defaults
    global: `Search global ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 36 site-search/global
  },
  smartsomm: {
    autoComplete: `Smart search auto complete ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 37  smartsomm/auto-complete
    sampleQueries: `Smart search sample queries ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 38 smartsomm/sample-queries
    isAvailable: 'Smart search is available', // 39 smartsomm/is-available
    onSampleQueryClicked: 'Smart search sample query slected.', // 40 smartsomm/on-sample-query-clicked
    registerSession: 'Smart search session registered successfully.', // 41 smartsomm/register-session
    messagesIdThumpsUp: 'Smart search message liked.', // 42 smartsomm/messages/id/thumbs-up
    messagesIdThumpsDown: 'Smart search message disliked.', // 43 smartsomm/messages/id/thumbs-down
    settingsInteractionLimit: `Smart search settings ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 44 smartsomm/settings/interaction-limit
    popularWines: `Smart search popular wines ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 45 smartsomm/popular-wines
  },
  vintages: {
    promo: `Vintages promo ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 46 vintages/promo
    searchWithMeta: `Vintages with meta ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 47 vintages/search-with-meta
    searchFromSmartsomm: `Vintages smart search ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 48 vintages/search-from-smartsomm
    alsoBought: `Vintages top-seller ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 49 vintages/also-bought
    search: `Vintages search ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 50 vintages/search
    // vintageSlug: '',  // 51 vintage/slug
    vintageUserIdUserPreferences: `Vintages user preferences ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 52 vintage/userId/user-preferences
    topVintagesSearch: `Top vintages ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 53 top-vintages/search
    wineSlugFullDetails: `vintage details ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 54 wine/slug/full-details
    compactVintages: `vintage compacts ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 55 compact-vintages
    vintageUserPreferences: `vintage user preferences ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 56 vintage-user-preferences
    vintageIdUserPreferences: `vintage id user preferences ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 57 vintages/vintage-id/user-preferences
  },
  wineRating: {
    slug: `Wine review ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 58 wine/rating
    ratingRateIdLike: 'Wine review liked successfully.', // 59 ratings/rateId/like
    undoRatingRateIdLike: 'Wine review like removed successfully.', // 60 ratings/rateId/like-undo
    reviewCreate: 'Wine review created successfully.', // 61 ratings/review/create
    reviewUpdate: 'Wine review updated successfully.', // 62 ratings/review/update
    reviewDelete: 'Wine review deleted successfully.', // 63 ratings/review/delete
    wineRatingBaseUrlMeta: `Wine review meta ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 64 wineRatingBaseUrl/meta
  },
  events: {
    shopClicks: 'Event clicking shop occured.', // 65 events/shop-click
    wineShare: 'Event sharing wine occured.', // 66 events/wine-share
    searchResultClick: 'Event clicking search result occured.', // 67 events/search-result-click
  },
  selected: {
    regions: `Selected regions ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 68 selected/regions
    grapes: `Selected grapes ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 69 selected/grapes
    queries: `Selected queries ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 70 selected/queries
    query: `Selected query ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 71 query
  },
  others: {
    createAppLink: 'App link created successfully.', // 72 createAppLink
    partnership: 'Partnership created successfully.', // 73 partnership
    contactUs: 'Contact us request submitted successfully.', // 74 contact_us
    newsletterSubscription: 'Newsletter subscription created successfully.', // 75 create-newsletter_subscription
    newsletterDeleteSubscription: 'Newsletter subscription deleted successfully.', // 76 delete-newsletter-subscription
    uppUpdate: 'Upp updated successfully.', // 77 upp/update
  },
  sharing: {
    token: `Sharing token ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 78 sharing/token
    detail: `Sharing details ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 79 sharing/detail
  },
  shopping: {
    productsWinesSlug: `Shopping wines ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 80 shopping/products/wines/slug
    productsVintageBulkId: `Shopping vintages ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 81 shopping/products/vintages/bulk-id
    productsVendorStripAccountId: `Stripe account ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 82 shopping/vendors/vendorId/stripe-account-id
    productsOrdersId: `Order details ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 83 shopping/orders/orders-id
    carts: 'Shopping cart created successfully.', // 84 shopping/carts
    cartsLineItems: `Shopping cart items ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 85 shopping/carts/cartId/line-items
    cartsLineItemsCreate: 'Shopping cart item created successfully.', // 86 shopping/carts/cartId/line-items/create
    cartsLineItemsUpdate: 'Shopping cart item updated successfully.', // 87 shopping/carts/cartId/line-items/update
    cartsLineItemsDelete: 'Shopping cart item deleted successfully.', // 88 shopping/carts/cartId/line-items/delete
    orders: `Orders ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 89 shopping/orders
    cartsCartIdCheckout: 'Checkout stripe created successfully.', // 90 carts/cartId/checkout/stripe-custom
    cartsCartIdComplete: 'Shopping cart completed.', // 91 carts/cartId/complete
    cartsCartIdApplyPromotions: 'Shopping cart promotion applied.', // 92 carts/cartId/promotions/apply
    cartsCartIdRemovePromotions: 'Shopping cart promotion removed.', // 93 carts/cartId/promotions/remove
  },
  userProfile: {
    countryCode: `Profile country code ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 94 users-profile/country-code
    wineCellarStatistic: `Profile wine cellar statistics ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 95 users-profile/wine-cellar/statistic
    drinkingHistoryStatistic: `Profile drinking history statistics ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 96 'users-profile/drinking-history/statistic',
    ratingStatistic: `Profile reviews statistics ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 97 'users-profile/ratings/statistic',
    wishlists: `Profile wishlists statistics ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 98 'users-profile/wishlists',
    wishlistsCreate: 'Profile wishlist created successfully.', // 99 'users-profile/wishlists/create',
    wishlistsUpdate: 'Profile wishlist updated successfully.', // 100 'users-profile/wishlists/update',
    wishlistsDelete: 'Profile wishlist deleted successfully.', // 101 'users-profile/wishlists/delete',

    addVintageTowishlists: 'Vintage added to wishlist successfully.', // 102 'users-profile/wishlists/vintages/create',
    removeVintageFromWishlists: 'Vintage removed from wishlist successfully.', // 103 'users-profile/wishlists/vintages/remove',

    addVintageToWineCellar: 'Vintage added to wine cellar successfully.', // 104 'users-profile/wine-cellar/vintages/create',
    removeVintageFromWineCellar: 'Vintage removed from wine cellar successfully.', // 105'users-profile/wine-cellar/vintages/remove',

    addVintageToDrinkingHistory: 'Vintage added to drinking history successfully.', // 106 'users-profile/drinking-history/vintages/create',
    removeVintageFromDrinkingHistory: 'Vintage removed from drinking history successfully.', // 107 'users-profile/drinking-history/vintages/remove',

    handpicked: `Profile handpicked ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 108 'users-profile/handpicked',
    ratings: `Profile my reviews ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 109 'users-profile/ratings',
  },
  users: {
    me: `My profile ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 110 users/me
    updateMe: 'My profile updated successfully.', // 111 users/me/update
    deleteMe: 'My profile removed successfully.', // 112 users/me/delete
    postMeChangePassword: 'Password changed successfully.', // 113 users/me/change-password
  },
  discourse: {
    statisticsUser: `Discourse statistics ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 114 discourse/statistics/user
    reviews: `Reviews ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 115 discourse/posts
    users: `Users ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 116 discourse/users
    followers: `User followed/unfollowed successfully.`, // 117 discourse/followers
    myFeed: `My feed ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 118 discourse/my-feed
    comments: `Comments ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 119 discourse/comments
    like: `Comment liked successfully.`, // 120 discourse/comments/like
    myReviews: `My reviews ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 121 discourse/my-reviews
    myFollowings: `My followings ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 122 discourse/my-followings
    ratingsImages: `Image uploaded successfully.`, // 123 'ratings/images',
  },
}

export const UTILS_QUERY_KEY_APIS: ApiKeyMapType = {
  // auth 13
  [UTILS_QUERY_KEYS.auth.register]: {
    createApi: postAuthRegisterApi,
  },
  [UTILS_QUERY_KEYS.auth.jwtLogin]: {
    createApi: postAuthLoginApi,
  },
  [UTILS_QUERY_KEYS.auth.emailAvailability]: {
    listApi: getAuthEmailAvailabilityApi,
  },
  [UTILS_QUERY_KEYS.auth.jwtLogout]: {
    createApi: postAuthLogoutApi,
  },
  [UTILS_QUERY_KEYS.auth.forgetPassword]: {
    createApi: postAuthForgetPasswordApi,
  },
  [UTILS_QUERY_KEYS.auth.resetPassword]: {
    createApi: postAuthResetPasswordApi,
  },
  [UTILS_QUERY_KEYS.auth.googleAuthorize]: {
    createApi: getAuthGoogleAuthorizeApi, // not sure if this should be listApi
  },
  [UTILS_QUERY_KEYS.auth.googleCallback]: {
    createApi: getAuthGoogleCallbackApi, // not sure if this should be listApi
  },
  [UTILS_QUERY_KEYS.auth.token]: {
    createApi: getAuthTokenApi, // not sure if this should be listApi
  },
  [UTILS_QUERY_KEYS.auth.refreshNew]: {
    createApi: postAuthRefreshNewApi,
  },
  [UTILS_QUERY_KEYS.auth.refreshUse]: {
    createApi: postAuthRefreshUseApi,
  },
  [UTILS_QUERY_KEYS.auth.verify]: {
    createApi: postAuthVerifyApi,
  },
  [UTILS_QUERY_KEYS.auth.requestVerifyToken]: {
    createApi: postAuthRequestVerifyTokenApi,
  },
  // blog 16
  [UTILS_QUERY_KEYS.blog.articlesLatest]: {
    listApi: getBlogArticlesLatestApi,
    singleApi: getBlogArticlesIdApi, // articlesId
  },
  [UTILS_QUERY_KEYS.blog.articlesAvailableCategories]: {
    listApi: getBlogArticlesAvailableCategoriesApi,
  },
  // food 19
  [UTILS_QUERY_KEYS.food.dish]: {
    singleApi: getFoodDishApi,
  },
  [UTILS_QUERY_KEYS.food.byGroup]: {
    listApi: getFoodByGroupApi,
  },
  [UTILS_QUERY_KEYS.food.byGroupMetadata]: {
    listApi: getFoodByGroupMetaDataApi,
  },
  // location 22
  [UTILS_QUERY_KEYS.location.marketLocationHeader]: {
    listApi: getLocationMarketLocationHeaderApi,
  },
  [UTILS_QUERY_KEYS.location.ipAddress]: {
    listApi: getLocationIpAddressApi,
  },
  [UTILS_QUERY_KEYS.location.reverseGeocode]: {
    listApi: getLocationReverseGeocodeApi,
  },
  // grapes 27
  [UTILS_QUERY_KEYS.grapes.bySlug]: {
    singleApi: getGrapesSlugApi,
  },
  [UTILS_QUERY_KEYS.grapes.groupByInitial]: {
    listApi: getGrapesGroupByInitialApi,
  },
  [UTILS_QUERY_KEYS.grapes.topGrapes]: {
    listApi: getGrapesTopGrapesApi,
  },
  [UTILS_QUERY_KEYS.grapes.keyGrapes]: {
    listApi: getGrapesKeyGrapesApi,
  },
  [UTILS_QUERY_KEYS.grapes.grapeFoods]: {
    listApi: getGrapesGrapeFoodsApi,
  },
  // menu 29
  [UTILS_QUERY_KEYS.menu.allMenuItems]: {
    listApi: getMenuAllMenuItemsApi,
  },
  [UTILS_QUERY_KEYS.menu.dishesOfTheDay]: {
    listApi: getMenuDishesOfTheDayApi,
  },
  // region 33
  [UTILS_QUERY_KEYS.region.id]: {
    singleApi: getRegionIdApi,
  },
  [UTILS_QUERY_KEYS.region.keyRegions]: {
    listApi: getRegionKeyRegionsApi,
  },
  [UTILS_QUERY_KEYS.region.topRegions]: {
    listApi: getRegionTopRegionsApi,
  },
  [UTILS_QUERY_KEYS.region.groupByCountry]: {
    listApi: getRegionGroupByCountryApi,
  },
  // site-search 36
  [UTILS_QUERY_KEYS.siteSearch.queryText]: {
    listApi: getSiteSearchQueryTextApi,
  },
  [UTILS_QUERY_KEYS.siteSearch.defaults]: {
    listApi: getSiteSearchDefaultsApi,
  },
  [UTILS_QUERY_KEYS.siteSearch.global]: {
    createApi: postSiteSearchGlobalApi,
  },
  // smartsomm 45
  [UTILS_QUERY_KEYS.smartsomm.autoComplete]: {
    listApi: getSmartSommAutoCompleteApi,
  },
  [UTILS_QUERY_KEYS.smartsomm.sampleQueries]: {
    listApi: getSmartSommSampleQueriesApi,
  },
  [UTILS_QUERY_KEYS.smartsomm.isAvailable]: {
    listApi: getSmartSommIsAvailableApi,
  },
  [UTILS_QUERY_KEYS.smartsomm.onSampleQueryClicked]: {
    createApi: postSmartSommSampleQueryClickedApi,
  },
  [UTILS_QUERY_KEYS.smartsomm.registerSession]: {
    createApi: postSmartSommRegisterSessionApi,
  },
  [UTILS_QUERY_KEYS.smartsomm.messagesIdThumpsUp]: {
    createApi: postSmartSommMessagesIdThumpsUpApi,
  },
  [UTILS_QUERY_KEYS.smartsomm.messagesIdThumpsDown]: {
    createApi: postSmartSommMessagesIdThumpsDownApi,
  },
  [UTILS_QUERY_KEYS.smartsomm.settingsInteractionLimit]: {
    listApi: getSmartSommSettingsInteractionLimitApi,
  },
  [UTILS_QUERY_KEYS.smartsomm.popularWines]: {
    listApi: getSmartSommPopularWinesApi,
  },
  // Vintages 55
  [UTILS_QUERY_KEYS.vintages.promo]: {
    listApi: getVintagesPromoApi,
  },
  [UTILS_QUERY_KEYS.vintages.searchWithMeta]: {
    createApi: postVintagesSearchWithMetaApi,
  },
  [UTILS_QUERY_KEYS.vintages.search]: {
    listApi: postVintagesSearchApi,
    singleApi: getVintagesSlugApi, // vintageSlug
  },
  [UTILS_QUERY_KEYS.vintages.searchFromSmartsomm]: {
    listApi: getVintagesSearchFromSmartsommApi,
  },
  [UTILS_QUERY_KEYS.vintages.alsoBought]: {
    listApi: getVintagesAlsoBoughtApi,
  },
  [UTILS_QUERY_KEYS.vintages.topVintagesSearch]: {
    listApi: postVintagesTopVintagesSearchApi,
  },
  [UTILS_QUERY_KEYS.vintages.wineSlugFullDetails]: {
    listApi: getVintagesWineSlugFullDetailsApi,
  },
  [UTILS_QUERY_KEYS.vintages.compactVintages]: {
    listApi: getVintagesCompactVintagesApi,
  },
  [UTILS_QUERY_KEYS.vintages.vintageUserPreferences]: {
    listApi: getVintagesVintageUserPreferencesApi,
  },
  [UTILS_QUERY_KEYS.vintages.vintageIdUserPreferences]: {
    listApi: getVintagesVintageIdUserPreferencesApi,
  },

  // events 58
  [UTILS_QUERY_KEYS.events.shopClicks]: {
    createApi: postEventsShopClickApi,
  },
  [UTILS_QUERY_KEYS.events.wineShare]: {
    createApi: postEventsWineShareApi,
  },
  [UTILS_QUERY_KEYS.events.searchResultClick]: {
    createApi: postEventsSearchResultClickApi,
  },
  // Selected 62
  [UTILS_QUERY_KEYS.selected.regions]: {
    listApi: getSelectedRegionsApi,
  },
  [UTILS_QUERY_KEYS.selected.grapes]: {
    listApi: getSelectedGrapesApi,
  },
  [UTILS_QUERY_KEYS.selected.queries]: {
    listApi: getSelectedQueriesApi,
  },
  [UTILS_QUERY_KEYS.selected.query]: {
    listApi: getSelectedQueryApi,
  },
  // Other 68
  [UTILS_QUERY_KEYS.others.createAppLink]: {
    createApi: postOthersCreateAppLinkApi,
  },
  [UTILS_QUERY_KEYS.others.partnership]: {
    createApi: postOtherPartnershipApi,
  },
  [UTILS_QUERY_KEYS.others.contactUs]: {
    createApi: postOtherContactUsApi,
  },
  [UTILS_QUERY_KEYS.others.newsletterSubscription]: {
    createApi: postOtherNewsletterSubscriptionApi,
  },
  [UTILS_QUERY_KEYS.others.newsletterDeleteSubscription]: {
    createApi: deleteOtherNewsletterSubscriptionApi,
  },
  [UTILS_QUERY_KEYS.others.uppUpdate]: {
    listApi: getOtherUppUpdate,
  },

  // Sharing 70
  [UTILS_QUERY_KEYS.sharing.token]: {
    listApi: getSharingTokenApi,
  },
  [UTILS_QUERY_KEYS.sharing.detail]: {
    listApi: getSharingDetailApi,
  },
  // Shopping 84
  [UTILS_QUERY_KEYS.shopping.productsWinesSlug]: {
    listApi: getShoppingProductsWinesSlugApi,
  },
  [UTILS_QUERY_KEYS.shopping.productsVintageBulkId]: {
    createApi: postShoppingProductsVintageBulkIdApi,
  },
  [UTILS_QUERY_KEYS.shopping.productsVendorStripAccountId]: {
    listApi: getShoppingProductsVendorStripAccountIdApi,
  },
  [UTILS_QUERY_KEYS.shopping.productsOrdersId]: {
    listApi: getShoppingOrdersOrderIdApi,
  },
  [UTILS_QUERY_KEYS.shopping.orders]: {
    listApi: getShoppingOrdersApi,
  },
  [UTILS_QUERY_KEYS.shopping.carts]: {
    singleApi: getShoppingCartByIdApi,
    createApi: postShoppingCartsApi,
  },
  [UTILS_QUERY_KEYS.shopping.cartsLineItemsCreate]: {
    createApi: postShoppingCartsLineItemsApi,
  },
  [UTILS_QUERY_KEYS.shopping.cartsLineItemsUpdate]: {
    updateApi: putShoppingCartsLineItemsApi,
  },
  [UTILS_QUERY_KEYS.shopping.cartsLineItemsDelete]: {
    createApi: deleteShoppingCartsLineItemsApi,
  },
  [UTILS_QUERY_KEYS.shopping.cartsCartIdCheckout]: {
    createApi: postShoppingCartsCartIdCheckoutApi,
  },
  [UTILS_QUERY_KEYS.shopping.cartsCartIdCheckout]: {
    createApi: postShoppingCartsCartIdCompleteApi,
  },
  [UTILS_QUERY_KEYS.shopping.cartsCartIdApplyPromotions]: {
    createApi: postShoppingCartsCartIdApplyPromotionsApi,
  },
  [UTILS_QUERY_KEYS.shopping.cartsCartIdRemovePromotions]: {
    createApi: deleteShoppingCartsCartIdRemovePromotionsApi,
  },
  // wine rating 91
  [UTILS_QUERY_KEYS.wineRating.slug]: {
    listApi: getWineRatingApi,
  },
  [UTILS_QUERY_KEYS.wineRating.ratingRateIdLike]: {
    updateApi: putWineRatingRateIdLikeApi,
  },
  [UTILS_QUERY_KEYS.wineRating.undoRatingRateIdLike]: {
    createApi: deleteWineRatingUndoRateIdLikeApi,
  },
  [UTILS_QUERY_KEYS.wineRating.reviewCreate]: {
    createApi: postWineRatingReviewApi,
  },
  [UTILS_QUERY_KEYS.wineRating.reviewUpdate]: {
    updateApi: patchWineRatingReviewApi,
  },
  [UTILS_QUERY_KEYS.wineRating.reviewDelete]: {
    createApi: deleteWineRatingReviewApi,
  },
  [UTILS_QUERY_KEYS.wineRating.wineRatingBaseUrlMeta]: {
    listApi: getWineRatingBaseUrlMetaApi,
  },
  // users: 95
  [UTILS_QUERY_KEYS.users.me]: {
    listApi: getUsersMeApi,
  },
  [UTILS_QUERY_KEYS.users.updateMe]: {
    listApi: putUsersMeApi,
  },
  [UTILS_QUERY_KEYS.users.deleteMe]: {
    listApi: deleteUsersMeApi,
  },
  [UTILS_QUERY_KEYS.users.postMeChangePassword]: {
    listApi: postUsersMeChangePasswordApi,
  },
  // user profiles 99
  [UTILS_QUERY_KEYS.userProfile.countryCode]: {
    listApi: getUserProfileCountryCodeApi,
  },
  [UTILS_QUERY_KEYS.userProfile.wineCellarStatistic]: {
    listApi: getUserProfileWineCellarStatisticApi,
  },
  [UTILS_QUERY_KEYS.userProfile.drinkingHistoryStatistic]: {
    listApi: getUserProfileDrinkingHistoryStatisticsApi,
  },
  [UTILS_QUERY_KEYS.userProfile.ratingStatistic]: {
    listApi: getUserProfileRatingStatisticApi,
  },
  // user profiles wishlists 103
  [UTILS_QUERY_KEYS.userProfile.wishlists]: {
    listApi: getUserProfileWishlistsApi,
  },
  [UTILS_QUERY_KEYS.userProfile.wishlistsCreate]: {
    listApi: postUserProfileWishlistsCreateApi,
  },
  [UTILS_QUERY_KEYS.userProfile.wishlistsUpdate]: {
    listApi: putUserProfileWishlistsUpdateApi,
  },
  [UTILS_QUERY_KEYS.userProfile.wishlistsDelete]: {
    listApi: deleteUserProfileWishlistsDeleteApi,
  },
  // user profiles wishlists-vintages 105
  [UTILS_QUERY_KEYS.userProfile.addVintageTowishlists]: {
    listApi: putUserProfileAddVintageTowishlistsApi,
  },
  [UTILS_QUERY_KEYS.userProfile.removeVintageFromWishlists]: {
    listApi: deleteUserProfileRemoveVintageFromWishlistsApi,
  },
  // user profiles wineceller-vintages 107
  [UTILS_QUERY_KEYS.userProfile.addVintageToWineCellar]: {
    listApi: putUserProfileAddVintageToWineCellarApi,
  },
  [UTILS_QUERY_KEYS.userProfile.removeVintageFromWineCellar]: {
    listApi: deleteUserProfileRemoveVintageFromWineCellarApi,
  },
  // user profiles drinking history-vintages 109
  [UTILS_QUERY_KEYS.userProfile.addVintageToDrinkingHistory]: {
    listApi: putUserProfileAddVintageToDrinkingHistoryApi,
  },
  [UTILS_QUERY_KEYS.userProfile.removeVintageFromDrinkingHistory]: {
    listApi: deleteUserProfileRemoveVintageFromDrinkingHistoryApi,
  },
  [UTILS_QUERY_KEYS.userProfile.handpicked]: {
    listApi: getUserProfileHandPickedApi,
  },
  [UTILS_QUERY_KEYS.userProfile.ratings]: {
    listApi: getUserProfileRatingsApi,
  },
  // end 113

  [UTILS_QUERY_KEYS.discourse.users]: {
    listApi: getDiscourseUsersApi,
  },
  [UTILS_QUERY_KEYS.discourse.myFeed]: {
    listApi: getDiscourseMyFeedApi,
  },
  [UTILS_QUERY_KEYS.discourse.myReviews]: {
    listApi: getDiscourseMyReviewsApi,
  },
  [UTILS_QUERY_KEYS.discourse.myFollowings]: {
    listApi: getDiscourseMyFollowingsApi,
  },
  [UTILS_QUERY_KEYS.discourse.statisticsUser]: {
    singleApi: getDiscourseStatisticsUserApi,
  },
  [UTILS_QUERY_KEYS.discourse.reviews]: {
    listApi: getDiscourseReviewsApi,
    singleApi: getDiscourseReviewApi,
    createApi: createDiscourseReviewApi,
    updateApi: updateDiscourseReviewApi,
    deleteApi: deleteDiscourseReviewApi,
  },
  [UTILS_QUERY_KEYS.discourse.comments]: {
    singleApi: getDiscourseReviewCommentsApi,
    createApi: createDiscourseCommentApi,
    updateApi: updateDiscourseCommentApi,
    deleteApi: deleteDiscourseCommentApi,
  },

  [UTILS_QUERY_KEYS.discourse.followers]: {
    createApi: postDiscourseFollowerApi,
  },
  [UTILS_QUERY_KEYS.discourse.like]: {
    createApi: postDiscourseLikeApi,
  },
  [UTILS_QUERY_KEYS.discourse.ratingsImages]: {
    createApi: postDiscourseRatingImageApi,
  },

  //   myFeed: `My feed ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 118 discourse/my-feed
  // comments: `Comments ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 119 discourse/comments
  // like: `Comment liked successfully.`, // 120 discourse/comments/like
  // myReviews: `My reviews ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 121 discourse/my-reviews
  // myFollowings: `My followings ${GET_APIS_TOAST_MESSAGE_SUFFIX}`, // 122 discourse/my-followings

  // [UTILS_QUERY_KEYS.base.products]: {
  //   listApi: getProductsApi,
  //   singleApi: getProductApi,
  //   createApi: createProductApi,
  //   updateApi: updateProductApi,
  //   deleteApi: deleteProductApi,
  // },
}

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      gcTime: 1000 * 600, // Keep cached data for 10 min
    },
    mutations: {
      // @ts-ignore
      onError: handleException,
    },
  },
})

export const HEADER_CONTENT_TYPE_URLENCODED = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}
