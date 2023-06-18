import styled from 'styled-components'
import media from '@/styles/breakpoints'
import { StyleProps } from './@types'

export const HeaderContainer = styled.div`
  gap: 20px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 18px 22px;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('large')`
    gap: 8px;
    padding: 10px 20px;

  `}
`
export const Logo = styled.h1`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`
export const Span = styled.span`
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};
`
export const Text = styled.h2<StyleProps>`
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`
export const Icon = styled.img`
  width: 40px;
`
export const Title = styled.h2<StyleProps>`
  font-size: ${({ theme }) => theme.typography.fontSizeRegular}rem;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`
