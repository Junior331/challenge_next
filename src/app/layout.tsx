'use client'

import { SideBar } from '@/components/modules/SideBar'
import Provider from '@/state/provider'
import Theme from '@/styles/Theme'
import { GlobalStyles } from '@/styles/globalStyled'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import * as S from './styled'

export const metadata = {
  title: 'Displacement Application',
  description: 'Challenge next',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={Theme}>
          <Provider>
            <S.LayoutContainer>
              <GlobalStyles />
              <SideBar />
              <S.LayoutContent>{children}</S.LayoutContent>
            </S.LayoutContainer>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
