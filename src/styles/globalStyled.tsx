import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif !important;
  }

  html, body{
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.palette.color.black};
    font-size:${({ theme }) => theme.typography.htmlFontSize};
    background-color: ${({ theme }) => theme.palette.background.default};
  }
  
  body {
    width: 100%;
    height: auto;
  }

  .MuiPaper-root {
    background-color: #29233d !important;
    .MuiButtonBase-root, .MuiPickersCalendarHeader-label {
      color: #fff;
    }
    .MuiDayCalendar-header{
      .MuiTypography-root{
        color: #fff;
      }
    }
  }
  .MuiList-root li {
    color: #fff;
  }
`
