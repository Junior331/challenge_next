'use client'
import { GlobalStyles } from '@/styles/globalStyled'
import { LayoutProps } from './@types'
import * as S from './styled'
import { ThemeProvider } from 'styled-components'
import Theme from '@/styles/Theme'

export default function Home({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={Theme}>
      <S.LayoutContainer>
        <GlobalStyles />
        <S.LayoutContent>{children}</S.LayoutContent>
      </S.LayoutContainer>
    </ThemeProvider>
  )
}
