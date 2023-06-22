import React from 'react'
import MenuProvider from './menu/state'
import MessageProvider from './modalMessage/state'

type ProviderType = {
  children: React.ReactElement | React.ReactElement[]
}

const Provider: React.FC<ProviderType> = ({ children }) => {
  return (
    <MessageProvider>
      <MenuProvider>{children}</MenuProvider>
    </MessageProvider>
  )
}

export default Provider
