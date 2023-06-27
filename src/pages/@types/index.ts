/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'

export type styleProps = {
  size?: string
}

export type paramsProps = {
  params: {
    id: string
  }
}
export type AvatarImageProps = {
  colorIndex: number
  children: ReactNode
}
export type ClientType = {
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
export type PostClientType = {
  uf: string
  nome: string
  numero: string
  bairro: string
  cidade: string
  logradouro: string
  tipoDocumento: string
  numeroDocumento: string
}

export type DriverType = {
  id: number
  nome: string
  numeroHabilitacao: string
  catergoriaHabilitacao: string
  vencimentoHabilitacao: string
}
export type PutDriverType = {
  id: number
  categoriaHabilitacao: string
  vencimentoHabilitacao: string
}
export type PostDriverType = {
  nome: string
  numeroHabilitacao: string
  categoriaHabilitacao: string
  vencimentoHabilitacao: string
}

export type CarType = {
  id: number
  placa: string
  kmAtual: number
  marcaModelo: string
  anoFabricacao: number
}
export type PostCarType = {
  placa: string
  kmAtual: number
  marcaModelo: string
  anoFabricacao: number
}
export type PutCarType = {
  id: number
  kmAtual: number
  marcaModelo: string
  anoFabricacao: number
}

export type DisplacementType = {
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
export type PostDisplacementType = {
  motivo: string
  idVeiculo: number
  idCliente: number
  checkList: string
  kmInicial: number
  observacao: string
  idCondutor: number
  inicioDeslocamento: string
}
export type PutDisplacementType = {
  id: number
  kmFinal: number
  observacao: string
  fimDeslocamento: string
}
export type WeatherType = {
  date: string
  summary: string
  temperatureC: number
  temperatureF: number
}
export type LottieAnimationProps = {
  animationPath: string
}
export enum IconWeather {
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
// Cold = Frio #
// Freezing = Congelante ##
// Warm = Ardente ##
// Hot = Quente ##
// Mild = Suave ##
// Balmy = abafado #
// Sweltering = Sufocante
