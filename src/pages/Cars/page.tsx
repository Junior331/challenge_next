import { ModalAddCar } from '@/components/modules'
import { getCars, randomIntFromInterval } from '@/services/service'
import { useState, useEffect } from 'react'
import { CarType } from '../@types'
import * as S from '../styled'
import { CardSkeleton } from '@/components/modules/Skeletons'

export const Car = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState<CarType[]>([])

  const getCar = async () => {
    try {
      const result = await getCars()
      setCars(result)
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
    getCar()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.Title variant="h5">Cars</S.Title>
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
          {cars.map((car: CarType) => (
            <S.CardComponent key={car.id}>
              <S.CardContentComponent>
                <S.LinkComponent href={`/car/${car.id}`}>
                  <S.BoxComponent>
                    <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
                      {car.marcaModelo.slice(0, 1).toLocaleUpperCase()}
                    </S.AvatarImage>
                  </S.BoxComponent>
                  <S.Title variant="h5">{car.marcaModelo}</S.Title>
                  <S.Text variant="h5">KM: {car.kmAtual}</S.Text>
                  <S.Text variant="h5">Place: {car.placa}</S.Text>
                  <S.Text variant="h5">Fabrication: {car.anoFabricacao}</S.Text>
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
      <ModalAddCar
        isOpen={isOpen}
        handleClose={handleClose}
        updateState={checkingState}
      />
    </S.MainContainer>
  )
}
