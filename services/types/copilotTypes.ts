import type { IShoppingCart } from './marketTypes'

export interface ICopilotExample {
  imageSrc: string
  text: string
}

export enum CopilotWaitlistStatus {
  INACTIVE = 'inactive',
  WAITLIST = 'waitlist',
  ACTIVE = 'active',
}

export enum ChatResponseTag {
  SESSION_ID = 'session_id',
  TEXT = 'text',
  TEXT_FROM_VOSS = 'text_from_voss',
  TEXT_STREAM = 'text_stream',
  TEXT_STREAM_END = 'text_stream_end',
  FOLLOW_UP_MESSAGES = 'contextual_questions',
  ITERATION_END = 'iteration_end',
  DEBUG = 'debug',
  PROGRESS = 'progress',
  PRODUCT_LIST = 'product_list',
  MESSAGE_ID = 'message_id',
  AUTO_COMPLETION = 'auto-completion',
  CART = 'cart',
  EXACT_MATCH_HISTORY = 'exact-match-history',
}

export enum CartActionType {
  CREATE_SHOPPING_CART = 'create_shopping_cart',
  ADD_SHOPPING_CART_LINE_ITEM = 'add_shopping_cart_line_item',
  UPDATE_SHOPPING_CART_LINE_ITEM = 'update_shopping_cart_line_item',
  DELETE_SHOPPING_CART_LINE_ITEM = 'delete_shopping_cart_line_item',
  ADD_SHOPPING_CART_PROMOTIONS = 'add_shopping_cart_promotions',
  DELETE_SHOPPING_CART_PROMOTIONS = 'delete_shopping_cart_promotions',
}

export interface ICartResponse {
  action: CartActionType
  cart: IShoppingCart
}

export interface IChatProductList {
  query: string
  searchId: string
  wines: any[]
}

type BaseChatResponse = {
  animate?: boolean
  id?: string // used for livekit messages
}

type ChatResponseWithBase<T> = T & BaseChatResponse

export type ChatResponse =
  | ChatResponseWithBase<{
      tag: Exclude<
        ChatResponseTag,
        | ChatResponseTag.PRODUCT_LIST
        | ChatResponseTag.FOLLOW_UP_MESSAGES
        | ChatResponseTag.MESSAGE_ID
        | ChatResponseTag.PROGRESS
        | ChatResponseTag.CART
        | ChatResponseTag.EXACT_MATCH_HISTORY
      >
      content: string
    }>
  | ChatResponseWithBase<{
      tag: ChatResponseTag.PRODUCT_LIST
      content: IChatProductList
    }>
  | ChatResponseWithBase<{
      tag: ChatResponseTag.PROGRESS
      content: string
      isFirstMessage: boolean
      isLastMessage: boolean
    }>
  | ChatResponseWithBase<{
      tag: ChatResponseTag.CART
      content: string // JSON string of ICartResponse or error message
    }>
  | ChatResponseWithBase<{
      tag: ChatResponseTag.FOLLOW_UP_MESSAGES
      content: string[]
    }>
  | ChatResponseWithBase<{
      tag: ChatResponseTag.MESSAGE_ID
      content: number
    }>
  | ChatResponseWithBase<{
      tag: ChatResponseTag.EXACT_MATCH_HISTORY
      content: string[]
    }>

export enum MessageType {
  SENT = 'sent',
  RECEIVED = 'received',
}

export interface ISendMessageInfo {
  tag: SendMessageType
  content: string
  id?: string // used for livekit messages
}

export type MessageInfo =
  | {
      type: MessageType.SENT
      time?: number
      info: ISendMessageInfo
    }
  | {
      type: MessageType.RECEIVED
      time?: number
      info: ChatResponse
    }

export type GroupedMessageInfo =
  | {
      type: MessageType.SENT
      time?: number
      isTracked?: boolean
      messages: ISendMessageInfo[] // There will be only one item in the array
    }
  | {
      type: MessageType.RECEIVED
      time?: number
      isTracked?: boolean
      messages: ChatResponse[]
    }

export enum SendMessageType {
  USER_MESSAGE = 'user-message',
  COMMAND = 'command', // currently only support "/stop"
  CONTEXT = 'context',
  IMAGE = 'image', // image url or base64 encoded image
  PROMPT = 'prompt', // prompt message for developer
  QUERY = 'query', // query message for chat beginning
  AUTO_COMPLETION = 'auto-completion',
  EXACT_MATCH = 'exact-match',
  EXACT_MATCH_HISTORY = 'exact-match-history',
}

export enum CopilotCommand {
  STOP_CONVERSATION = 'stop',
}

/**
 * This type is used for chat server so can't be normalized
 */
export interface IFollowUpQuery {
  query: string
  wine_count: number
}

export type IVoiceConnectionDetails = {
  serverUrl: string
  roomName: string
  participantName: string
  participantToken: string
}

export enum CopilotMode {
  Chat = 'chat',
  Voice = 'voice',
}
