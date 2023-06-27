import { useContext, useState } from 'react'
import * as S from './SideBarStyled'
import { MenuContext } from '@/state/menu/state'
import { itenSideBarType } from './@types'
import { Actions } from '@/state/menu/@types/actions'
import Link from 'next/link'
import { Links } from '@/mocks/Links'

const SideBar = () => {
  const { state, dispatch } = useContext(MenuContext)
  const [routes] = useState<itenSideBarType[]>(Links)

  const handleRouter = (item: string): void => {
    dispatch({
      type: Actions.SET_MENU,
      payload: {
        ...state.user,
        selected: item,
      },
    })
  }
  return (
    <S.SideBarContainer>
      <S.ContainerCards show={state.menu.open}>
        {routes.map((item) => {
          return (
            <Link key={item.key} href={item.router}>
              <S.SideBarItem
                key={item.key}
                active={state.menu.selected === item.key}
                onClick={() => handleRouter(item.key)}
              >
                <S.Icon
                  src={item.icon}
                  alt={`Icone ${item.name}`}
                  active={state.menu.selected === item.key}
                />
                {state.menu.selected === item.key && <S.Line />}
                <S.FloatingDescription>{item.name}</S.FloatingDescription>
              </S.SideBarItem>
            </Link>
          )
        })}
      </S.ContainerCards>
    </S.SideBarContainer>
  )
}

export default SideBar
