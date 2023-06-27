import { css, styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

export const BoxComponent = styled(Box)<{ error?: boolean }>`
  margin-bottom: 20px;
  .MuiSelect-select {
    padding: 12px 14px;
  }
  ${(props) =>
    props.error &&
    css`
      margin-bottom: 5px;
      .MuiFormHelperText-root {
        font-size: 1.4rem;
        margin-bottom: 10px;
      }
      .MuiInputBase-root {
        border-color: #d32f2f !important;
      }
    `};
`
export const TextErro = styled(Typography)({
  width: '100%',
  color: 'red',
  fontWeight: 500,
  marginTop: '5px',
  fontSize: '1.2rem',
})
