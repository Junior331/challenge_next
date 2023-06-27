/* eslint-disable react-hooks/exhaustive-deps */
import { DriverType, PutDriverType, paramsProps } from '../@types'
import * as S from '../subStyles'
import {
  deleteDrivers,
  getDriver,
  putDrivers,
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
import { driverSchema } from '@/validations/driverSchema'

export const Driver = ({ params }: paramsProps) => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(true)
  const [isEdit, setIsEdit] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const { dispatch } = useContext(MessageContext)
  const [date, setDate] = useState<string>(new Date().toISOString())

  const [driverData, setDriverData] = useState<DriverType>({
    id: 0,
    nome: '',
    numeroHabilitacao: '',
    catergoriaHabilitacao: '',
    vencimentoHabilitacao: '',
  })

  const getDriverData = async () => {
    try {
      const result = await getDriver(parseFloat(params.id))
      setDriverData(result)
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
      await deleteDrivers(parseFloat(params.id))
      handleMessage('Driver successfully deleted', 'success', true)
      push('/drivers')
    } catch (error: any) {
      handleMessage(error.response.data, 'error', true)
    }
  }
  const handlePutDriver = async (values: FormikValues) => {
    setIsSave(true)
    const driverData: PutDriverType = {
      id: parseFloat(params.id),
      vencimentoHabilitacao: date,
      categoriaHabilitacao: values.catergoriaHabilitacao,
    }

    try {
      const result = await putDrivers(driverData)
      setIsSave(false)
      setLoading(true)
      setIsEdit(!isEdit)
      handleMessage(result.response.data, 'success', true)
    } catch (error: any) {
      setIsSave(false)
      setIsEdit(!isEdit)
      handleMessage(error.response.data, 'error', true)
    }
  }

  const handleDate = async (values: Date | null) => {
    const originalDate = new Date(values?.toString() || '')
    const formattedDate = originalDate.toISOString()
    setDate(formattedDate)
  }

  useEffect(() => {
    getDriverData()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.CardCenterComponent>
        <S.Content>
          <S.BoxComponent>
            <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
              {driverData.nome.slice(0, 1).toLocaleUpperCase()}
            </S.AvatarImage>
          </S.BoxComponent>
          <S.Title variant="h5">
            {driverData.nome[0]?.toUpperCase() + driverData.nome.substring(1)}
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
            id: driverData.id,
            nome: '',
            numeroHabilitacao: '',
            catergoriaHabilitacao: '',
            vencimentoHabilitacao: date,
          }}
          validateOnMount
          onSubmit={handlePutDriver}
          validationSchema={driverSchema}
        >
          {({ handleBlur, errors, touched, isValid }) => (
            <S.FormComponent isEdit={isEdit}>
              <S.ContainerInfo>
                <S.Info>
                  <S.Title variant="h5">Nome</S.Title>
                  {isEdit ? (
                    <Input
                      nome="nome"
                      placeholder="Nome"
                      onBlur={handleBlur}
                      helpText={errors?.nome as string}
                      error={hasError(errors, touched, 'nome')}
                    />
                  ) : (
                    <S.Text variant="h5">{driverData.nome}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">N* Habilitação</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="numeroHabilitacao"
                      helpText={errors?.numeroHabilitacao as string}
                      placeholder="Numero da Habilitação"
                      error={hasError(errors, touched, 'numeroHabilitacao')}
                    />
                  ) : (
                    <S.Text variant="h5">{driverData.numeroHabilitacao}</S.Text>
                  )}
                </S.Info>
              </S.ContainerInfo>
              <S.ContainerInfo>
                <S.Info>
                  <S.Title variant="h5">C* Habilitação</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="catergoriaHabilitacao"
                      helpText={errors?.catergoriaHabilitacao as string}
                      placeholder="Categoria da Habilitação"
                      error={hasError(errors, touched, 'catergoriaHabilitacao')}
                    />
                  ) : (
                    <S.Text variant="h5">
                      {driverData.catergoriaHabilitacao}
                    </S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">V* Habilitação</S.Title>
                  {isEdit ? (
                    <DateTimePickerComponent
                      helpText={errors?.vencimentoHabilitacao as string}
                      error={hasError(errors, touched, 'vencimentoHabilitacao')}
                      handleDate={handleDate}
                      placeholder={''}
                    />
                  ) : (
                    <S.Text variant="h5">
                      {driverData.vencimentoHabilitacao}
                    </S.Text>
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
      <S.ButtonBack href={'/drivers'}>
        <S.TooltipComponent title="">
          <IconButton>
            <S.ChevronLeftIconComponent />
          </IconButton>
        </S.TooltipComponent>
      </S.ButtonBack>
    </S.MainContainer>
  )
}
