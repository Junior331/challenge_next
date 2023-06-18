import icons from '@/assets/img/icons'
import { itenSideBarType } from '@/components/modules/SideBar/@types'

export const Links: itenSideBarType[] = [
  {
    key: 'clients',
    name: 'Clients',
    icon: icons.clients,
    router: '/',
  },
  {
    key: 'drivers',
    name: 'Drivers',
    icon: icons.drivers,
    router: '/drivers',
  },
  {
    key: 'displacements',
    name: 'Displacements',
    icon: icons.displacements,
    router: '/displacements',
  },
  {
    key: 'cars',
    name: 'Cars',
    icon: icons.cars,
    router: '/cars',
  },
]
