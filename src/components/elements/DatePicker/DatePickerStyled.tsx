import { styled } from '@mui/material/styles'
import { Typography, Container } from '@mui/material'

export const ContainerComponent = styled(Container)({
  width: '100%',
  marginBottom: '10px',
  padding: '0 !important',
  '> div': {
    width: '100%',
  },
})
export const TextErro = styled(Typography)({
  width: '100%',
  color: 'red',
  fontWeight: 500,
  marginTop: '-3px',
  fontSize: '1.2rem',
})
