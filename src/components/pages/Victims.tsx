import React, { useEffect } from 'react'
import { apiRequest } from '../../API'
import { victimType } from '../../types'
import store, { setVictimsAC, appStateType } from '../../redux/store'
import { connect } from 'react-redux';


function Victims(props: any) {
  useEffect(() => {
    apiRequest('/victims')
      .then((res: any) => {
        res.json().then((victimsRaw: string) => {
          const victimsProc: victimType[] = JSON.parse(victimsRaw)
          console.log(typeof victimsProc, victimsProc)
          store.dispatch(setVictimsAC(victimsProc))
        })
      })
  }, [props.victims]);

  function displayVictims() {
    return (
      props.victims.map((victim: victimType) => {
        return victim.fields.firstname
      })
    )
  }

  return(
    <>
      Victims comp
      { displayVictims() }
    </>
  )
}

const mapStateToProps = (state: appStateType) => {
  return {
    victims: state.victimsReducer.victims,
  }
}


export default connect(mapStateToProps, { })(Victims);