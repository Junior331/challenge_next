import { DefaultTheme } from 'styled-components'

const Theme: DefaultTheme = {
  palette: {
    color: {
      red: '#e8236e',
      black: '#121022',
      light: '#ffffff',
      gray: {
        dark: '',
        light: '#9996a3',
        medium: '#797979',
        regular: '#868391',
        default: '',
      },
      white: {
        dark: '',
        light: '#f3f5fb',
        medium: '#d7e1f3',
        regular: '#bdc9e1',
        default: '#ffff',
      },
      blue: {
        dark: '#1d1531',
        light: '#5472a1',
        medium: '#3e3758',
        regular: '#455898',
        default: '#5a58ff',
      },
      default: '',
      regular: '#5cc36e',
      disable: '',
    },

    background: {
      light: '#ffffff',
      medium: '#29233d',
      default: '#1d1531',
      regular: '',
      disable: '',
    },
    error: {
      default: '#d32f2f',
    },
    success: {
      default: '#6EBA19',
    },
    warning: {
      default: '#121A3D',
    },
  },
  typography: {
    fontSize: '1.6',
    fontSizeBold: '3.5',
    fontSizeLight: '1.2',
    fontWeightBold: '700',
    fontSizeRegular: '2.2',
    htmlFontSize: '10px',
    fontWeightLight: '400',
    fontWeightBolder: ' 900',
    fontWeightRegular: '500',
  },
}

export default Theme
