'use client'

import { createContext } from 'react'
// import * as S from "./styled";
// import { GlobalStyles } from "@/styles/globalStyled";
import { LayoutProps } from './@types'

export const ThemeContext = createContext('')

export default function ThemeProvider({ children }: LayoutProps) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
}
