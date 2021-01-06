import { victimType, victimFieldsType } from '../types'
import { apiRequest } from '../API';


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
                dispatch(setVictimsAC(victimsProc))
              }
            })
          })
    }
  }

  export const toggleVictimStatusAC = (pk: number) => {
    return { type: 'TOGGLE_STATUS', payload: { pk } }
  }

  export const toggleVictimStatusThunk = (pk: number) => {
    return async (dispatch: any) => {
        const result = await apiRequest('/victim_toggle_status', 'POST', { pk })
        if(result.ok) {
          dispatch(toggleVictimStatusAC(pk))
        }
    }
  }