import React, { useState } from 'react'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

import './App.css'
import { getCookie } from './utils'
import { userType } from './types'
import { API_URL } from './config'

import My from './components/pages/My'
import News from './components/pages/News'
import Friends from './components/pages/Friends'
import Page404 from './components/pages/Page404'

function App() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  function submitLogin() {
    if(!login || !password) { return } 
    fetch(API_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({ login, password })
    }).then((res: any) => {
      res.json().then((v: object) => {
        console.log('res=====', v)
      })
    })
  }

  function authArea() {
    return (
      <div className="wrap">

        <header className="header">
          <div className="header-inner">
            <Icon>stars</Icon>
            <Typography>VKiller</Typography>            
          </div>
        </header>        

        <Grid container spacing={ 1 }>
          <Grid container item xs={ 2 } spacing={ 3 } className="nav">
            <Grid item>
              <NavLink to="/" className="nav-link">My</NavLink>
              <NavLink to="/news" className="nav-link">News</NavLink>
              <NavLink to="/friends" className="nav-link">Friends</NavLink>
            </Grid>
          </Grid>

          <Grid container item xs={10} spacing={3} className="content">
            <Grid item>
              <Switch>
                <Route exact path='/' render={ () => <My/> }/>
                <Route exact path='/My' render={ () => <My/> }/>
                <Route exact path='/News' render={ () => <News/> }/>
                <Route exact path='/Friends' render={ () => <Friends/> }/>
                <Route exact path='/Page404' render={ () => <Page404/> }/>
                <Redirect to="/Page404"/>
              </Switch>
            </Grid>
          </Grid>
        </Grid>

      </div>      
    )
  }

  function authForms() {
    return (
      <div className="authForms">
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

  const isLogged = getCookie('isLogged') === '1'

  return (
    <BrowserRouter>
      { isLogged && authArea() }
      { !isLogged && authForms() }
    </BrowserRouter>
  )
}

export default App
