import React, { useState, useEffect } from 'react'

import * as MUI from '../../sharedDependencies'
import '../../App.css'
import { loginRespType } from '../../types'
import { API_URL } from '../../config'
import store, { setLoggedAC } from '../../redux/store'


function Login(props: any) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState()

  function submitLogin() {
    if(!login || !password) { return } 
    fetch(API_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ login, password })
    }).then((res: any) => {
      res.json().then((loginResp: loginRespType) => {
        if(loginResp.isLogged === 'True') {
          store.dispatch(setLoggedAC(true))
        }
      })
    })
  }

  return (
    <div className="authForms" id="authForms">
      <MUI.Card className="loginForm">
        <MUI.CardContent>
          <MUI.Typography variant="h5" gutterBottom>
            Login form
          </MUI.Typography>

          <form noValidate autoComplete="off">
            <MUI.TextField id="login" label="Login" onChange={ e => setLogin(e.target.value as any) }/>
            <MUI.TextField id="password" label="Password" onChange={ e => setPassword(e.target.value as any) }/>
          </form>
        </MUI.CardContent>

        <MUI.CardActions>
          <MUI.Button variant="contained" color="primary" onClick={ () => submitLogin() }>
            Submit
          </MUI.Button>
        </MUI.CardActions>
      </MUI.Card>
    </div>
  )
}


export default Login
