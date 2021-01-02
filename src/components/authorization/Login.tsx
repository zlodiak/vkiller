import React, { useState, useEffect } from 'react'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

import '../../App.css'
import { loginRespType } from '../../types'
import { API_URL } from '../../config'
import store, { appStateType, setLoggedAC } from '../../redux/store'

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
      <Card className="loginForm">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Login form
          </Typography>

          <form noValidate autoComplete="off">
            <TextField id="login" label="Login" onChange={ e => setLogin(e.target.value as any) }/>
            <TextField id="password" label="Password" onChange={ e => setPassword(e.target.value as any) }/>
          </form>
        </CardContent>

        <CardActions>
          <Button variant="contained" color="primary" onClick={ () => submitLogin() }>
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Login
