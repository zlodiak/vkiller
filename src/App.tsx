import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

import './App.css'
import { loginRespType } from './types'
import { API_URL } from './config'
import store, { appStateType, setLoggedAC } from './redux/store'

import My from './components/pages/My'
import News from './components/pages/News'
import Friends from './components/pages/Friends'
import Page404 from './components/pages/Page404'

function App(props: any) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState()
  const [isLogged, setIslogged] = useState(false)

  useEffect(() => {
    setIslogged(props.isLogged)
  }, [props.isLogged])

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
          store.dispatch(setLoggedAC(true));
        }
      })
    })
  }

  function logout(): void {
    store.dispatch(setLoggedAC(false));
  }

  function authArea() {
    return (
      <div className="wrap">

        <header className="header">
          <div className="header-inner">
            <div className="left-icons">
              <Icon>stars</Icon>
              <Typography>VKiller</Typography>
            </div>
            <Button color="default" onClick={ () => logout() }>
              Logout
            </Button>            
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

  return (
    <BrowserRouter>
      { isLogged && authArea() }
      { !isLogged && authForms() }
    </BrowserRouter>
  )
}

const mapStateToProps = (state: appStateType) => {
  return {
    isLogged: state.authReducer.isLogged,
  }
}

export default connect(mapStateToProps, { setLoggedAC })(App);
