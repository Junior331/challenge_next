import { css, styled } from '@mui/material/styles'
import { Card, CardContent, Dialog, Container, Typography } from '@mui/material'

export const CardComponent = styled(Card)({
  width: '100%',
  maxWidth: 250,
  minHeight: 308,
  backgroundColor: 'rgb(41, 35, 61)',
})
export const DialogComponent = styled(Dialog)`
  width: 100%;
  .MuiDialog-container {
    .MuiPaper-root {
      width: 100%;
      max-width: 700px !important;
    }
    > .MuiPaper-root {
      background-color: transparent;
    }
  }
  form {
    width: 100%;
    .MuiInputBase-root {
      color: #fff;
      font-size: 14px;
      border-radius: 5px;

      &::-placeholder {
        color: #fff;
      }
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #29233d inset !important;
      -webkit-text-fill-color: #ffffff !important;
    }
  }
`
export const CardContentComponent = styled(CardContent)({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  flexDirection: 'column',
  justifyContent: 'center',
})
export const Title = styled(Typography)({
  color: '#fff',
  fontWeight: 700,
  margin: '5px 0',
  fontSize: '2rem',
})
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
`
