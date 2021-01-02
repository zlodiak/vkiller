import React from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import * as MUI from '../sharedDependencies'
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
            <MUI.Icon>stars</MUI.Icon>
            <MUI.Typography>VKiller</MUI.Typography>
          </div>
          <MUI.Button color="default" onClick={ logout }>
            Logout
          </MUI.Button>
        </div>
      </header>

      <MUI.Grid container spacing={ 1 }>
      <MUI.Grid container item xs={ 2 } spacing={ 3 } className="nav">
        <MUI.Grid item>
        <NavLink to="/" className="nav-link">My</NavLink>
        <NavLink to="/news" className="nav-link">News</NavLink>
        <NavLink to="/friends" className="nav-link">Friends</NavLink>
        </MUI.Grid>
      </MUI.Grid>

      <MUI.Grid container item xs={10} spacing={3} className="content">
        <MUI.Grid item>
        <Switch>
          <Route exact path='/' render={ () => <My/> }/>
          <Route exact path='/My' render={ () => <My/> }/>
          <Route exact path='/News' render={ () => <News/> }/>
          <Route exact path='/Friends' render={ () => <Friends/> }/>
          <Route exact path='/Page404' render={ () => <Page404/> }/>
          <Redirect to="/Page404"/>
        </Switch>
        </MUI.Grid>
      </MUI.Grid>
      </MUI.Grid>

    </div>
  )
}


export default Layout
