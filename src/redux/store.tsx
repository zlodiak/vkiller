
import { createStore, combineReducers } from 'redux'

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

const rootReducer = combineReducers({
  authReducer
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
