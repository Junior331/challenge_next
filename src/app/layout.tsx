/* eslint-disable @next/next/no-page-custom-font */
'use client'

import { SideBar } from '@/components/modules/SideBar'
import Provider from '@/state/provider'
import Theme from '@/styles/Theme'
import { GlobalStyles } from '@/styles/globalStyled'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import * as S from './styled'
import { ModalMessage } from '@/components/modules'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Displacement Application</title>
      </head>
      <body>
        <ThemeProvider theme={Theme}>
          <Provider>
            <S.LayoutContainer>
              <GlobalStyles />
              <SideBar />
              <ModalMessage />
              <S.LayoutContent>{children}</S.LayoutContent>
            </S.LayoutContainer>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
