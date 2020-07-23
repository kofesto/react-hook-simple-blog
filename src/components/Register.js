import React from 'react';
import Header from './layouts/Header';
import useFormValidation from './useFormValidation';
import validateAuth from './validateAuth';

const INITIAL_STATE = {
    firstname :"",
    lastname :"",
    email :"",
    password :""
}

const Register = () => {
    const {handleSubmit,handleChange,handleBlur,values,errors,isSubmitting} = useFormValidation(INITIAL_STATE,validateAuth);
    return (
       <React.Fragment>
           <Header />
           <div className='container'>
               <div className='row justify-content-center'>
                   <div className='col-md-8'>
                       <div className='card'>
                           <div className='card-header'><h2>Create account</h2></div>
                           <div className='card-body'>
                               <form method='POST' onSubmit={handleSubmit}>
                                   <div className='form-group row'>
                                       <label className='col-md-4 col-form-label text-md-right'>First Name</label>
                                       <div className='col-md-6'>
                                          <input 
                                          type='text' 
                                          className='form-control'
                                          name='firstname'
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.firstname}
                                          autoComplete='off'
                                          placeholder='Enter first name'
                                           />
                                       </div>
                                   </div>
                                   <div className='form-group row'>
                                       <label className='col-md-4 col-form-label text-md-right'>Last Name</label>
                                       <div className='col-md-6'>
                                          <input
                                           type='text' 
                                           className='form-control'
                                           name='lastname'
                                           onChange={handleChange}
                                           onBlur={handleBlur}
                                           value={values.lastname}
                                           autoComplete='off'
                                           placeholder='Enter last name'
                                            />
                                       </div>
                                   </div>
                                   <div className='form-group row'>
                                       <label className='col-md-4 col-form-label text-md-right'>Email</label>
                                       <div className='col-md-6'>
                                          <input 
                                          type='email' 
                                          className='form-control' 
                                          name='email'
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.email}
                                          autoComplete='off'
                                          placeholder='Enter email'
                                          />
                                          {errors.email && <p className="text-danger">{errors.email}</p>}
                                       </div>
                                   </div>
                                   <div className='form-group row'>
                                       <label className='col-md-4 col-form-label text-md-right'>Password</label>
                                       <div className='col-md-6'>
                                          <input 
                                          type='password' 
                                          className='form-control'
                                          name='password'
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          value={values.password}
                                          autoComplete='off'
                                          placeholder='Enter password'
                                           />
                                           {errors.password && <p className="text-danger">{errors.password}</p>}
                                       </div>
                                   </div>
                                   <div className='form-group row mb-0'>
                                       <div className='col-md-6 offset-md-4'>
                                           <button type='submit'disabled={isSubmitting} className='btn btn-primary'>Register</button>
                                       </div>
                                   </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </React.Fragment>
    )
}

export default Register;
