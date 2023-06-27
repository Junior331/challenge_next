import {
  CarType,
  ClientType,
  DisplacementType,
  DriverType,
  PostCarType,
  PostClientType,
  PostDisplacementType,
  PostDriverType,
  PutCarType,
  PutDisplacementType,
  PutDriverType,
  WeatherType,
} from '@/pages/@types'
import axios from 'axios'
// import axios from 'axios'

const baseUrl = 'https://api-deslocamento.herokuapp.com/api/v1/'

export const getClient = async (id: number): Promise<ClientType> => {
  try {
    const response = await axios.get(`${baseUrl}Cliente/${id}`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting customers:', error)
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
    console.error('Error sending request POST:', error)
    throw error
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
    console.error('Error sending request DELETE:', error)
    throw error
  }
}
export const putClients = async (clientData: ClientType) => {
  try {
    const response = await axios.put(`${baseUrl}Cliente/${clientData.id}`, {
      ...clientData,
    })
    return response.status as number
  } catch (error) {
    console.error('Error sending request UPDATE:', error)
    throw error
  }
}
export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export const getDrivers = async (): Promise<DriverType[]> => {
  try {
    const response = await axios.get(`${baseUrl}Condutor`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting customers:', error)
    throw error
  }
}
export const getDriver = async (id: number): Promise<DriverType> => {
  try {
    const response = await axios.get(`${baseUrl}Condutor/${id}`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting drivers:', error)
    throw error
  }
}
export const postDriver = async (driverData: PostDriverType) => {
  try {
    const response = await axios.post(`${baseUrl}Condutor`, driverData)
    return response.status
  } catch (error) {
    console.error('Error sending request POST:', error)
    throw error
  }
}
export const deleteDrivers = async (id: number) => {
  try {
    const deleteRequest: {
      id: number
    } = {
      id,
    }

    const response = await axios.delete(`${baseUrl}Condutor/${id}`, {
      data: deleteRequest,
    })
    console.log(response)
    return response.data
  } catch (error) {
    console.error('Error sending request DELETE:', error)
    throw error
  }
}
export const putDrivers = async (driverData: PutDriverType) => {
  try {
    const response = await axios.put(`${baseUrl}Condutor/${driverData.id}`, {
      ...driverData,
    })
    return response.data
  } catch (error) {
    console.error('Error sending request UPDATE:', error)
    throw error
  }
}

export const getCars = async (): Promise<CarType[]> => {
  try {
    const response = await axios.get(`${baseUrl}Veiculo`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting cars:', error)
    throw error
  }
}
export const getCar = async (id: number): Promise<CarType> => {
  try {
    const response = await axios.get(`${baseUrl}Veiculo/${id}`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting car:', error)
    throw error
  }
}
export const postCar = async (driverData: PostCarType) => {
  try {
    const response = await axios.post(`${baseUrl}Veiculo`, driverData)
    return response.status
  } catch (error) {
    console.error('Error sending request POST:', error)
    throw error
  }
}
export const deleteCars = async (id: number) => {
  try {
    const deleteRequest: {
      id: number
    } = {
      id,
    }

    const response = await axios.delete(`${baseUrl}Veiculo/${id}`, {
      data: deleteRequest,
    })
    return response.status as number
  } catch (error) {
    console.error('Error sending request DELETE:', error)
    throw error
  }
}
export const putCars = async (driverData: PutCarType) => {
  try {
    const response = await axios.put(`${baseUrl}Veiculo/${driverData.id}`, {
      ...driverData,
    })
    return response
  } catch (error) {
    console.error('Error sending request UPDATE:', error)
    throw error
  }
}

export const getDisplacements = async (): Promise<DisplacementType[]> => {
  try {
    const response = await axios.get(`${baseUrl}Deslocamento`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting cars:', error)
    throw error
  }
}
export const getDisplacement = async (
  id: number,
): Promise<DisplacementType> => {
  try {
    const response = await axios.get(`${baseUrl}Deslocamento/${id}`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting car:', error)
    throw error
  }
}
export const postDisplacement = async (driverData: PostDisplacementType) => {
  try {
    const response = await axios.post(
      `${baseUrl}Deslocamento/IniciarDeslocamento`,
      driverData,
    )
    return response.status
  } catch (error) {
    console.error('Error sending request POST:', error)
    throw error
  }
}
export const deleteDisplacements = async (id: number) => {
  try {
    const deleteRequest: {
      id: number
    } = {
      id,
    }

    const response = await axios.delete(`${baseUrl}Deslocamento/${id}`, {
      data: deleteRequest,
    })
    return response.status as number
  } catch (error) {
    console.error('Error sending request DELETE:', error)
    throw error
  }
}
export const putDisplacements = async (driverData: PutDisplacementType) => {
  try {
    const response = await axios.put(
      `${baseUrl}Veiculo/${driverData.id}/EncerrarDeslocamento`,
      {
        ...driverData,
      },
    )
    return response
  } catch (error) {
    console.error('Error sending request UPDATE:', error)
    throw error
  }
}

export const getWeather = async (): Promise<WeatherType[]> => {
  try {
    const response = await axios.get(`${baseUrl}WeatherForecast`)
    const data = response.data
    return data
  } catch (error) {
    console.error('Error when getting cars:', error)
    throw error
  }
}
