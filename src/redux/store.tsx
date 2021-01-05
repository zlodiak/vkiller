
import { createStore, combineReducers } from 'redux'
import { victimType, victimFieldsType } from '../types'

const authReducer = function authReducer(state = { isLogged: true }, action: any) {
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

export const setLoggedAC = (isLogged: boolean) => {
  return { type: 'SET_LOGGED', payload: { isLogged } }
}

const victimsReducer = function victimsReducer(state = { victims: [] }, action: any) {
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
    default:
      return state
  }
  return state
}

export const setVictimsAC = (victims: victimType[]) => {
  return { type: 'SET_VICTIMS', payload: { victims } }
}

export const setVictimAC = (victim: victimFieldsType, pk: number) => {
  return { type: 'SET_VICTIM', payload: { victim, pk } }
}

const rootReducer = combineReducers({
  authReducer,
  victimsReducer,
});

const store = createStore(rootReducer)

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;

export default store



store.subscribe(() => {
  console.log(store.getState())
});

// @ts-ignore
window.state = store.getState
