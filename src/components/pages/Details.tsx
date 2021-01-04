import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';

import s from './victims/victims.module.css'
import * as MUI from '../../sharedDependencies'
import { appStateType } from '../../redux/store'
import { victimFieldsType } from '../../types'


function Details(props: any) {
  const routeParams: any = useParams();	
  const details = props.victims.find((victim: any) => routeParams.pk == victim.pk)
  console.log('det', details)
  console.log('props.victims', props.victims)
  console.log('routeParams.pk', routeParams.pk)

  const [editForm, setEditForm] = useState(details)

  // console.log('editForm', editForm)

  useEffect(() => {
    // console.log('=-=-=-=', props.victim)
    setEditForm(props.victim)
  }, [])
  
  return(
    <>
      <form>
        <MUI.TextField label="Firstname" value={ editForm && editForm.Firstname }/>

        <MUI.Button variant="contained" color="primary" >
          Submit
        </MUI.Button>        
      </form>
      
      {
        details && Object.keys(details.fields)
        .map((key: string, i: number) => {
          if(key === 'id_user') { return }
          return (
            <div className={ s.line } key={ i }>
              <MUI.Typography variant="caption" gutterBottom className={ s.label }>
                { key.replace('_', ' ') }
              </MUI.Typography>
              <MUI.Typography variant="body1" gutterBottom>
                { details.fields[key] }
              </MUI.Typography>
            </div>
          )
        }) 
      }
    </>
  )
}

const mapStateToProps = (state: appStateType) => {
  return {
    victims: state.victimsReducer.victims,
  }
}


export default connect(mapStateToProps, {})(Details);