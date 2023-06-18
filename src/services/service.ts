import { itenSideBarType } from '@/components/modules/SideBar/@types'
import { Links } from '@/mocks/Links'
import axios from 'axios'
// import axios from 'axios'

export const getRoutes = async (): Promise<itenSideBarType[]> => {
  const useMock = true
  if (useMock) {
    return Promise.resolve(Links)
  }
  try {
    const response = await axios.get('')
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
