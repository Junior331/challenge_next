/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'

type styleProps = {
  size?: string
  left?: string
  error?: boolean
  larger?: boolean
  isEdit?: boolean
  segundary?: boolean
}

type paramsProps = {
  params: {
    id: string
  }
}
type AvatarImageProps = {
  colorIndex: number
  children: ReactNode
}
type ClientType = {
  id: number
  uf: string
  nome: string
  numero: string
  bairro: string
  cidade: string
  logradouro: string
  tipoDocumento: string
  numeroDocumento: string
}
type PostClientType = {
  uf: string
  nome: string
  numero: string
  bairro: string
  cidade: string
  logradouro: string
  tipoDocumento: string
  numeroDocumento: string
}

type DriverType = {
  id: number
  nome: string
  numeroHabilitacao: string
  catergoriaHabilitacao: string
  vencimentoHabilitacao: string
}
type PutDriverType = {
  id: number
  categoriaHabilitacao: string
  vencimentoHabilitacao: string
}
type PostDriverType = {
  nome: string
  numeroHabilitacao: string
  categoriaHabilitacao: string
  vencimentoHabilitacao: string
}

type CarType = {
  id: number
  placa: string
  kmAtual: number
  marcaModelo: string
  anoFabricacao: number
}
type PostCarType = {
  placa: string
  kmAtual: number
  marcaModelo: string
  anoFabricacao: number
}
type PutCarType = {
  id: number
  kmAtual: number
  marcaModelo: string
  anoFabricacao: number
}

type DisplacementType = {
  id: number
  motivo: string
  kmFinal: number
  kmInicial: number
  idVeiculo: number
  idCliente: number
  checkList: string
  observacao: string
  idCondutor: number
  fimDeslocamento: string
  inicioDeslocamento: string
}
type PostDisplacementType = {
  motivo: string
  idVeiculo: number
  idCliente: number
  checkList: string
  kmInicial: number
  observacao: string
  idCondutor: number
  inicioDeslocamento: string
}
type PutDisplacementType = {
  id: number
  kmFinal: number
  observacao: string
  fimDeslocamento: string
}
type WeatherType = {
  date: string
  summary: string
  temperatureC: number
  temperatureF: number
}
type LottieAnimationProps = {
  animationPath: string
}
enum IconWeather {
  Hot = 'Hot',
  Warm = 'Hot',
  Cool = 'Cold',
  Mild = 'Mild',
  Chilly = 'Cold',
  Bracing = 'Cold',
  Scorching = 'Warm',
  Balmy = 'Sweltering',
  Freezing = 'Freezing',
  Sweltering = 'Sweltering',
}
export type {
  CarType,
  styleProps,
  ClientType,
  DriverType,
  paramsProps,
  PostCarType,
  PutCarType,
  WeatherType,
  PutDriverType,
  PostClientType,
  PostDriverType,
  DisplacementType,
  AvatarImageProps,
  PutDisplacementType,
  LottieAnimationProps,
  PostDisplacementType,
}
export { IconWeather }
