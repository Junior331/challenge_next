import car from './car.png'
import driver from './driver.png'
import clients from './clients.png'
import displacement from './displacement.png'

interface IIcon {
  [id: string]: string
}

const icons: IIcon = {
  cars: car.src,
  drivers: driver.src,
  clients: clients.src,
  displacements: displacement.src,
}

export const getIcon = (id: string) => icons[id]

export default icons
