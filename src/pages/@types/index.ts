import { ReactNode } from 'react'

export type styleProps = {
  size?: string
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
export type AvatarImageProps = {
  colorIndex: number
  children: ReactNode
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
