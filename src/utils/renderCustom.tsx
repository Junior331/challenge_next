import { JSX } from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Theme from '@/styles/Theme'

export const renderCustom = (Element: JSX.Element) => {
  render(<ThemeProvider theme={Theme}>{Element}</ThemeProvider>)
}
