import React, { useEffect } from 'react'
import { victimType } from '../../../types'
import { appStateType } from '../../../redux/store'
import { connect } from 'react-redux';
import VictimCard from './VictimCard'


function Victims(props: any) {
  function displayVictims() {
    return (
      props.victims.map((victim: victimType, i: number) => {
        return <VictimCard key={ i } fields={ victim.fields } pk={ victim.pk }/>
      })
    )
  }

  return(
    <>
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