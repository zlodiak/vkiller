import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';

import { appStateType } from '../../redux/store'
import { victimFieldsType } from '../../types'


function Details(props: any) {
  let details: victimFieldsType
  const routeParams: any = useParams();
  console.log(routeParams.pk); 	

  useEffect(() => {
    console.log('====', routeParams.pk, props.victims)
    details = props.victims.find((victim: any) => {
      console.log(routeParams.pk, victim.pk, routeParams.pk == victim.pk)
      return routeParams.pk == victim.pk
    })
    console.log('details', details)
  }, [])
  
  return(
    <>
      Details comp
    </>
  )
}

const mapStateToProps = (state: appStateType) => {
  return {
    victims: state.victimsReducer.victims,
  }
}


export default connect(mapStateToProps, {})(Details);