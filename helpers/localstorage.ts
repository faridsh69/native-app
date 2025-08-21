import AsyncStorage from '@react-native-async-storage/async-storage'
import { APP_LS_KEY } from 'constants/constants'

import { isObjectEmpty, isUndefined } from './helpers'

type Bucket = Record<string, any>
const mem: Record<string, Bucket> = {}

export async function initLs(appLsKey = APP_LS_KEY) {
  try {
    const json = await AsyncStorage.getItem(appLsKey)
    mem[appLsKey] = json ? JSON.parse(json) : {}
  } catch {
    mem[appLsKey] = {}
  }
}

function ensure(appLsKey: string) {
  if (!mem[appLsKey]) mem[appLsKey] = {}
}

export function getLs<T>(lsKey: string, defaultValue: T, appLsKey = APP_LS_KEY): T {
  ensure(appLsKey)
  const data = mem[appLsKey]
  if (isObjectEmpty(data) || isUndefined(data[lsKey])) return defaultValue
  return data[lsKey] as T
}

export function setLs(lsKey: string, value: unknown, appLsKey = APP_LS_KEY): void {
  ensure(appLsKey)
  const data = mem[appLsKey]
  data[lsKey] = value
  void AsyncStorage.setItem(appLsKey, JSON.stringify(data))
}

export function removeLs(lsKey: string, appLsKey = APP_LS_KEY): void {
  ensure(appLsKey)
  const data = mem[appLsKey]
  delete data[lsKey]
  void AsyncStorage.setItem(appLsKey, JSON.stringify(data))
}
