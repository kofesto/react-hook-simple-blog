import React from 'react';

function useFormValidation(initialState,validate){
   const [values, setValues] = React.useState(initialState);
   const [errors, setErrors] = React.useState({});
   const [isSubmitting,setSubmitting] = React.useState(false);

   React.useEffect(()=>{
       if(isSubmitting){
           const noErrors = Object.keys(errors).length === 0;
           if(noErrors){
            console.log("authenticated! ",values.email,values.password);
            setSubmitting(false);
           }else{
               setSubmitting(false);
           }
       }
   },[errors,values,isSubmitting]);

   function handleChange(event){
        setValues({
            ...values,
            [event.target.name] : event.target.value
        })
    }

    function handleBlur(){
        const validationErrors = validate(values);
        setErrors(validationErrors);
    }

    function handleSubmit(event){
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        /*
        fetch(`http://localhost:8080/auth/login`, {
            method: 'POST',
            //body: JSON.stringify({ email, comment }),
            body: JSON.stringify({ email, password }),
            headers : {'Content-Type':'application/json'}
            }).then(() => setLogin(true))
        }

        */
        setSubmitting(true);
    }
    return {handleSubmit,handleChange,handleBlur,values,errors,isSubmitting}

}

export default useFormValidation;