import { ReactElement, Ref, forwardRef, useContext, useState } from 'react'
import { Slide } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { TransitionProps } from '@mui/material/transitions'
import { FormikValues } from 'formik'
import { clientSchema } from '@/pages/Clients/clientSchema'
import * as S from './ModalAddClientStyled'
import { ModalAddClientType } from './@types'
import { postClients } from '@/services/service'
import { PostClientType } from '@/pages/@types'
import { MessageContext } from '@/state/modalMessage/state'
import { Actions } from '@/state/modalMessage/@types/actions'
import { Input } from '@/components/elements'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalAddClient = ({
  isOpen = false,
  handleClose = () => {},
  updateState = () => {},
}: ModalAddClientType) => {
  const [open] = useState(isOpen)
  const { dispatch } = useContext(MessageContext)

  const closeModal = () => {
    handleClose(!open)
  }

  const handlePost = async (values: FormikValues) => {
    const clientData: PostClientType = {
      uf: values.uf,
      nome: values.nome,
      numero: values.numero,
      bairro: values.bairro,
      cidade: values.cidade,
      logradouro: values.logradouro,
      tipoDocumento: values.tipoDocumento,
      numeroDocumento: values.numeroDocumento,
    }
    try {
      await postClients(clientData)
      closeModal()
      updateState(true)
      dispatch({
        type: Actions.SET_MESSAGE,
        payload: {
          open: true,
          type: 'success',
          message: 'Client successfully registered',
        },
      })
    } catch (error) {
      console.error('Erro ao enviar a solicitação DELETE:', error)
      closeModal()
      updateState(true)
      dispatch({
        type: Actions.SET_MESSAGE,
        payload: {
          open: true,
          type: 'error',
          message: 'Registration failed, try again later',
        },
      })
    }
  }

  return (
    <S.DialogComponent
      open={isOpen}
      keepMounted
      onClose={closeModal}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
    >
      <S.CardComponent>
        <S.CardContentComponent>
          <S.FormikComponent
            initialValues={{
              uf: '',
              nome: '',
              numero: '',
              bairro: '',
              cidade: '',
              logradouro: '',
              tipoDocumento: '',
              numeroDocumento: '',
            }}
            onSubmit={handlePost}
            validationSchema={clientSchema}
          >
            <S.FormComponent>
              <Input nome="nome" placeholder="Nome" />
              <Input nome="tipoDocumento" placeholder="Tipo do documento" />
              <Input nome="numeroDocumento" placeholder="Numero do documento" />
              <Input nome="logradouro" placeholder="Logradouro" />
              <Input nome="numero" placeholder="Numero" />
              <Input nome="bairro" placeholder="Bairro" />
              <Input nome="cidade" placeholder="Cidade" />
              <Input nome="uf" placeholder="UF" />
              <LoadingButton
                type="submit"
                variant="contained"
                loadingPosition="start"
              >
                Save
              </LoadingButton>
            </S.FormComponent>
          </S.FormikComponent>
        </S.CardContentComponent>
      </S.CardComponent>
    </S.DialogComponent>
  )
}

export default ModalAddClient
