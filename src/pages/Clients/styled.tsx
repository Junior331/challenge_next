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
import { AvatarImageProps } from '../@types'

const colorsList = [
  orange[500],
  red[500],
  brown[500],
  deepPurple[500],
  purple[500],
  indigo[500],
]

const StyledAvatar = styled(Avatar)(
  ({ colorIndex }: { colorIndex: number }) => ({
    width: '100%',
    height: '100%',
    fontWeight: 800,
    fontSize: '2.0rem',
    backgroundColor: colorsList[colorIndex % colorsList.length],
  }),
)
export const ClientsContainer = styled(Container)({
  gap: 20,
  flexDirection: 'column',
  maxWidth: '100% !important',
  padding: '20px 24px !important',
})
export const ContainerCardComponent = styled(Container)({
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
})
export const CardComponent = styled(Card)({
  width: '100%',
  maxWidth: 250,
  minHeight: 308,
  backgroundColor: 'rgb(41, 35, 61)',
})
export const CardContentComponent = styled(CardContent)`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  justify-content: center;
  form {
    width: 100%;
    margin-top: 30px;
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
export const BoxComponent = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  padding: 4,
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
export const TooltipComponent = styled(Tooltip)<{ left?: boolean }>`
  top: 3px;
  right: 3px;
  font-size: 2rem;
  position: absolute;

  ${(props) =>
    props.left &&
    css`
      left: 3px;
      right: auto;
    `};
`
export const TooltipCenterComponent = styled(Tooltip)({
  display: 'flex',
  fontSize: '2rem',
  justifyContent: 'center',
})
export const EditIconComponent = styled(EditIcon)({
  fontSize: '2rem',
  color: '#9996a3',
})
export const CloseIconComponent = styled(CloseIcon)({
  fontSize: '2rem',
  color: '#9996a3',
})
export const DeleteIconComponent = styled(DeleteIcon)({
  fontSize: '2rem',
  color: '#9996a3',
})
export const AddIconComponent = styled(AddCircleIcon)({
  fontSize: '8rem',
  color: '#9996a3',
})

export const AvatarImage = ({ colorIndex, children }: AvatarImageProps) => {
  return <StyledAvatar colorIndex={colorIndex}>{children}</StyledAvatar>
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
