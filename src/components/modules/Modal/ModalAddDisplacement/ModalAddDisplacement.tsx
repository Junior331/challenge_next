/* eslint-disable react-hooks/exhaustive-deps */
import {
  ReactElement,
  Ref,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Slide } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { TransitionProps } from '@mui/material/transitions'
import { FormikErrors, FormikValues } from 'formik'
import * as S from '../ModalStyled'
import { ModalType } from '../../@types'
import {
  getClients,
  getDisplacements,
  getDrivers,
  postDisplacement,
} from '@/services/service'
import { MessageContext } from '@/state/modalMessage/state'
import { Actions } from '@/state/modalMessage/@types/actions'
import { DateTimePickerComponent, Input } from '@/components/elements'
import { hasError } from '@/utils/utils'
import { displacementSchema } from '@/validations/displacementSchema'
import { PostDisplacementType } from '@/pages/@types'
import { SelectComponent } from '@/components/elements/Select'
import { optionProps } from '@/components/elements/Select/@types'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const ModalAddDisplacement = ({
  isOpen = false,
  handleClose = () => {},
  updateState = () => {},
}: ModalType) => {
  const [open] = useState(isOpen)
  const [displacements, setDisplacements] = useState<optionProps[]>([])
  const [drivers, setDrivers] = useState<optionProps[]>([])
  const [clients, setClients] = useState<optionProps[]>([])

  const { dispatch } = useContext(MessageContext)
  const closeModal = () => {
    handleClose(!open)
  }
  const handleMessage = (message = '', type = '', open = false) => {
    dispatch({
      type: Actions.SET_MESSAGE,
      payload: {
        open,
        type,
        message,
      },
    })
  }

  const handlePost = async (values: FormikValues) => {
    const displacementData: PostDisplacementType = {
      motivo: values.motivo,
      inicioDeslocamento: values.inicioDeslocamento,
      checkList: values.checkList,
      observacao: values.observacao,
      idVeiculo: parseFloat(values.idVeiculo),
      idCliente: parseFloat(values.idCliente),
      kmInicial: parseFloat(values.kmInicial),
      idCondutor: parseFloat(values.idCondutor),
    }

    try {
      await postDisplacement(displacementData)
      closeModal()
      updateState(true)
      handleMessage('Displacement successfully registered', 'success', true)
    } catch (error) {
      closeModal()
      updateState(true)
      handleMessage('Registration failed, try again later', 'error', true)
    }
  }
  const handleDate = async (
    values: Date | null,
    setFieldValue: (
      field: string,
      value: any,
      shouldValidate?: boolean | undefined,
    ) => Promise<void | FormikErrors<FormikValues>>,
  ) => {
    const originalDate = new Date(values?.toString() || '')
    const formattedDate = originalDate.toISOString()
    setFieldValue('inicioDeslocamento', formattedDate)
  }

  const getDisplacement = async () => {
    try {
      const result = await getDisplacements()
      const newList = result.map((item) => {
        return {
          id: item.id,
          name: item.id.toString(),
        }
      })
      setDisplacements(newList)
    } catch (error) {
      // setLoading(false)
    }
  }
  const getDriver = async () => {
    try {
      const result = await getDrivers()
      const newList = result.map((item) => {
        return {
          id: item.id,
          name: item.id.toString(),
        }
      })
      setDrivers(newList)
    } catch (error: any) {
      handleMessage(error.response.data, 'error', true)
    }
  }

  const getClient = async () => {
    try {
      const result = await getClients()
      const newList = result.map((item) => {
        return {
          id: item.id,
          name: item.id.toString(),
        }
      })
      setClients(newList)
    } catch (error: any) {
      handleMessage(error.response.data, 'error', true)
    }
  }
  useEffect(() => {
    getDriver()
    getClient()
    getDisplacement()
  }, [])

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
              motivo: '',
              idVeiculo: '',
              idCliente: '',
              checkList: '',
              kmInicial: '',
              observacao: '',
              idCondutor: '',
              inicioDeslocamento: '',
            }}
            onSubmit={handlePost}
            validationSchema={displacementSchema}
          >
            {({ handleBlur, errors, touched, setFieldValue }) => (
              <S.FormComponent>
                <Input
                  nome="motivo"
                  placeholder="Motivo"
                  onBlur={handleBlur}
                  helpText={errors?.motivo as string}
                  error={hasError(errors, touched, 'motivo')}
                />
                <SelectComponent
                  list={displacements}
                  Placeholder={'Car ID'}
                  helpText={errors?.idVeiculo as string}
                  error={hasError(errors, touched, 'idVeiculo')}
                  handleSelect={(value) => setFieldValue('idVeiculo', value)}
                />
                <Input
                  onBlur={handleBlur}
                  nome="checkList"
                  placeholder="CheckList"
                  helpText={errors?.checkList as string}
                  error={hasError(errors, touched, 'checkList')}
                />
                <Input
                  onBlur={handleBlur}
                  nome="kmInicial"
                  placeholder="Start KM"
                  helpText={errors?.kmInicial as string}
                  error={hasError(errors, touched, 'kmInicial')}
                />
                <SelectComponent
                  list={drivers}
                  Placeholder={'Driver ID'}
                  helpText={errors?.idCondutor as string}
                  error={hasError(errors, touched, 'idCondutor')}
                  handleSelect={(value) => setFieldValue('idCondutor', value)}
                />
                <Input
                  onBlur={handleBlur}
                  nome="observacao"
                  placeholder="Observation"
                  helpText={errors?.observacao as string}
                  error={hasError(errors, touched, 'observacao')}
                />
                <SelectComponent
                  list={clients}
                  Placeholder={'Client ID'}
                  helpText={errors?.idCliente as string}
                  error={hasError(errors, touched, 'idCliente')}
                  handleSelect={(value) => setFieldValue('idCliente', value)}
                />
                <DateTimePickerComponent
                  handleDate={(e) => handleDate(e, setFieldValue)}
                  placeholder={'Start displacement'}
                  helpText={errors?.inicioDeslocamento as string}
                  error={hasError(errors, touched, 'inicioDeslocamento')}
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

export default ModalAddDisplacement
