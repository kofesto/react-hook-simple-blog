export default function validateAuth(values){
    let errors = {};
    //Email errors;
    if(!values.email){
        errors.email = 'Email is required';
    }else if(
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ){
        errors.email = 'Invalid email address';
    }
    //password errors
    if(!values.password){
        errors.password = 'password is required';
    }else if(values.password.length < 6){
        errors.password = 'Password must be at least 6 characters'; 
    }
    //first name
    if(!values.firstname){
        errors.firstname = 'First Name is required';
    }
    
    if(!values.lastname){
        errors.lastname = 'Last Name is required';
    }
    return errors;
}