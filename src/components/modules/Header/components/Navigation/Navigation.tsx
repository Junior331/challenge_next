import * as S from './NavigationStyled'
import { NavigationProps } from '../../@types'

const Navigation = ({
  Links,
  handlePushRouter = () => {},
}: NavigationProps) => {
  const handleNavigate = (router: string) => {
    // navigate(router)
    // handlePushRouter(router)
  }

  return (
    <S.NavigationContainer data-testid="navigation_test">
      {Links?.map((item) => {
        return (
          <S.Item key={item.text}>
            <S.Text
              key={item.text}
              data-testid="link_test"
              onClick={() => handleNavigate(item.router)}
            >
              {item.text}
            </S.Text>
          </S.Item>
        )
      })}
    </S.NavigationContainer>
  )
}

export default Navigation
