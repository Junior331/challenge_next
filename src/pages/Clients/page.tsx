import {
  deleteClients,
  getClients,
  randomIntFromInterval,
} from '@/services/service'
import * as S from './styled'
import { useEffect, useState } from 'react'

import { ClientType } from '../@types'
import { IconButton } from '@mui/material'
import ModalAddClient from '@/components/modules/ModalAddClient/ModalAddClient'
import { CardClientSkeleton } from '@/components/modules/Skeletons/index'

export const Clients = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
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
    } catch (error) {
      console.error('Erro ao enviar a solicitação DELETE:', error)
      // Trate o erro adequadamente
    }
  }
  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }
  const handleClose = () => {
    setIsOpen(!isOpen)
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
                <S.TooltipComponent
                  title=""
                  onClick={() => handleDelete(client.id)}
                >
                  <IconButton>
                    <S.DeleteIconComponent />
                  </IconButton>
                </S.TooltipComponent>
                <S.BoxComponent>
                  <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
                    {client.nome.slice(0, 1).toLocaleUpperCase()}
                  </S.AvatarImage>
                </S.BoxComponent>
                <S.Title variant="h5">{client.nome}</S.Title>
                <S.Text variant="h5">
                  {client.tipoDocumento.toUpperCase()}: {client.numeroDocumento}
                </S.Text>
                <S.Text variant="h5">Logradouro: {client.logradouro}</S.Text>
                <S.Text variant="h5">Numero: {client.numero}</S.Text>
                <S.Text variant="h5">Bairro: {client.bairro}</S.Text>
                <S.Text variant="h5">Cidade: {client.cidade}</S.Text>
                <S.Text variant="h5">UF: {client.uf}</S.Text>
              </S.CardContentComponent>
            </S.CardComponent>
          ))}
          <S.CardComponent>
            <S.CardActionAreaComponent onClick={() => handleOpenModal()}>
              <S.TooltipCenterComponent title="">
                <IconButton>
                  <S.AddIconComponent />
                </IconButton>
              </S.TooltipCenterComponent>
            </S.CardActionAreaComponent>
          </S.CardComponent>
        </S.ContainerCardComponent>
      )}
      <ModalAddClient isOpen={isOpen} handleClose={handleClose} />
    </S.ClientsContainer>
  )
}
