/* eslint-disable @typescript-eslint/no-explicit-any */
import { resetMenu, setMenuSelected } from '@/services/sessionStorage'
import { Actions } from './@types/actions'

const battleReducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SET_MENU:
      setMenuSelected(action.payload.selected)
      return {
        ...state,
        menu: {
          ...state.menu,
          open: false,
          openSideBar: false,
          selected: action.payload.selected,
        },
      }

    case Actions.RESET_MENU:
      resetMenu()
      return {
        ...state,
        menu: {
          ...state.menu,
          open: false,
          openSideBar: false,
          selected: 'staking',
        },
      }

    case Actions.OPEN_MENU:
      return {
        ...state,
        menu: {
          ...state.menu,
          openSideBar: false,
          open: action.payload.open,
        },
      }

    default:
      return {}
  }
}

export default battleReducer
