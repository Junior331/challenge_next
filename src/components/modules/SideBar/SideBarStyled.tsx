// import { getIcon } from '@/assets/img/icons'
import styled, { css } from 'styled-components'
import media from '@/styles/breakpoints'

export const ContainerGeneric = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SideBarContainer = styled(ContainerGeneric)<{ show?: boolean }>`
  left: 0;
  gap: 40px;
  z-index: 2;
  width: 65px;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  padding: 12px 0 45px 0;
  justify-content: flex-start;
  background-color: #29233d;
  transition: all 0.4s ease-out;
`
export const Logo = styled.img`
  max-width: 60px;
  cursor: pointer;
`
export const Icon = styled.img<{ active?: boolean }>`
  z-index: 1;
  opacity: 0.3;
  max-width: 40px;
  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}
`
export const ContainerCards = styled.div<{ show?: boolean }>`
  gap: 24px;
  display: flex;
  position: sticky;
  flex-direction: column;
  ${media.lessThan('small')`
    zoom: 75%;
  `}
`
export const FloatingDescription = styled.p`
  top: 10px;
  opacity: 0;
  left: -100%;
  color: #ffffff;
  font-size: 1.3rem;
  padding: 7px 11px;
  position: absolute;
  width: max-content;
  border-radius: 5px;
  letter-spacing: 1px;
  font-family: 'Inter';
  background: #4a3e9e;
  transition: all 0.8s ease-out;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  ::after {
    width: 0;
    height: 0;
    left: -5px;
    top: 8.5px;
    content: '';
    clear: both;
    position: absolute;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
`
export const SideBarItem = styled.div<{ active?: boolean }>`
  width: 60px;
  height: 60px;
  display: flex;
  padding: 12px;
  min-width: 60px;
  cursor: pointer;
  position: sticky;
  border-radius: 12px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  transition: all 0.1s ease-out;
  img:hover ~ p {
    opacity: 1;
    left: 65px;
    transition: opacity 0.4s ease-out;
  }
`
export const Line = styled(ContainerGeneric)`
  width: 3px;
  height: 100%;
  right: -17px;
  border-radius: 100%;
  background-size: auto;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute !important;
`
