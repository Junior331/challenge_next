import { AlertColor } from '@mui/material'
import { ReactElement } from 'react'

export type State = {
  modal: {
    open: boolean
    message: string
    type: AlertColor
  }
}

export type MessageProviderType = {
  children: ReactElement | ReactElement[]
}
