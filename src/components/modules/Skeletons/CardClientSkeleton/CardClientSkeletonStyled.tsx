import styled from 'styled-components'
import media from '@/styles/breakpoints'

export const Container = styled.div`
  gap: 40px;
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  > div {
    gap: 24px;
    width: 250px;
  }

  .MuiSkeleton-root {
    border-radius: 4px;
    background-color: #cecfd03b;
  }

  ${media.lessThan('large')`
    > div {
      width: 90%;
    }
  `}
`
export const ContainerSkeleton = styled.div`
  width: 100%;
  height: auto;
  padding: 16px;
  display: flex;
  height: 308px;
  max-width: 250px;
  position: relative;
  border-radius: 4px;
  align-items: center;
  flex-direction: column;
  background-color: #29233d;

  span {
    background-color: rgb(255 255 255 / 16%);
  }
  > span:first-child {
    top: 10px;
    right: 10px;
    cursor: pointer;
    border-radius: 100%;
    position: absolute;
  }
  > span:nth-child(2n) {
    border-radius: 100%;
  }
`
export const ContainerText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
