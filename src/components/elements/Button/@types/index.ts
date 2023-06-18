import { MouseEvent, ReactNode, RefObject } from 'react'

export type Props = {
  disabled?: boolean
  gradient?: boolean
  noActive?: boolean
  secondary?: boolean
  children?: ReactNode
  onClick?: (e: MouseEvent) => void
  size: 'small' | 'medium' | 'large'
}

export type StyledButtonProps = Props & {
  ref?: RefObject<HTMLButtonElement>
}
