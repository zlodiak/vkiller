import { victimType, victimFieldsType } from '../types'


export const snackReducer = function snackReducer(state = { isShowSnackbar: false, message: '' }, action: any) {
  switch(action.type) {
    case 'SET_SHOW': {
      state = {
        ...state,
        isShowSnackbar: action.payload.isShowSnackbar
      };
      break;
    }
    case 'SET_MESSAGE': {
      state = {
        ...state,
        message: action.payload.message
      };
      break;
    }
    default:
      return state
  }
  return state
}

export const authReducer = function authReducer(state = { isLogged: true }, action: any) {
  switch(action.type) {
    case 'SET_LOGGED': {
      state = {
        ...state,
        isLogged: action.payload.isLogged
      };
      break;
    }            
    default:
      return state
  }
  return state
}

export const victimsReducer = function victimsReducer(state = { victims: [] }, action: any) {
  switch(action.type) {
    case 'SET_VICTIMS': {
      state = {
        ...state,
        victims: action.payload.victims
      };
      break;
    }
    case 'SET_VICTIM': {
      const updVictims: victimType[] = state.victims.map((victim: victimType) => {
        if(victim.pk === +action.payload.pk) {
          return {
            model: "victims.victim",
            pk: +action.payload.pk,
            fields: action.payload.victim
          }
        } else {
          return victim
        }
      })
      state = {
        ...state,
        victims: updVictims as any
      };
      break;      
    }  

    case 'TOGGLE_STATUS': {
      const updVictims: victimType[] = state.victims.map((victim: victimType) => {
        if(victim.pk === +action.payload.pk) {
          return {
            model: "victims.victim",
            pk: +action.payload.pk,
            fields: { ...victim.fields, is_complete: victim.fields.is_complete === 0 ? 1 : 0 }
          }
        } else {
          return victim
        }
      })
      state = {
        ...state,
        victims: updVictims as any
      };
      break;      
    }  

    default:
      return state
  }
  return state
}