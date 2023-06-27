import { ReactElement, Ref, forwardRef, useContext, useState } from 'react'
import { Slide } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { TransitionProps } from '@mui/material/transitions'
import { FormikValues } from 'formik'
import * as S from '../ModalStyled'
import { ModalType } from '../../@types'
import { postCar } from '@/services/service'
import { MessageContext } from '@/state/modalMessage/state'
import { Actions } from '@/state/modalMessage/@types/actions'
import { DateTimePickerComponent, Input } from '@/components/elements'
import { hasError } from '@/utils/utils'
import { carSchema } from '@/validations/carSchema'
import { PostCarType } from '@/pages/@types'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalAddCar = ({
  isOpen = false,
  handleClose = () => {},
  updateState = () => {},
}: ModalType) => {
  const [open] = useState(isOpen)
  const [date, setDate] = useState<number>(new Date().getFullYear())
  const { dispatch } = useContext(MessageContext)
  const closeModal = () => {
    handleClose(!open)
  }

  const handlePost = async (values: FormikValues) => {
    const carData: PostCarType = {
      placa: values.placa,
      anoFabricacao: date,
      kmAtual: values.kmAtual,
      marcaModelo: values.marcaModelo,
    }

    try {
      await postCar(carData)
      closeModal()
      updateState(true)
      dispatch({
        type: Actions.SET_MESSAGE,
        payload: {
          open: true,
          type: 'success',
          message: 'Car successfully registered',
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

  const handleChange = async (values: Date | null) => {
    const originalDate = new Date(values?.toString() || '')
    const formattedDate = originalDate.getFullYear()
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
              placa: '',
              kmAtual: '',
              marcaModelo: '',
              anoFabricacao: date,
            }}
            onSubmit={handlePost}
            validationSchema={carSchema}
          >
            {({ handleBlur, errors, touched }) => (
              <S.FormComponent>
                <Input
                  nome="marcaModelo"
                  placeholder="Model"
                  onBlur={handleBlur}
                  helpText={errors?.marcaModelo as string}
                  error={hasError(errors, touched, 'marcaModelo')}
                />
                <Input
                  onBlur={handleBlur}
                  nome="kmAtual"
                  placeholder="KM"
                  helpText={errors?.kmAtual as string}
                  error={hasError(errors, touched, 'kmAtual')}
                />
                <Input
                  onBlur={handleBlur}
                  nome="placa"
                  placeholder="Place"
                  helpText={errors?.placa as string}
                  error={hasError(errors, touched, 'placa')}
                />
                <DateTimePickerComponent
                  isSecudary
                  handleDate={handleChange}
                  placeholder={'Fabrication'}
                  helpText={errors?.anoFabricacao as string}
                  error={hasError(errors, touched, 'anoFabricacao')}
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

export default ModalAddCar
