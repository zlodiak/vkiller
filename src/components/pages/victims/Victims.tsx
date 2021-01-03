import React, { useEffect } from 'react'
import { apiRequest } from '../../../API'
import { victimType } from '../../../types'
import store, { setVictimsAC, appStateType } from '../../../redux/store'
import { connect } from 'react-redux';
import VictimCard from './VictimCard'


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
  }, []);

  function displayVictims() {
    return (
      props.victims.map((victim: victimType, i: number) => {
        const info = {
          firstname: victim.fields.firstname,
        }
        return <VictimCard key={ i } info={ info }/>
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