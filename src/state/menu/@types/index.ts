import { ReactElement } from 'react'

export type State = {
  menu: {
    open: boolean
    current: string
  }
}

export type MenuProviderType = {
  children: ReactElement | ReactElement[]
}
