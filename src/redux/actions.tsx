import { victimType, victimFieldsType } from '../types'
import { apiRequest } from '../API';
import store from './store'


export const setSnackAC = (isShowSnackbar: boolean) => {
    return { type: 'SET_SHOW', payload: { isShowSnackbar } }
  }
  
  export const setSnackMessageAC = (message: string) => {
    return { type: 'SET_MESSAGE', payload: { message } }
  }
  
  export const setLoggedAC = (isLogged: boolean) => {
    return { type: 'SET_LOGGED', payload: { isLogged } }
  }
  
  export const setVictimsAC = (victims: victimType[]) => {
    return { type: 'SET_VICTIMS', payload: { victims } }
  }
  
  export const setVictimAC = (victim: victimFieldsType, pk: number) => {
    return { type: 'SET_VICTIM', payload: { victim, pk } }
  }
  
  export const setVictimThunk = (formData: victimFieldsType, pk: number, cb: any) => {
    return async (dispatch: any) => {
        const result = await apiRequest('/victim', 'POST', { formData, pk })
        if(result.ok) {
          dispatch(setVictimAC(formData, pk))
          cb()
        }
    }
  }
  
  export const getVictimsThunk = () => {
    return async (dispatch: any) => {
        apiRequest('/victims')
          .then((res: any) => {
            res.json().then((victimsRaw: string) => {
              const victimsProc: victimType[] = JSON.parse(victimsRaw)
              if(victimsProc.length) {
                store.dispatch(setVictimsAC(victimsProc))
              }
            })
          })
    }
  }