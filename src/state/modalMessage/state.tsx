/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useMemo, useReducer } from 'react'
import { MessageProviderType } from './@types'
import messageReducer from './reducer'

const initialState: any = {
  modal: {
    type: '',
    message: '',
    open: false,
  },
}

export const MessageContext = createContext(initialState)

const MessageProvider: React.FC<MessageProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, initialState)
  const provider = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <MessageContext.Provider value={provider}>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageProvider
