import { useContext, useEffect, useState } from 'react'
import * as S from './SideBarStyled'
import { MenuContext } from '@/state/menu/state'
import { itenSideBarType } from './@types'
import { Actions } from '@/state/menu/@types/actions'
import { getRoutes } from '@/services/service'
import { SideBarSkeleton } from '../Skeletons'
import { useRouter } from 'next/navigation'

const SideBar = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(true)
  const { state, dispatch } = useContext(MenuContext)
  const [routes, setRoutes] = useState<itenSideBarType[]>([])

  const handleRouter = (tab: itenSideBarType): void => {
    push(tab.router)

    dispatch({
      type: Actions.SET_MENU,
      payload: {
        ...state.user,
        selected: tab.key,
      },
    })
  }

  const getRoutesSideBar = async () => {
    const response = await getRoutes()
    setRoutes(response)
    setLoading(false)
  }

  useEffect(() => {
    getRoutesSideBar()
  }, [])

  return (
    <S.SideBarContainer>
      {loading ? (
        <SideBarSkeleton />
      ) : (
        <S.ContainerCards show={state.menu.open}>
          {routes.map((item) => {
            return (
              <S.SideBarItem
                key={item.key}
                active={state.menu.selected === item.key}
                onClick={() => handleRouter(item)}
              >
                <S.Icon
                  src={item.icon}
                  alt={`Icone ${item.name}`}
                  active={state.menu.selected === item.key}
                />
                {state.menu.selected === item.key && <S.Line />}
                <S.FloatingDescription>{item.name}</S.FloatingDescription>
              </S.SideBarItem>
            )
          })}
        </S.ContainerCards>
      )}
    </S.SideBarContainer>
  )
}

export default SideBar
