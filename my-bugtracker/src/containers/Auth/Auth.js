import React, { Component } from 'react';

import * as utility from '../../utilities/utilityFunctions';
import Aux from '../../hoc/Auxilary';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';

class Auth extends Component {
    state = {
        loginForm:{
            user: utility.createInputElement('input', { type: 'text', placeholder: 'Username' }, ''),
            password: utility.createInputElement('input', { type: 'password', placeholder: 'Password' }, '')
        },
        isSignUp: true
    }

    submitHandler = (event)=>{
        event.preventDefault();
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp }
        })
    }

    render() {
        let formContent = [];
        for (const key in this.state.loginForm) {
            const element = this.state.loginForm[key];
            formContent.push(
                <Input className={classes.Input} key={key} inputtype={element.elementType} id={key}
                    {...element.elementConfig} />
            )
        }
        return (
            <div className={classes.Auth}>
                <form onSubmit={this.submitHandler}>
                    {formContent}
                    <Button btnType="Success" >SUBMIT</Button>
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger">Switch to {this.state.isSignUp ? 'SIGN IN' : 'REGISTER'}</Button>
            </div>
        );
    }
}

export default Auth;