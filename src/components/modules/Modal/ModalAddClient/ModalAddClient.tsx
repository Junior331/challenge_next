import { ReactElement, Ref, forwardRef, useContext, useState } from 'react'
import { Slide } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { TransitionProps } from '@mui/material/transitions'
import { FormikValues } from 'formik'
import * as S from '../ModalStyled'
import { ModalType } from '../../@types'
import { postClients } from '@/services/service'
import { PostClientType } from '@/pages/@types'
import { MessageContext } from '@/state/modalMessage/state'
import { Actions } from '@/state/modalMessage/@types/actions'
import { Input } from '@/components/elements'
import { hasError } from '@/utils/utils'
import { clientSchema } from '@/validations/clientSchema'

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
}: ModalType) => {
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
            {({ handleBlur, errors, touched }) => (
              <S.FormComponent>
                <Input
                  nome="nome"
                  placeholder="Nome"
                  onBlur={handleBlur}
                  helpText={errors?.uf as string}
                  error={hasError(errors, touched, 'nome')}
                />
                <Input
                  nome="tipoDocumento"
                  onBlur={handleBlur}
                  placeholder="Tipo do documento"
                  helpText={errors?.uf as string}
                  error={hasError(errors, touched, 'tipoDocumento')}
                />
                <Input
                  onBlur={handleBlur}
                  nome="numeroDocumento"
                  helpText={errors?.uf as string}
                  placeholder="Numero do documento"
                  error={hasError(errors, touched, 'numeroDocumento')}
                />
                <Input
                  nome="logradouro"
                  onBlur={handleBlur}
                  placeholder="Logradouro"
                  helpText={errors?.uf as string}
                  error={hasError(errors, touched, 'logradouro')}
                />
                <Input
                  nome="numero"
                  onBlur={handleBlur}
                  placeholder="Numero"
                  helpText={errors?.uf as string}
                  error={hasError(errors, touched, 'numero')}
                />
                <Input
                  nome="bairro"
                  onBlur={handleBlur}
                  placeholder="Bairro"
                  helpText={errors?.uf as string}
                  error={hasError(errors, touched, 'bairro')}
                />
                <Input
                  nome="cidade"
                  onBlur={handleBlur}
                  placeholder="Cidade"
                  helpText={errors?.uf as string}
                  error={hasError(errors, touched, 'cidade')}
                />
                <Input
                  nome="uf"
                  onBlur={handleBlur}
                  placeholder="UF"
                  helpText={errors?.uf as string}
                  error={hasError(errors, touched, 'uf')}
                />
                <LoadingButton
                  startIcon
                  type="submit"
                  variant="contained"
                  loadingPosition="start"
                >
                  Save
                </LoadingButton>
              </S.FormComponent>
            )}
          </S.FormikComponent>
        </S.CardContentComponent>
      </S.CardComponent>
    </S.DialogComponent>
  )
}

export default ModalAddClient
