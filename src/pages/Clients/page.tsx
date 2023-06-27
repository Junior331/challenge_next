import { getClients, randomIntFromInterval } from '@/services/service'
import * as S from '../styled'
import { useEffect, useState } from 'react'

// eslint-disable-next-line no-unused-vars
import { ClientType, PostClientType } from '../@types'
import { CardSkeleton } from '@/components/modules/Skeletons'
import { ModalAddClient } from '@/components/modules'

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
  const handleClose = () => {
    setIsOpen(!isOpen)
  }
  const checkingState = (state: boolean) => {
    setLoading(state)
  }

  useEffect(() => {
    getClient()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.Title variant="h5">Clients</S.Title>
      {loading ? (
        <S.ContainerCardComponent>
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </S.ContainerCardComponent>
      ) : (
        <S.ContainerCardComponent>
          {clients.map((client: ClientType) => (
            <S.CardComponent key={client.id}>
              <S.CardContentComponent>
                <S.LinkComponent href={`/client/${client.id}`}>
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
                  <S.Text variant="h5">Address: {client.logradouro}</S.Text>
                  <S.Text variant="h5">Number: {client.numero}</S.Text>
                  <S.Text variant="h5">Neighborhood: {client.bairro}</S.Text>
                  <S.Text variant="h5">City: {client.cidade}</S.Text>
                  <S.Text variant="h5">UF: {client.uf}</S.Text>
                </S.LinkComponent>
              </S.CardContentComponent>
            </S.CardComponent>
          ))}
          <S.CardComponent>
            <S.CardActionAreaComponent onClick={() => setIsOpen(!isOpen)}>
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
    </S.MainContainer>
  )
}
