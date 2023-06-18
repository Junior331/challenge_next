import { Props } from './@types'
import * as S from './CardStyled'

const Card = ({ width, height, noPadding, isColumn, children }: Props) => {
  return (
    <S.CardContainer
      width={width}
      height={height}
      isColumn={isColumn}
      noPadding={noPadding}
      data-testid="card_test"
    >
      {children}
    </S.CardContainer>
  )
}

export default Card
