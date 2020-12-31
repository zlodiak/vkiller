import React from 'react'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from "react-router-dom"

import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import './App.css'
import My from './components/pages/My'
import News from './components/pages/News'
import Friends from './components/pages/Friends'
import Page404 from './components/pages/Page404'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App
