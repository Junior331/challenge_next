/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useMemo, useReducer } from 'react'
import { getMenuSelected } from '@/services/sessionStorage'
import { MenuProviderType } from './@types'
import menuReducer from './reducer'

const initialState: any = {
  menu: {
    open: false,
    selected: getMenuSelected(),
  },
}

export const MenuContext = createContext(initialState)

const MenuProvider: React.FC<MenuProviderType> = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, initialState)
  const provider = useMemo(() => ({ state, dispatch }), [state, dispatch])

  return (
    <MenuContext.Provider value={provider}>{children}</MenuContext.Provider>
  )
}

export default MenuProvider
