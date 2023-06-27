import * as S from '../styled'
import { useEffect, useState } from 'react'
import { getWeather } from '@/services/service'

// eslint-disable-next-line no-unused-vars
import { IconWeather, WeatherType } from '../@types'
import { CardSkeleton } from '@/components/modules/Skeletons'
import { LottieAnimation } from '@/utils/utils'
import icons from '@/assets/img/icons'
import { format, parseISO } from 'date-fns'

export const Weathers = () => {
  const [loading, setLoading] = useState(true)

  const [weather, setWeather] = useState<WeatherType[]>([])

  const getWeatherForecast = async () => {
    try {
      const result = await getWeather()
      setWeather(result)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }
  const HandleDateFormated = (date: string) => {
    return format(parseISO(date), 'yyyy-MM-dd')
  }
  useEffect(() => {
    getWeatherForecast()
  }, [loading])

  return (
    <S.MainContainer maxWidth="sm">
      <S.Title variant="h5">Weather</S.Title>
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
          {weather.map((item: WeatherType) => {
            return (
              <S.CardComponent key={item.summary} segundary>
                <S.CardContentComponent>
                  <S.BoxComponent segundary>
                    <LottieAnimation
                      animationPath={`/animations/${
                        IconWeather[item.summary as keyof typeof IconWeather]
                      }.json`}
                    />
                  </S.BoxComponent>
                  <S.Title variant="h5">{item.summary}</S.Title>
                  <S.Footer>
                    <S.ContainerIcon>
                      <S.Icon src={icons.thermometer} alt="Icon calendar" />
                      <S.ContainerText>
                        <S.Text variant="h5">C: {item.temperatureC}</S.Text>
                        <S.Text variant="h5">F: {item.temperatureF}</S.Text>
                      </S.ContainerText>
                    </S.ContainerIcon>
                    <S.ContainerIcon>
                      <S.Icon src={icons.calendar} alt="Icon calendar" />
                      <S.Text variant="h5">
                        {HandleDateFormated(item.date)}
                      </S.Text>
                    </S.ContainerIcon>
                  </S.Footer>
                </S.CardContentComponent>
              </S.CardComponent>
            )
          }, [])}
        </S.ContainerCardComponent>
      )}
    </S.MainContainer>
  )
}
