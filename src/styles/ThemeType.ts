import 'styled-components'
import { ColorType, TypographyType } from './interfaces'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      color: ColorType
      background: ColorType
      error: ColorType
      success?: ColorType
      warning?: ColorType
    }
    typography: TypographyType
  }
}
