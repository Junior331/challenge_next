import { css, styled } from '@mui/material/styles'
import { Container, Typography } from '@mui/material'

export const TextErro = styled(Typography)({
  width: '100%',
  color: 'red',
  fontWeight: 500,
  marginTop: '-3px',
  fontSize: '1.2rem',
})
export const ContainerInput = styled(Container)<{ error?: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
  padding: 0px !important;
  align-items: flex-start;
  max-width: 100% !important;
  justify-content: flex-start;
  .MuiFormControl-root {
    margin: 0;
    width: 100%;
    margin-bottom: 10px;
  }
  ${(props) =>
    props.error &&
    css`
      .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
        color: #d32f2f;
        font-size: 1.4rem;
      }

      .MuiOutlinedInput-notchedOutline {
        font-size: 1.4rem;
        border-color: #d32f2f !important;
      }
      .MuiFormHelperText-root {
        font-size: 1.4rem;
        margin-bottom: 10px;
      }
    `};
  .MuiInputBase-input {
    color: #fff;
    font-size: 12px;
    padding: 13px 10px;
    &:-placeholder {
      color: #fff;
    }
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #29233d inset !important;
    -webkit-text-fill-color: #ffffff !important;
  }
`
