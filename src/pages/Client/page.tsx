import { ClientType, paramsProps } from '../@types'
import * as S from '../subStyles'
import {
  deleteClients,
  getClient,
  putClients,
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
import { clientSchema } from '@/validations/clientSchema'

export const Client = ({ params }: paramsProps) => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(true)
  const [isEdit, setIsEdit] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const { dispatch } = useContext(MessageContext)

  const [clientData, setClientData] = useState<ClientType>({
    id: 0,
    uf: '',
    nome: '',
    numero: '',
    bairro: '',
    cidade: '',
    logradouro: '',
    tipoDocumento: '',
    numeroDocumento: '',
  })

  const getClientData = async () => {
    try {
      const result = await getClient(parseFloat(params.id))
      setClientData(result)
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
      await deleteClients(parseFloat(params.id))
      handleMessage('Client successfully deleted', 'success', true)
      push('/')
    } catch (error: any) {
      handleMessage(error.response.data, 'error', true)
    }
  }
  const handlePutClient = async (values: FormikValues) => {
    setIsSave(true)
    const clientData: ClientType = {
      uf: values.uf,
      nome: values.nome,
      numero: values.numero,
      bairro: values.bairro,
      cidade: values.cidade,
      id: parseFloat(params.id),
      logradouro: values.logradouro,
      tipoDocumento: values.tipoDocumento,
      numeroDocumento: values.numeroDocumento,
    }
    try {
      await putClients(clientData)
      setIsSave(false)
      setLoading(true)
      setIsEdit(!isEdit)
      handleMessage('Client successfully updated', 'success', true)
    } catch (error: any) {
      setIsEdit(!isEdit)
      handleMessage(error.response.data, 'error', true)
    }
  }
  useEffect(() => {
    getClientData()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.CardCenterComponent>
        <S.Content>
          <S.BoxComponent>
            <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
              {clientData.nome.slice(0, 1).toLocaleUpperCase()}
            </S.AvatarImage>
          </S.BoxComponent>
          <S.Title variant="h5">
            {clientData.nome[0]?.toUpperCase() + clientData.nome.substring(1)}
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
            id: clientData.id,
            uf: '',
            nome: '',
            numero: '',
            bairro: '',
            cidade: '',
            logradouro: '',
            tipoDocumento: '',
            numeroDocumento: '',
          }}
          validateOnMount
          onSubmit={handlePutClient}
          validationSchema={clientSchema}
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
                    <S.Text variant="h5">{clientData.nome}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">T* documento</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="tipoDocumento"
                      helpText={errors?.uf as string}
                      placeholder="Tipo do documento"
                      error={hasError(errors, touched, 'tipoDocumento')}
                    />
                  ) : (
                    <S.Text variant="h5">{clientData.tipoDocumento}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">N* documento</S.Title>
                  {isEdit ? (
                    <Input
                      onBlur={handleBlur}
                      nome="numeroDocumento"
                      helpText={errors?.uf as string}
                      placeholder="Numero do documento"
                      error={hasError(errors, touched, 'numeroDocumento')}
                    />
                  ) : (
                    <S.Text variant="h5">{clientData.numeroDocumento}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Logradouro</S.Title>
                  {isEdit ? (
                    <Input
                      nome="logradouro"
                      onBlur={handleBlur}
                      placeholder="Logradouro"
                      helpText={errors?.uf as string}
                      error={hasError(errors, touched, 'logradouro')}
                    />
                  ) : (
                    <S.Text variant="h5">{clientData.logradouro}</S.Text>
                  )}
                </S.Info>
              </S.ContainerInfo>
              <S.ContainerInfo>
                <S.Info>
                  <S.Title variant="h5">Numero</S.Title>
                  {isEdit ? (
                    <Input
                      nome="numero"
                      onBlur={handleBlur}
                      placeholder="Numero"
                      helpText={errors?.uf as string}
                      error={hasError(errors, touched, 'numero')}
                    />
                  ) : (
                    <S.Text variant="h5">{clientData.numero}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Bairro</S.Title>
                  {isEdit ? (
                    <Input
                      nome="bairro"
                      onBlur={handleBlur}
                      placeholder="Bairro"
                      helpText={errors?.uf as string}
                      error={hasError(errors, touched, 'bairro')}
                    />
                  ) : (
                    <S.Text variant="h5">{clientData.bairro}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">Cidade</S.Title>
                  {isEdit ? (
                    <Input
                      nome="cidade"
                      onBlur={handleBlur}
                      placeholder="Cidade"
                      helpText={errors?.uf as string}
                      error={hasError(errors, touched, 'cidade')}
                    />
                  ) : (
                    <S.Text variant="h5">{clientData.cidade}</S.Text>
                  )}
                </S.Info>
                <S.Info>
                  <S.Title variant="h5">UF</S.Title>
                  {isEdit ? (
                    <Input
                      nome="uf"
                      onBlur={handleBlur}
                      placeholder="UF"
                      helpText={errors?.uf as string}
                      error={hasError(errors, touched, 'uf')}
                    />
                  ) : (
                    <S.Text variant="h5">{clientData.uf}</S.Text>
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
      <S.ButtonBack href={'/'}>
        <S.TooltipComponent title="">
          <IconButton>
            <S.ChevronLeftIconComponent />
          </IconButton>
        </S.TooltipComponent>
      </S.ButtonBack>
    </S.MainContainer>
  )
}
