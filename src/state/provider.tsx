import React from 'react'
import MenuProvider from './menu/state'

type ProviderType = {
  children: React.ReactElement | React.ReactElement[]
}

const Provider: React.FC<ProviderType> = ({ children }) => {
  return <MenuProvider>{children}</MenuProvider>
}

export default Provider
