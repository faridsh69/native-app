import { isProd } from 'helpers/helpers'

const TESTING_API_DOMAINS = {
  base: 'https://dev.vinovoss.com/api/v2', // https://dev.vinovoss.com/api/v2
  autoSuggest: 'https://dev.vinovoss.com/auto-suggest/v1',
  firebase: 'https://us-central1-vinovoss-mobile.cloudfunctions.net',
  discourse: 'https://dev.vinovoss.com/api/v2/discourse', // 'http://localhost:8000/api/v2/discourse',
}

const PRODUCTION_API_DOMAINS = {
  base: 'https://vinovoss.com/api/v2',
  autoSuggest: 'https://vinovoss.com/auto-suggest/v1',
  firebase: 'https://us-central1-vinovoss-mobile.cloudfunctions.net',
  discourse: 'https://dev.vinovoss.com/api/v2/discourse',
}

const isProduction = isProd()

export const API_ENDPOINTS = {
  base: isProduction ? PRODUCTION_API_DOMAINS.base : TESTING_API_DOMAINS.base,
  autoSuggest: isProduction ? PRODUCTION_API_DOMAINS.autoSuggest : TESTING_API_DOMAINS.autoSuggest,
  firebase: isProduction ? PRODUCTION_API_DOMAINS.firebase : TESTING_API_DOMAINS.firebase,
  discourse: isProduction ? PRODUCTION_API_DOMAINS.discourse : TESTING_API_DOMAINS.discourse,
}
