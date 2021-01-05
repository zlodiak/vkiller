import React from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import s from './victims/victims.module.css'
import * as MUI from '../../sharedDependencies'
import { appStateType } from '../../redux/store'
import { victimFieldsType } from '../../types'


function Details(props: any) {
  const routeParams: any = useParams();	
  const details = props.victims.find((victim: any) => routeParams.pk == victim.pk)
  console.log(details)
 
  return(
    <Formik
      initialValues={{
        firstname:  details && details.fields.firstname,
        lastname:   details && details.fields.lastname,
        gender:     details && details.fields.gender.toString(),
        isComplete: details && details.fields.is_complete.toString(),
        address:    details && details.fields.address,
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
          alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
      }}
      render={({ errors, status, touched }) => (
        <Form>
          <div className="form-group">
            <label>
              <Field type="radio" name="isComplete" value="1"/>Complete
            </label>
            <label>
              <Field type="radio" name="isComplete" value="0"/>Not complete
            </label>
          </div>

          <div className="form-group">
            <label>
              <Field type="radio" name="gender" value="1"/>Male
            </label>
            <label>
              <Field type="radio" name="gender" value="0"/>Female
            </label>
          </div>

          <div className="form-group">
            <Field name="firstname" type="text" className={'form-control' + (errors.firstname && touched.firstname ? ' is-invalid' : '')} />
            <ErrorMessage name="firstname" component="div" className="invalid-feedback" />
          </div>

          <div className="form-group">
            <Field name="lastname" type="text" className={'form-control' + (errors.lastname && touched.lastname ? ' is-invalid' : '')} />
            <ErrorMessage name="lastname" component="div" className="invalid-feedback" />
          </div>

          <div className='form-group'>
            <Field as='textarea' id="address" name="address" className={'form-control' + (errors.address && touched.address ? ' is-invalid' : '')} />
            <ErrorMessage name="address" component="div" className="invalid-feedback" />
          </div>          

          <div className="form-group">
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


export default connect(mapStateToProps, {})(Details);