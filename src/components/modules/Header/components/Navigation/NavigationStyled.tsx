import styled from 'styled-components'
import media from '@/styles/breakpoints'

export const NavigationContainer = styled.div`
  gap: 20px;
  height: auto;
  display: flex;
  flex: 1 1 auto;
  max-width: 60%;
  padding: 0 10px;
  align-items: center;
  justify-content: flex-start;

  ${media.lessThan('large')`
    gap: 30px;
    width: 100%;
    height: 80%;
    padding: 15px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  `}
`

export const Text = styled.h2`
  width: auto;
  height: auto;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  ${media.lessThan('large')`
    font-size: ${({ theme }) => theme.typography.fontSize}rem;
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular + 100};
  `}
  :hover::after {
    left: 2%;
    right: 2%;
    content: '';
    bottom: -5px;
    position: absolute;
    border: 1px solid ${({ theme }) => theme.palette.color.blue?.default};
  }
`
export const Item = styled.div`
  gap: 10px;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
`
export const Icon = styled.img`
  width: 20px;
`
