import React from 'react'

import * as MUI from '../../../sharedDependencies'
import s from './victims.module.css'
import { prepareGenderForCard, prepareCompletedForCard } from '../../../utils'
import { victimFieldsType } from '../../../types'


function VictimCard(props: any) {
  function displayFields() {
    const fields: any = JSON.parse(JSON.stringify(props.fields))
    fields.gender = prepareGenderForCard(props.fields.gender)
    fields.isComplete = prepareCompletedForCard(props.fields.is_complete)

    return (
      Object.keys(fields)
        .map((key: string, i: number) => {
          if(key === 'id_user') { return }
          return (
            <div className={ s.line } key={ i }>
              <MUI.Typography variant="caption" gutterBottom className={ s.label }>
                { key }
              </MUI.Typography>
              <MUI.Typography variant="body1" gutterBottom>
                { fields[key] }
              </MUI.Typography>           
            </div>
          )
        })
    )
  }

  return(
    <MUI.Card className={ s.card }>
      <MUI.CardContent>
        { displayFields() }         
      </MUI.CardContent>

      <MUI.CardActions>
        <MUI.Button variant="outlined" size="small">Open details</MUI.Button>
        <MUI.Button variant="outlined" size="small">Toggle Status</MUI.Button>
      </MUI.CardActions>
    </MUI.Card>
  )
}


export default VictimCard