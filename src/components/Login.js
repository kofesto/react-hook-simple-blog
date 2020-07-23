import React from 'react'
import Header from './layouts/Header';
import useFormValidation from './useFormValidation';
import validateAuth from './validateAuth';

const INITIAL_STATE = {
    email:"",
    password:""
}

const Login = () => {
    const {handleSubmit,handleChange,handleBlur,values,errors,isSubmitting} = useFormValidation(INITIAL_STATE,validateAuth);
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');
    /*
    const [login, setLogin] = useState(false)
    const [email, password] = values;
     const submit = e => {
    e.preventDefault()
    fetch(`http://localhost:8080/auth/login`, {
      method: 'POST',
      //body: JSON.stringify({ email, comment }),
      body: JSON.stringify({ email, password }),
      headers : {'Content-Type':'application/json'}
    }).then(() => setLogin(true))
  }

  if(login){
      window.sessionStorage.setItem('current_user',token);
      <Redirect to='/dashboard' />
  }
    */

    return (
        <React.Fragment>
            <Header/>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className='card'>
                            <div className='card-header'><h2 className='text-center'>Login</h2></div>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit} method='POST'>
                                    <div className='form-group row'>
                                        <label className='col-md-4 col-form-label text-md-right'>Email</label>
                                        <div className='col-md-6'>
                                            <input 
                                            type='email'
                                            name='email' 
                                            className='form-control'
                                            onChange={handleChange}
                                            onBlur ={handleBlur}
                                            value={values.email} 
                                            placeholder='Enter email address'
                                            autoComplete='off' 
                                            />
                                            {errors.email && <p className="text-danger">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className='form-group row'>
                                        <label className='col-md-4 col-form-label text-md-right'>Password</label>
                                        <div className='col-md-6'>
                                            <input 
                                            type='password' 
                                            name='password'
                                            className='form-control'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password} 
                                            placeholder='Enter Password'
                                            autoComplete='off' 
                                            />
                                            
                                        </div>
                                        {errors.password && <p className="text-danger">{errors.password}</p>}
                                    </div>
                                    <div className='form-group row mb-0'>
                                        <div className='col-md-6 offset-md-4'>
                                            <button disabled={isSubmitting} type='submit' className='btn btn-primary'>Login</button>
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

export default Login
