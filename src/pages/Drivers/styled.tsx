import styled from 'styled-components'
import { styleProps } from '../@types'

const GenericContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
export const DriversContainer = styled(GenericContainer)`
  gap: 20px;
  flex-direction: column;
`
export const Content = styled(GenericContainer)`
  gap: 20px;
  width: 100%;
  display: flex;
  padding: 24px;
  justify-content: space-between;
`
export const Title = styled.h2<styleProps>`
  font-size: 2rem;
  color: #ffffff;
  font-weight: 400;
  font-size: ${({ size }) => size || '2'}rem;
`
