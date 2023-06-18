import styled from 'styled-components'
import media from '@/styles/breakpoints'

export const Container = styled.div`
  gap: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  position: sticky;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  > div {
    gap: 24px;
  }

  .MuiSkeleton-root {
    border-radius: 8px;
    background-color: #5c5d613b;
  }

  ${media.lessThan('large')`
    > div {
      width: 90%;
    }
    .MuiSkeleton-root {
      width: 100% !important;
    }
  `}
`
