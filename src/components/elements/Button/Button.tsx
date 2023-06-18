import React from 'react'
import { Props } from './@types'
import * as S from './ButtonStyled'

const Button = ({ onClick, children, disabled = false, ...rest }: Props) => {
  return (
    <S.Button onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </S.Button>
  )
}

export { Button }
