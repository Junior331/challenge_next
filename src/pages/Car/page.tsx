/* eslint-disable react-hooks/exhaustive-deps */
import { CarType, PutCarType, paramsProps } from '../../@types'
import * as S from '@/styles/subStyles'
import {
  deleteCars,
  getCar,
  putCars,
  randomIntFromInterval,
} from '@/services/service'
import { useContext, useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import { FormikValues } from 'formik'
import { DateTimePickerComponent, Input } from '@/components/elements'
import { Actions } from '@/state/modalMessage/@types/actions'
import { MessageContext } from '@/state/modalMessage/state'
import { useRouter } from 'next/navigation'
import { hasError } from '@/utils/utils'
import { carSchema } from '@/validations/carSchema'

export const Car = ({ params }: paramsProps) => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(true)
  const [isEdit, setIsEdit] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const { dispatch } = useContext(MessageContext)
  const [date, setDate] = useState<number>(new Date().getFullYear())

  const [carData, setCarData] = useState<CarType>({
    id: 0,
    placa: '',
    kmAtual: 0,
    marcaModelo: '',
    anoFabricacao: 0,
  })

  const getCarData = async () => {
    try {
      const result = await getCar(parseFloat(params.id))
      setCarData(result)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
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
  const handleDelete = async () => {
    try {
      setLoading(true)
      await deleteCars(parseFloat(params.id))
      handleMessage('Car successfully deleted', 'success', true)
      push('/cars')
    } catch (error: any) {
      handleMessage(error.response.data, 'error', true)
    }
  }
  const handlePutCar = async (values: FormikValues) => {
    setIsSave(true)
    const carData: PutCarType = {
      anoFabricacao: date,
      kmAtual: values.kmAtual,
      id: parseFloat(params.id),
      marcaModelo: values.marcaModelo,
    }

    try {
      await putCars(carData)
      setIsSave(false)
      setLoading(true)
      setIsEdit(!isEdit)
      handleMessage('Car successfully updated', 'success', true)
    } catch (error: any) {
      setIsSave(false)
      setIsEdit(!isEdit)
      handleMessage(error.response.data, 'error', true)
    }
  }

  const handleChange = async (values: Date | null) => {
    const originalDate = new Date(values?.toString() || '')
    const formattedDate = originalDate.getFullYear()
    setDate(formattedDate)
  }

  useEffect(() => {
    getCarData()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.CardCenterComponent>
        <S.Content>
          <S.BoxComponent>
            <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
              {carData.marcaModelo.slice(0, 1).toLocaleUpperCase()}
            </S.AvatarImage>
          </S.BoxComponent>
          <S.Title variant="h5">
            {carData.marcaModelo[0]?.toUpperCase() +
              carData.marcaModelo.substring(1)}
          </S.Title>
        </S.Content>
        <S.ContainerButtons>
          <S.LoadingButtonComponent
            startIcon
            type="submit"
            variant="contained"
            loadingPosition="start"
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? 'Cancel' : 'Edit'}
          </S.LoadingButtonComponent>
          <S.LoadingButtonComponent
            startIcon
            type="submit"
            color="error"
            disabled={isEdit}
            variant="contained"
            onClick={handleDelete}
            loadingPosition="start"
          >
            Delete
          </S.LoadingButtonComponent>
        </S.ContainerButtons>
      </S.CardCenterComponent>
      <S.CardComponent>
        <S.FormikComponent
          initialValues={{
            placa: '',
            kmAtual: '',
            id: carData.id,
            marcaModelo: '',
            anoFabricacao: date,
          }}
          validateOnMount
          onSubmit={handlePutCar}
          validationSchema={carSchema}
        >
          {({ handleBlur, errors, touched, isValid }) => (
            <S.FormComponent isEdit={isEdit}>
              <S.ContainerInfo>
                <S.Info>
                  <S.Title variant="h5">Model</S.Title>
                  {isEdit ? (
                    <Input
                      nome="marcaModelo"
                      placeholder="Model"
                      onBlur={handleBlur}
                      helpText={errors?.marcaModelo as string}
                      error={hasError(errors, touched, 'marcaModelo')}
                    />
                  ) : (
                    <S.Text variant="h5">{carData.marcaModelo}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">KM</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="kmAtual"
                      helpText={errors?.kmAtual as string}
                      placeholder="KM"
                      error={hasError(errors, touched, 'kmAtual')}
                    />
                  ) : (
                    <S.Text variant="h5">{carData.kmAtual}</S.Text>
                  )}
                </S.Info>
              </S.ContainerInfo>
              <S.ContainerInfo>
                <S.Info>
                  <S.Title variant="h5">Place</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="placa"
                      helpText={errors?.placa as string}
                      placeholder="Place"
                      error={hasError(errors, touched, 'placa')}
                    />
                  ) : (
                    <S.Text variant="h5">{carData.placa}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">V* Habilitação</S.Title>
                  {isEdit ? (
                    <DateTimePickerComponent
                      isSecudary
                      handleDate={handleChange}
                      placeholder={'Fabrication'}
                      helpText={errors?.anoFabricacao as string}
                      error={hasError(errors, touched, 'anoFabricacao')}
                    />
                  ) : (
                    <S.Text variant="h5">{carData.anoFabricacao}</S.Text>
                  )}
                </S.Info>
              </S.ContainerInfo>
              {isEdit && (
                <S.LoadingButtonComponent
                  startIcon
                  type="submit"
                  loading={isSave}
                  disabled={!isValid}
                  variant="contained"
                  loadingPosition="start"
                >
                  Save
                </S.LoadingButtonComponent>
              )}
            </S.FormComponent>
          )}
        </S.FormikComponent>
      </S.CardComponent>
      <S.ButtonBack href={'/cars'}>
        <S.TooltipComponent title="">
          <IconButton>
            <S.ChevronLeftIconComponent />
          </IconButton>
        </S.TooltipComponent>
      </S.ButtonBack>
    </S.MainContainer>
  )
}
export default Car
