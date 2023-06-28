import { css, styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'
import EditIcon from '@mui/icons-material/Edit'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import {
  Card,
  CardActionArea,
  CardContent,
  Tooltip,
  Typography,
} from '@mui/material'

import {
  orange,
  red,
  brown,
  deepPurple,
  purple,
  indigo,
} from '@mui/material/colors'
import { AvatarImageProps, styleProps } from '../@types'
import { Form, Formik } from 'formik'
import Link from 'next/link'

const colorsList = [
  red[500],
  brown[500],
  purple[500],
  orange[500],
  indigo[500],
  deepPurple[500],
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
const MainContainer = styled(Container)({
  gap: 20,
  flexDirection: 'column',
  maxWidth: '100% !important',
  padding: '20px 24px !important',
  '@media (max-width: 430px)': {
    padding: '10px 8px !important',
  },
})
const ContainerCardComponent = styled(Container)({
  gap: 20,
  display: 'flex',
  flexWrap: 'wrap',
  maxHeight: '90vh',
  overflowY: 'auto',
  justifyContent: 'center',
  maxWidth: '100% !important',
  padding: '10px 20px !important',

  '&::-webkit-scrollbar': {
    width: 8,
    height: 8,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 10,
    background: '#a8a8a8',
  },
  '@media (max-width: 430px)': {
    maxHeight: '100vh',
    padding: '10px 0px !important',
  },
})
const CardComponent = styled(Card)<styleProps>`
  width: 100%;
  max-width: 250px;
  min-height: 308px;
  cursor: pointer;
  background-color: rgb(41, 35, 61);
  ${(props) =>
    props.larger &&
    css`
      max-width: 320px;
    `};
  ${(props) =>
    props.segundary &&
    css`
      cursor: initial;
      border: none;
    `};
`
const LinkComponent = styled(Link)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  flexDirection: 'column',
})
const CardContentComponent = styled(CardContent)`
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  form {
    width: 100%;
    margin-top: 30px;
    overflow-y: auto;
    max-height: 235px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #a8a8a8;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #4b5b68;
    }
  }
  .MuiInputBase-input {
    color: #fff;
    font-size: 12px;
    padding: 7px 10px;
    &:-placeholder {
      color: #fff;
    }
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #29233d inset !important;
    -webkit-text-fill-color: #ffffff !important;
  }
`
const BoxComponent = styled(Box)<styleProps>`
  width: 60px;
  height: 60px;
  padding: 4px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  ${(props) =>
    props.segundary &&
    css`
      width: 130px;
      border: none;
      height: 130px;
      flex-direction: column;
    `};
`
const Title = styled(Typography)({
  color: '#fff',
  fontWeight: 700,
  margin: '5px 0',
  fontSize: '2rem',
})
const Text = styled(Typography)({
  width: '100%',
  fontWeight: 500,
  marginTop: '10px',
  fontSize: '1.4rem',
  color: '#9996a3',
})
const TextErro = styled(Text)({
  color: 'red',
  fontWeight: 500,
  marginTop: '-3px',
  fontSize: '1.2rem',
})
const TooltipComponent = styled(Tooltip)<styleProps>`
  top: 3px;
  right: 3px;
  font-size: 2rem;
  position: absolute;

  ${(props) =>
    props.left === 'true' &&
    css`
      left: 3px;
      right: auto;
    `};
`
const TooltipLeftComponent = styled(TooltipComponent)`
  left: 3px;
  right: auto;
`
const TooltipCenterComponent = styled(Tooltip)({
  display: 'flex',
  fontSize: '2rem',
  justifyContent: 'center',
})
const EditIconComponent = styled(EditIcon)({
  fontSize: '2rem',
  color: '#9996a3',
})
const CloseIconComponent = styled(CloseIcon)({
  fontSize: '2rem',
  color: '#9996a3',
})
const DeleteIconComponent = styled(DeleteIcon)({
  fontSize: '2rem',
  color: '#9996a3',
})
const AddIconComponent = styled(AddCircleIcon)({
  fontSize: '8rem',
  color: '#9996a3',
})
const AvatarImage = ({ colorIndex, children }: AvatarImageProps) => {
  return <StyledAvatar colorindex={colorIndex}>{children}</StyledAvatar>
}
const ContainerInput = styled(Container)<styleProps>`
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
const CardActionAreaComponent = styled(CardActionArea)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
const FormikComponent = styled(Formik)({})
const FormComponent = styled(Form)({})
const Footer = styled(Container)({
  width: '100%',
  marginTop: 20,
  display: 'flex',
  flex: '1 1 100px',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0px !important',
  maxWidth: '100% !important',
  justifyContent: 'space-between',
})
const ContainerIcon = styled(Container)({
  gap: 5,
  display: 'flex',
  alignItems: 'center',
  padding: '0px !important',
  justifyContent: 'space-between',
  h5: {
    marginTop: '0',
  },
})
const ContainerText = styled(Container)({
  gap: 5,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '0px !important',
  justifyContent: 'space-between',
})
const Icon = styled(Avatar)`
  max-width: 40px;
  border-radius: 0px;
`
export {
  Text,
  Icon,
  Title,
  Footer,
  TextErro,
  AvatarImage,
  BoxComponent,
  FormComponent,
  ContainerIcon,
  ContainerText,
  MainContainer,
  CardComponent,
  LinkComponent,
  ContainerInput,
  FormikComponent,
  AddIconComponent,
  TooltipComponent,
  EditIconComponent,
  CloseIconComponent,
  DeleteIconComponent,
  CardContentComponent,
  TooltipLeftComponent,
  TooltipCenterComponent,
  ContainerCardComponent,
  CardActionAreaComponent,
}
