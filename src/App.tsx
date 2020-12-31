import React from 'react'
import { BrowserRouter, Route, NavLink, Switch, Redirect } from "react-router-dom"
import './App.css'

import My from './components/pages/My'
import News from './components/pages/News'
import Friends from './components/pages/Friends'
import Page404 from './components/pages/Page404'

function App() {
  return (
    <BrowserRouter>
      <div className="wrap">
        <table>
          <tr>
            <td className="nav">
              <NavLink to="/" className="nav-link">My</NavLink>
              <NavLink to="/news" className="nav-link">News</NavLink>
              <NavLink to="/friends" className="nav-link">Friends</NavLink>
            </td>

            <td className="content">
              <Switch>
                <Route exact path='/' render={ () => <My/> }/>
                <Route exact path='/My' render={ () => <My/> }/>
                <Route exact path='/News' render={ () => <News/> }/>
                <Route exact path='/Friends' render={ () => <Friends/> }/>
                <Route exact path='/Page404' render={ () => <Page404/> }/>
                <Redirect to="/Page404" />
              </Switch>
            </td>
          </tr>
        </table>
      </div>
    </BrowserRouter>
  )
}

export default App
