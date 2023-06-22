import { Snackbar } from '@mui/material'
import { MessageContext } from '@/state/modalMessage/state'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { forwardRef, useContext } from 'react'
import * as S from './ModalMessageStyled'
import { Actions } from '@/state/modalMessage/@types/actions'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const ModalMessage = () => {
  const { state, dispatch } = useContext(MessageContext)

  const handleClose = () => {
    dispatch({
      type: Actions.SET_MESSAGE,
      payload: {
        open: false,
      },
    })
  }

  console.log({ state })
  return (
    <S.StackComponent spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={state.modal.open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity={state.modal.type} sx={{ width: '100%' }}>
          {state.modal.message}
        </Alert>
      </Snackbar>
    </S.StackComponent>
  )
}

export default ModalMessage
