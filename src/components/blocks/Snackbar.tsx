import React from 'react'
import { connect } from 'react-redux'

import * as MUI from '../../sharedDependencies'
import store, { appStateType, setSnackAC } from '../../redux/store'


function Snackbar(props: any) {
  return(
    <MUI.Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={ props.isShowSnackbar }
      autoHideDuration={ 2000 }
      message={ props.snackMessage }
      action={
        <React.Fragment>
          <MUI.IconButton size="small" aria-label="close" color="inherit" onClick={ () => store.dispatch(setSnackAC(false)) }>
          <MUI.CloseIcon fontSize="small" />
          </MUI.IconButton>
        </React.Fragment>
      }
    /> 
  )
}

const mapStateToProps = (state: appStateType) => {
  return {
    isShowSnackbar: state.snackReducer.isShowSnackbar,
    snackMessage: state.snackReducer.message,
  }
}


export default connect(mapStateToProps, {})(Snackbar)