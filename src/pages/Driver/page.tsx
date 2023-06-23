import { DriverType, paramsProps } from '../@types'
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
import { Input } from '@/components/elements'
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

  const [driverData, setDriverData] = useState<DriverType>({
    id: 0,
    nome: '',
    numeroHabilitacao: '',
    categoriaHabilitacao: '',
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
    } catch (error) {
      // console.error('Erro ao enviar a solicitação DELETE:', error)
      handleMessage('Delete failed, try again later', 'error', true)
    }
  }
  const handlePutDriver = async (values: FormikValues) => {
    setIsSave(true)
    const driverData: DriverType = {
      nome: values.nome,
      id: parseFloat(params.id),
      numeroHabilitacao: values.numeroHabilitacao,
      categoriaHabilitacao: values.categoriaHabilitacao,
      vencimentoHabilitacao: values.vencimentoHabilitacao,
    }
    try {
      await putDrivers(driverData)
      setIsSave(false)
      setLoading(true)
      setIsEdit(!isEdit)
      handleMessage('Driver successfully updated', 'success', true)
    } catch (error) {
      setIsEdit(!isEdit)
      handleMessage('Update failed, try again later', 'error', true)
    }
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
            type="submit"
            variant="contained"
            onClick={() => setIsEdit(!isEdit)}
            loadingPosition="start"
          >
            {isEdit ? 'Cancel' : 'Edit'}
          </S.LoadingButtonComponent>
          <S.LoadingButtonComponent
            type="submit"
            color="error"
            disabled={isEdit}
            variant="contained"
            loadingPosition="start"
            onClick={handleDelete}
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
            categoriaHabilitacao: '',
            vencimentoHabilitacao: '',
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
                      helpText={errors?.uf as string}
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
                      helpText={errors?.uf as string}
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
                      nome="categoriaHabilitacao"
                      helpText={errors?.uf as string}
                      placeholder="Categoria da Habilitação"
                      error={hasError(errors, touched, 'categoriaHabilitacao')}
                    />
                  ) : (
                    <S.Text variant="h5">
                      {driverData.categoriaHabilitacao}
                    </S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">V* Habilitação</S.Title>
                  {isEdit ? (
                    <Input
                      nome="vencimentoHabilitacao"
                      onBlur={handleBlur}
                      placeholder="Vencimento da Habilitação"
                      helpText={errors?.uf as string}
                      error={hasError(errors, touched, 'vencimentoHabilitacao')}
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
