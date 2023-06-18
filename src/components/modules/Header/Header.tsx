import { Links } from '@/mocks/Links'
import { Navigation } from './components'
import * as S from './HeaderStyled'

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo>
        Snow<S.Span>DEX</S.Span>
      </S.Logo>
      <Navigation Links={Links} />
    </S.HeaderContainer>
  )
}
export default Header
