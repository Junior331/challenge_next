/* eslint-disable react-hooks/rules-of-hooks */
import { ModalAddDisplacement } from '@/components/modules'
import { getDisplacements } from '@/services/service'
import { useState, useEffect } from 'react'
import { DisplacementType } from '../../@types'
import * as S from '@/styles/styled'
import { CardSkeleton } from '@/components/modules/Skeletons'
import { useFormattedDate } from '@/utils/utils'

const Displacements = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [displacements, setDisplacements] = useState<DisplacementType[]>([])

  const getDisplacement = async () => {
    try {
      const result = await getDisplacements()
      setDisplacements(result)
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
    getDisplacement()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.Title variant="h5">Displacements</S.Title>
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
          {displacements.map((displacement: DisplacementType) => {
            const formattedInicioDeslocamento = useFormattedDate(
              displacement.inicioDeslocamento || '',
            )
            const formattedFimDeslocamento = useFormattedDate(
              displacement.fimDeslocamento || '',
            )
            return (
              <S.CardComponent key={displacement.id} larger>
                <S.CardContentComponent>
                  <S.LinkComponent href={`/displacement/${displacement.id}`}>
                    <S.Title variant="h5">{displacement.motivo}</S.Title>
                    <S.Text variant="h5">Car: {displacement.idVeiculo}</S.Text>
                    <S.Text variant="h5">
                      Client: {displacement.idCliente}
                    </S.Text>
                    <S.Text variant="h5">
                      Driver: {displacement.idCondutor}
                    </S.Text>
                    <S.Text variant="h5">
                      CheckList: {displacement.checkList}
                    </S.Text>
                    <S.Text variant="h5">
                      Start KM: {displacement.kmInicial}
                    </S.Text>
                    <S.Text variant="h5">
                      Final KM: {displacement.kmFinal}
                    </S.Text>
                    <S.Text variant="h5">
                      Start displacement:
                      {formattedInicioDeslocamento}
                    </S.Text>
                    <S.Text variant="h5">
                      Final displacement:
                      {formattedFimDeslocamento}
                    </S.Text>
                    <S.Text variant="h5">
                      Observation: {displacement.observacao}
                    </S.Text>
                  </S.LinkComponent>
                </S.CardContentComponent>
              </S.CardComponent>
            )
          })}
          <S.CardComponent>
            <S.CardActionAreaComponent onClick={() => setIsOpen(!isOpen)}>
              <S.AddIconComponent />
            </S.CardActionAreaComponent>
          </S.CardComponent>
        </S.ContainerCardComponent>
      )}
      <ModalAddDisplacement
        isOpen={isOpen}
        handleClose={handleClose}
        updateState={checkingState}
      />
    </S.MainContainer>
  )
}
export default Displacements
