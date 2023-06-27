import media from '@/styles/breakpoints'
import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  align-items: start;
  justify-content: space-between;
`

export const LayoutContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
  ${media.lessThan('small')`
    zoom: 85%;
    max-height: 100vh;
    overflow-y: scroll;
  `}
`
