import React from 'react'

import store, { setLoggedAC } from '../../redux/store'
import * as MUI from '../../sharedDependencies'


function Header() {
  function logout() {
    store.dispatch(setLoggedAC(false))
  }

  return(
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
  )
}


export default Header