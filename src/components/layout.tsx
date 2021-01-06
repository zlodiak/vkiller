import React, { useEffect } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import * as MUI from '../sharedDependencies'
import '../App.css'
import { getVictimsThunk } from '../redux/actions'

import My from './pages/My'
import News from './pages/News'
import Friends from './pages/Friends'
import Victims from './pages/victims/Victims'
import Details from './pages/Details'
import Page404 from './pages/Page404'
import Snackbar from './blocks/Snackbar'
import Header from './blocks/Header'


function Layout(props: any) {
  useEffect(() => {
    props.getVictimsThunk()
  }, []);

  return (
    <div className="wrap">

      <Snackbar/>
      <Header/>

      <MUI.Grid container spacing={ 1 }>
      <MUI.Grid container item xs={ 2 } spacing={ 3 } className="nav">
        <MUI.Grid item>
        <NavLink to="/" className="nav-link">My</NavLink>
        <NavLink to="/news" className="nav-link">News</NavLink>
        <NavLink to="/friends" className="nav-link">Friends</NavLink>
        <NavLink to="/victims" className="nav-link">Victims</NavLink>
        </MUI.Grid>
      </MUI.Grid>

      <MUI.Grid container item xs={ 10 } spacing={ 3 } className="content">
        <MUI.Grid item>
        <Switch>
          <Route exact path='/' render={ () => <My/> }/>
          <Route exact path='/my' render={ () => <My/> }/>
          <Route exact path='/news' render={ () => <News/> }/>
          <Route exact path='/friends' render={ () => <Friends/> }/>
          <Route exact path='/victims' render={ () => <Victims/> }/>
          <Route exact path='/victims/:pk' render={ () => <Details/> }/>
          <Route exact path='/page404' render={ () => <Page404/> }/>
          <Redirect to="/page404"/>
        </Switch>
        </MUI.Grid>
      </MUI.Grid>
      </MUI.Grid>

    </div>
  )
}


export default connect(null, { getVictimsThunk })(Layout)

