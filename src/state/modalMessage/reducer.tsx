/* eslint-disable @typescript-eslint/no-explicit-any */
import { Actions } from './@types/actions'

const messageReducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SET_MESSAGE:
      return {
        ...state,
        modal: {
          ...state.message,
          open: action.payload.open,
          type: action.payload.type,
          message: action.payload.message,
        },
      }
    default:
      return {}
  }
}

export default messageReducer
