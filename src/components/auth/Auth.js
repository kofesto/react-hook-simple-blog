import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export function Private(WrappedComponent){
    let token = null; 
    const user = JSON.parse(window.sessionStorage.getItem("current_user"));
    if(!user || (user && user.user) === undefined){
        token = null;
    }else{
        token = user.user.token;
    }
    return class extends Component{
        render(){
            return token ? (<WrappedComponent {...this.props} />):(<Redirect to='login' />);
        }
    }
}

