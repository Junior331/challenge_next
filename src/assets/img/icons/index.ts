import car from './car.png'
import driver from './driver.png'
import clients from './clients.png'
import weather from './weather.png'
import calendar from './calendar.png'
import thermometer from './thermometer.png'
import displacement from './displacement.png'

interface IIcon {
  [id: string]: string
}

const icons: IIcon = {
  cars: car.src,
  drivers: driver.src,
  clients: clients.src,
  weathers: weather.src,
  calendar: calendar.src,
  thermometer: thermometer.src,
  displacements: displacement.src,
}

export const getIcon = (id: string) => icons[id]

export default icons
