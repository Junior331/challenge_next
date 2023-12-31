import { styled } from '@mui/material/styles'
import { Card, CardContent, Dialog } from '@mui/material'
import { Formik, Form } from 'formik'

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
  .MuiContainer-root {
    margin-bottom: 25px;
    input {
      color: #fff;
      font-size: 12px;
      padding: 12px 14px;
      &:-placeholder {
        color: #fff;
      }
    }
    label {
      font-size: 12px;
      margin-top: -5px;
      color: #9996a3;
      transition: none;
    }
    label.Mui-focused,
    .MuiInputLabel-shrink {
      display: none;
    }

    label.Mui-focused,
    legend {
      display: none;
      transition: none;
    }
    .MuiSvgIcon-root {
      fill: #a69fbb;
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
export const FormikComponent = styled(Formik)({})
export const FormComponent = styled(Form)({})
