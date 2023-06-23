import { ReactElement, Ref, forwardRef, useContext, useState } from 'react'
import { Slide } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { TransitionProps } from '@mui/material/transitions'
import { FormikValues } from 'formik'
import * as S from './ModalAddDriveStyled'
import { ModalType } from '../@types'
import { postDriver } from '@/services/service'
import { MessageContext } from '@/state/modalMessage/state'
import { Actions } from '@/state/modalMessage/@types/actions'
import { DateTimePickerComponent, Input } from '@/components/elements'
import { hasError } from '@/utils/utils'
import { driverSchema } from '@/validations/driverSchema'
import { PostDriverType } from '@/pages/@types'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalAddDriver = ({
  isOpen = false,
  handleClose = () => {},
  updateState = () => {},
}: ModalType) => {
  const [open] = useState(isOpen)

  const [date, setDate] = useState<string>(new Date().toISOString())
  const { dispatch } = useContext(MessageContext)
  const closeModal = () => {
    handleClose(!open)
  }

  const handlePost = async (values: FormikValues) => {
    const driverData: PostDriverType = {
      nome: values.nome,
      numeroHabilitacao: values.numeroHabilitacao,
      categoriaHabilitacao: values.categoriaHabilitacao,
      vencimentoHabilitacao: date,
    }

    try {
      await postDriver(driverData)
      closeModal()
      updateState(true)
      dispatch({
        type: Actions.SET_MESSAGE,
        payload: {
          open: true,
          type: 'success',
          message: 'Driver successfully registered',
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
  const handleDate = async (values: Date | null) => {
    const originalDate = new Date(values?.toString() || '')
    const formattedDate = originalDate.toISOString()
    setDate(formattedDate)
  }

  return (
    <S.DialogComponent
      keepMounted
      open={isOpen}
      onClose={closeModal}
      TransitionComponent={Transition}
      aria-describedby="alert-dialog-slide-description"
    >
      <S.CardComponent>
        <S.CardContentComponent>
          <S.FormikComponent
            initialValues={{
              nome: '',
              numeroHabilitacao: '',
              categoriaHabilitacao: '',
              vencimentoHabilitacao: date,
            }}
            onSubmit={handlePost}
            validationSchema={driverSchema}
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
                  onBlur={handleBlur}
                  nome="numeroHabilitacao"
                  helpText={errors?.uf as string}
                  placeholder="Numero da Habilitação"
                  error={hasError(errors, touched, 'numeroHabilitacao')}
                />
                <Input
                  onBlur={handleBlur}
                  nome="categoriaHabilitacao"
                  helpText={errors?.uf as string}
                  placeholder="Categoria da Habilitação"
                  error={hasError(errors, touched, 'categoriaHabilitacao')}
                />
                <DateTimePickerComponent
                  handleDate={handleDate}
                  placeholder={'Vencimento da Habilitação'}
                />
                <LoadingButton
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

export default ModalAddDriver
