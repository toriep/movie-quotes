import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';
import { renderInput } from '../helpers';
import { connect } from 'react-redux';
import { signUpActionCreator } from '../actions';



class SignUp extends Component {
    userSignUp = (values) => {
        console.log('User Sign Up Info :', values);
        this.props.signUpActionCreator(values);
    }

    render() {
        console.log('Sign Up this.props :', this.props);//see all the info the get passed from redux-form

        const {handleSubmit} = this.props;//pulling handleSubmit function from redux-form

        return (
            <div>
                <h1 className="center">Sign Up!</h1>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <Field name="email" label="Email" component={renderInput}/>
                    <Field name="password" label="Password" type="password" component={renderInput} />
                    <Field name="confirmPassword" label="Confirm Password" type="password" component={renderInput} />
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn orange darken-1">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

//you can do whatever check you want with redux-form
function validate(values){//values is an object
    const { email, password, confirmPassword } = values;
    const errors = {};
//you can do a regex check inside here as well
    if(!email){//if there's no email
        errors.email = 'Please enter your email';//adds an email propety to redux form errors
    }
    if(!password){
        errors.password = 'Please enter a password';
    }
    if(password!==confirmPassword){
        errors.confirmPassword='Passwords do not match';
    }

    return errors;//what ultimately matters is the object created at the end, you can build this object however you want
}

SignUp = reduxForm({
    form: 'sign-up', //the only required key is form name
    validate: validate, //functon name do not matter but key needs to be 'validate'
})(SignUp);

export default connect(null,{signUpActionCreator})(SignUp);