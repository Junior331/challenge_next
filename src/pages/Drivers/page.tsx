import { getDrivers, randomIntFromInterval } from '@/services/service'
import * as S from '@/styles/styled'
import { useEffect, useState } from 'react'

import { DriverType } from '../../@types'
import { ModalAddDrive } from '@/components/modules'
import { CardSkeleton } from '@/components/modules/Skeletons'
// import { CardDriverSkeleton } from '@/components/modules/Skeletons/index'

const Drivers = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [drivers, setDrivers] = useState<DriverType[]>([])

  const getDriver = async () => {
    try {
      const result = await getDrivers()
      setDrivers(result)
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
    getDriver()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.Title variant="h5">Drivers</S.Title>
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
          {drivers.map((driver: DriverType) => (
            <S.CardComponent key={driver.id}>
              <S.CardContentComponent>
                <S.LinkComponent href={`/driver/${driver.id}`}>
                  <S.BoxComponent>
                    <S.AvatarImage colorIndex={randomIntFromInterval(1, 6)}>
                      {driver.nome.slice(0, 1).toLocaleUpperCase()}
                    </S.AvatarImage>
                  </S.BoxComponent>
                  <S.Title variant="h5">{driver.nome}</S.Title>
                  <S.Text variant="h5">
                    Number: {driver.numeroHabilitacao}
                  </S.Text>
                  <S.Text variant="h5">
                    Category: {driver.catergoriaHabilitacao}
                  </S.Text>
                  <S.Text variant="h5">
                    Due date: {driver.vencimentoHabilitacao}
                  </S.Text>
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
      <ModalAddDrive
        isOpen={isOpen}
        handleClose={handleClose}
        updateState={checkingState}
      />
    </S.MainContainer>
  )
}
export default Drivers
