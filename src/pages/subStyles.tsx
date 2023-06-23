import { css, styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Card, CardActionArea, Tooltip, Typography } from '@mui/material'

import {
  orange,
  red,
  brown,
  deepPurple,
  purple,
  indigo,
} from '@mui/material/colors'
import { AvatarImageProps } from './@types'
import { Form, Formik } from 'formik'
import { LoadingButton } from '@mui/lab'
import Link from 'next/link'

const colorsList = [
  orange[500],
  red[500],
  brown[500],
  deepPurple[500],
  purple[500],
  indigo[500],
]

const StyledAvatar = styled(Avatar)(
  ({ colorindex }: { colorindex: number }) => ({
    width: '100%',
    height: '100%',
    fontWeight: 800,
    fontSize: '2.0rem',
    backgroundColor: colorsList[colorindex % colorsList.length],
  }),
)
export const MainContainer = styled(Container)({
  gap: 20,
  display: 'flex',
  position: 'relative',
  maxWidth: '100% !important',
  padding: '40px 30px !important',
  '> &::last-child': {
    background: '#a8a8a8',
    maxWidth: '101% !important',
  },
})
export const Content = styled(Container)({
  gap: 10,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0px !important',
  maxWidth: '100% !important',
})
export const CardComponent = styled(Card)({
  width: '100%',
  minHeight: 308,
  padding: '20px',
  backgroundColor: 'rgb(41, 35, 61)',
})
export const CardCenterComponent = styled(CardComponent)({
  maxWidth: 250,
  display: 'flex',
  padding: '20px 10px',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
})
export const BoxComponent = styled(Box)(({ theme }) => ({
  width: 100,
  padding: 4,
  height: 100,
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.palette.common.white}`,
}))
export const Title = styled(Typography)({
  color: '#fff',
  fontWeight: 700,
  margin: '5px 0',
  fontSize: '2rem',
})
export const Text = styled(Typography)({
  width: '100%',
  fontWeight: 500,
  marginTop: '10px',
  fontSize: '1.4rem',
  color: '#9996a3',
})
export const TextErro = styled(Text)({
  color: 'red',
  fontWeight: 500,
  marginTop: '-3px',
  fontSize: '1.2rem',
})
export const TooltipComponent = styled(Tooltip)`
  font-size: 2rem;
`
export const ChevronLeftIconComponent = styled(ChevronLeftIcon)({
  fontSize: '3rem',
  color: '#fff',
})
export const AvatarImage = ({ colorIndex, children }: AvatarImageProps) => {
  return <StyledAvatar colorindex={colorIndex}>{children}</StyledAvatar>
}
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
export const CardActionAreaComponent = styled(CardActionArea)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export const FormikComponent = styled(Formik)({})
export const ContainerInfo = styled(Container)({
  margin: 0,
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0px !important',
  maxWidth: '100% !important',
  justifyContent: 'space-between',
})
export const Info = styled(Container)({
  margin: 0,
  width: '100%',
  textAlign: 'start',
  padding: '0px !important',
  maxWidth: '210px !important',
})
export const FormComponent = styled(Form)<{ isEdit?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: ${({ isEdit }) => (isEdit ? '15px' : '55px')};
`
export const ButtonBack = styled(Link)({
  top: '0px',
  left: '0px',
  position: 'absolute',
})
export const ContainerButtons = styled(Container)({
  gap: 10,
  display: 'flex',
  alignItems: 'center',
  padding: '0px !important',
  justifyContent: 'space-between',
})
export const LoadingButtonComponent = styled(LoadingButton)({
  width: '100%',
  height: '35px',
  maxWidth: '120px',
  fontSize: '12px',
})
