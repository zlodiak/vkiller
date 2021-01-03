
import { createStore, combineReducers } from 'redux'
import { victimType } from '../types'

const authReducer = function authReducer(state = { isLogged: false }, action: any) {
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
    default:
      return state
  }
  return state
}

export const setVictimsAC = (victims: victimType[]) => {
  return { type: 'SET_VICTIMS', payload: { victims } }
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
