import React from 'react'

import * as MUI from '../../../sharedDependencies'
import s from './victims.module.css'


function VictimCard(props: any) {
  return(
    <MUI.Card className="victim-card">
      <MUI.CardContent>
        <div className={ s.line }>
          <MUI.Typography variant="caption" gutterBottom className={ s.label }>
            Firstname
          </MUI.Typography>

          <MUI.Typography variant="body1" gutterBottom>
            { props.info.firstname }
          </MUI.Typography>          
        </div>
      </MUI.CardContent>

      <MUI.CardActions>
        aaa
      </MUI.CardActions>
    </MUI.Card>
  )
}


export default VictimCard