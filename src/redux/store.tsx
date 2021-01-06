
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { snackReducer, authReducer, victimsReducer } from './reducers'

const rootReducer = combineReducers({
  authReducer,
  victimsReducer,
  snackReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;

export default store


store.subscribe(() => {
  console.log(store.getState())
});

// @ts-ignore
window.state = store.getState
