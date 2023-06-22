import {
  deleteClients,
  getClients,
  putClients,
  randomIntFromInterval,
} from '@/services/service'
import * as S from './styled'
import { useContext, useEffect, useState } from 'react'

// eslint-disable-next-line no-unused-vars
import { ClientType, PostClientType } from '../@types'
import { IconButton } from '@mui/material'
import { CardClientSkeleton } from '@/components/modules/Skeletons/index'
import { ModalAddClient } from '@/components/modules'
import { FormikValues } from 'formik'
import { clientSchema } from './clientSchema'
import { LoadingButton } from '@mui/lab'
import { Input } from '@/components/elements'
import { MessageContext } from '@/state/modalMessage/state'
import { Actions } from '@/state/modalMessage/@types/actions'

export const Clients = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isSave, setIsSave] = useState(false)
  const [loading, setLoading] = useState(true)
  const { dispatch } = useContext(MessageContext)

  const [clientSelected, setClientSelected] = useState<number>(0)
  const [clients, setClients] = useState<ClientType[]>([])

  const getClient = async () => {
    try {
      const result = await getClients()
      setClients(result)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const handleDelete = async (clientId: number) => {
    try {
      await deleteClients(clientId)
      setLoading(true)
      handleMessage('Client successfully deleted', 'success', true)
    } catch (error) {
      // console.error('Erro ao enviar a solicitação DELETE:', error)
      handleMessage('Delete failed, try again later', 'error', true)
    }
  }
  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }
  const handleClose = () => {
    setIsOpen(!isOpen)
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
  const handleEdit = (clientId: number) => {
    setIsEdit(!isEdit)
    setClientSelected(clientId)
  }
  const handlePutClient = async (values: FormikValues) => {
    setIsSave(true)
    const clientData: ClientType = {
      id: values.id,
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
      await putClients(clientData)
      setIsSave(false)
      setLoading(true)
      setIsEdit(!isEdit)
      handleMessage('Client successfully updated', 'success', true)
    } catch (error) {
      setIsEdit(!isEdit)
      handleMessage('Update failed, try again later', 'error', true)
    }
  }
  const checkingState = (state: boolean) => {
    setLoading(state)
  }

  useEffect(() => {
    getClient()
  }, [loading])

  return (
    <S.ClientsContainer maxWidth="sm">
      <S.Title variant="h5">Clients</S.Title>
      {loading ? (
        <S.ContainerCardComponent>
          <CardClientSkeleton />
          <CardClientSkeleton />
          <CardClientSkeleton />
          <CardClientSkeleton />
          <CardClientSkeleton />
        </S.ContainerCardComponent>
      ) : (
        <S.ContainerCardComponent>
          {clients.map((client: ClientType) => (
            <S.CardComponent key={client.id}>
              <S.CardContentComponent>
                <S.TooltipLeftComponent
                  title=""
                  onClick={() => handleEdit(client.id)}
                >
                  <IconButton>
                    {isEdit && client.id === clientSelected ? (
                      <S.CloseIconComponent />
                    ) : (
                      <S.EditIconComponent />
                    )}
                  </IconButton>
                </S.TooltipLeftComponent>
                <S.TooltipComponent
                  title=""
                  onClick={() => handleDelete(client.id)}
                >
                  <IconButton>
                    <S.DeleteIconComponent />
                  </IconButton>
                </S.TooltipComponent>

                {isEdit && client.id === clientSelected ? (
                  <S.FormikComponent
                    initialValues={{
                      id: client.id,
                      uf: '',
                      nome: '',
                      numero: '',
                      bairro: '',
                      cidade: '',
                      logradouro: '',
                      tipoDocumento: '',
                      numeroDocumento: '',
                    }}
                    onSubmit={handlePutClient}
                    validationSchema={clientSchema}
                  >
                    <S.FormComponent>
                      <Input nome="nome" placeholder="Nome" />
                      <Input
                        nome="tipoDocumento"
                        placeholder="Tipo do documento"
                      />
                      <Input
                        nome="numeroDocumento"
                        placeholder="Numero do documento"
                      />
                      <Input nome="logradouro" placeholder="Logradouro" />
                      <Input nome="numero" placeholder="Numero" />
                      <Input nome="bairro" placeholder="Bairro" />
                      <Input nome="cidade" placeholder="Cidade" />
                      <Input nome="uf" placeholder="UF" />
                      <LoadingButton
                        type="submit"
                        loading={isSave}
                        variant="contained"
                        loadingPosition="start"
                      >
                        Save
                      </LoadingButton>
                    </S.FormComponent>
                  </S.FormikComponent>
                ) : (
                  <>
                    <S.BoxComponent>
                      <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
                        {client.nome.slice(0, 1).toLocaleUpperCase()}
                      </S.AvatarImage>
                    </S.BoxComponent>
                    <S.Title variant="h5">{client.nome}</S.Title>
                    <S.Text variant="h5">
                      {client.tipoDocumento.toUpperCase()}:{' '}
                      {client.numeroDocumento}
                    </S.Text>
                    <S.Text variant="h5">
                      Logradouro: {client.logradouro}
                    </S.Text>
                    <S.Text variant="h5">Numero: {client.numero}</S.Text>
                    <S.Text variant="h5">Bairro: {client.bairro}</S.Text>
                    <S.Text variant="h5">Cidade: {client.cidade}</S.Text>
                    <S.Text variant="h5">UF: {client.uf}</S.Text>
                  </>
                )}
              </S.CardContentComponent>
            </S.CardComponent>
          ))}
          <S.CardComponent>
            <S.CardActionAreaComponent onClick={() => handleOpenModal()}>
              <S.AddIconComponent />
            </S.CardActionAreaComponent>
          </S.CardComponent>
        </S.ContainerCardComponent>
      )}
      <ModalAddClient
        isOpen={isOpen}
        handleClose={handleClose}
        updateState={checkingState}
      />
    </S.ClientsContainer>
  )
}
