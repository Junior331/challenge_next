import { itenSideBarType } from '@/components/modules/SideBar/@types'
import { Links } from '@/mocks/Links'
import { ClientType, PostClientType } from '@/pages/@types'
import axios from 'axios'
// import axios from 'axios'

const baseUrl = 'https://api-deslocamento.herokuapp.com/api/v1/'

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
export const getClients = async (): Promise<ClientType[]> => {
  try {
    const response = await axios.get(`${baseUrl}Cliente`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting customers:', error)
    throw error
  }
}
export const postClients = async (clientData: PostClientType) => {
  try {
    const response = await axios.post(`${baseUrl}Cliente`, clientData)
    return response.status
  } catch (error) {
    console.error('Erro ao enviar a solicitação POST:', error)
  }
}
export const deleteClients = async (id: number) => {
  try {
    const deleteRequest: {
      id: number
    } = {
      id,
    }

    const response = await axios.delete(`${baseUrl}Cliente/${id}`, {
      data: deleteRequest,
    })
    return response.status as number
  } catch (error) {
    console.error('Erro ao enviar a solicitação DELETE:', error)
    // Trate o erro adequadamente
  }
}
export const putClients = async (clientData: ClientType) => {
  try {
    const response = await axios.put(`${baseUrl}Cliente/${clientData.id}`, {
      data: {
        ...clientData,
      },
    })
    return response.status as number
  } catch (error) {
    console.error('Erro ao enviar a solicitação DELETE:', error)
    // Trate o erro adequadamente
  }
}
export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
