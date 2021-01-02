import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import './App.css'
import { appStateType } from './redux/store'

import Login from './components/authorization/Login'
import Layout from './components/layout'


function App(props: any) {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    setIsLogged(props.isLogged)
  }, [props.isLogged])

  return (
    <BrowserRouter>
      { isLogged && <Layout/> }
      { !isLogged && <Login/> }
    </BrowserRouter>
  )
}

const mapStateToProps = (state: appStateType) => {
  return {
    isLogged: state.authReducer.isLogged,
  }
}


export default connect(mapStateToProps, {})(App);
