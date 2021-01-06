import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { TextField } from 'formik-material-ui'
import * as Yup from 'yup'
import { useHistory } from "react-router-dom"

import s from './victims/victims.module.css'
import * as MUI from '../../sharedDependencies'
import { appStateType } from '../../redux/store'
import { victimFieldsType } from '../../types'
import { prepareDateForCard } from '../../utils'
import { setVictimThunk } from '../../redux/store'


function Details(props: any) {
  const routeParams: any = useParams();	
  const details = props.victims.find((victim: any) => routeParams.pk == victim.pk)
  const history = useHistory()
 
  return(
    <Formik
      initialValues={{
        firstname:  details && details.fields.firstname,
        lastname:   details && details.fields.lastname,
        gender:     details && details.fields.gender.toString(),
        isComplete: details && details.fields.is_complete.toString(),
        address:    details && details.fields.address,
        birthDate:  details && prepareDateForCard(details.fields.birthdate),
        createdDate:details && prepareDateForCard(details.fields.created_date),
      }}
      enableReinitialize={ true }
      validationSchema={Yup.object().shape({
        firstname: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('First Name is required'),
        lastname: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')        
          .required('Last Name is required'),
        address: Yup.string()
          .min(10, 'Too Short!')
          .max(100, 'Too Long!')        
          .required('Address is required'),
      })}
      onSubmit={fields => {
        const formData: victimFieldsType = {
          gender: fields.gender,
          user_id: details.fields.id_user,
          is_complete: fields.isComplete,
          firstname: fields.firstname,
          lastname: fields.lastname,
          address: fields.address,
          birthdate: details.fields.birthdate,
          created_date: details.fields.created_date,
        }
        props.setVictimThunk(formData, routeParams.pk, () => { history.push('/victims') })      
      }}
      render={({ errors, status, touched }) => (
        <Form>
          <div className={ s['form-group'] }>
            <Field as='select' name="isComplete">
              <option value="0">Not complete </option>
              <option value="1">Complete</option>              
            </Field>
          </div>

          <div className={ s['form-group'] }>
            <label>
              <Field type="radio" name="gender" value="1"/>Male
            </label>
            <label>
              <Field type="radio" name="gender" value="0"/>Female
            </label>
          </div>

          <div className={ s['form-group'] }>
            <Field name="firstname" type="text" component={TextField} className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
            <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
          </div>

          <div className={ s['form-group'] }>
            <Field name="lastname" type="text" component={TextField} className={'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '')} />
            <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
          </div>

          <div className={ s['form-group'] }>
            <Field as='textarea' id="address" name="address" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
            <ErrorMessage name="address" component="div" className="invalid-feedback" />
          </div>

          <div className={ s['form-group'] }>
            <Field name="birthDate" type="text" disabled={ true } component={TextField}/>
          </div>

          <div className={ s['form-group'] }>
            <Field name="createdDate" type="text" disabled={ true } component={TextField}/>
          </div>

          <div className={ s['form-group'] }>
            <button type="submit" className="btn btn-primary mr-2">Submit</button>
          </div>
        </Form>
      )}
    />
  )
}

const mapStateToProps = (state: appStateType) => {
  return {
    victims: state.victimsReducer.victims,
  }
}


export default connect(mapStateToProps, { setVictimThunk })(Details);