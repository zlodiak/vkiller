import React from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import '../App.css'
import store, { setLoggedAC } from '../redux/store'

import My from './pages/My'
import News from './pages/News'
import Friends from './pages/Friends'
import Page404 from './pages/Page404'

function Layout(props: any) {
  function logout() {
    store.dispatch(setLoggedAC(false))
  }

  return (
    <div className="wrap">

      <header className="header">
        <div className="header-inner">
          <div className="left-icons">
            <Icon>stars</Icon>
            <Typography>VKiller</Typography>
          </div>
          <Button color="default" onClick={ logout }>
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

export default Layout
