import React from 'react'
import { useHistory } from "react-router-dom"
import { connect } from 'react-redux'

import * as MUI from '../../../sharedDependencies'
import s from './victims.module.css'
import { prepareFieldsForCard } from '../../../utils'
import { toggleVictimStatusThunk } from '../../../redux/actions'


function VictimCard(props: any) {
  const history = useHistory()

  function openCard(victimId: number) {
    history.push('/victims/' + victimId)
  }

  function toggleStatus(pk: number) {
    console.log('toggle', pk)
    props.toggleVictimStatusThunk(pk)
  }

  function displayFields() {
    const fields: any = prepareFieldsForCard(props.fields)
    return (
      Object.keys(fields)
      .map((key: string, i: number) => {
        if(key === 'id_user') { return }
        return (
          <div className={ s.line } key={ i }>
            <MUI.Typography variant="caption" gutterBottom className={ s.label }>
              { key.replace('_', ' ') }
            </MUI.Typography>
            <MUI.Typography variant="body1" gutterBottom>
              { fields[key] }
            </MUI.Typography>
          </div>
        )
      })      
    )
  }

  return (
    <MUI.Card className={ s.card }>
      <MUI.CardContent>
        { displayFields() }      
      </MUI.CardContent>

      <MUI.CardActions>
        <MUI.Button variant="outlined" size="small" onClick={ () => openCard(props.pk) }>Edit</MUI.Button>
        <MUI.Button variant="outlined" size="small" onClick={ () => toggleStatus(props.pk) }>Toggle Status</MUI.Button>
      </MUI.CardActions>
    </MUI.Card>      
  )
}


export default connect(null, { toggleVictimStatusThunk })(VictimCard)