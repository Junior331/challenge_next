import { ReactNode } from 'react'

export type Props = {
  width: string
  height: string
  isColumn?: boolean
  noPadding?: boolean
  children: ReactNode
}
