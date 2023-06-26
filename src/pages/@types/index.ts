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
