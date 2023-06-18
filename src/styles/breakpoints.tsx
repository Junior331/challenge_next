import { generateMedia } from 'styled-media-query'

type BreakpointsType = {
  huge: string
  large: string
  medium: string
  small: string
}

export const breakpoints = {
  huge: '1440px',
  large: '1200px',
  medium: '768px',
  small: '430px',
}

const media = generateMedia<BreakpointsType>(breakpoints)

export default media
