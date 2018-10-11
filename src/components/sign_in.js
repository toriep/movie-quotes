import React, { Component } from 'react';
import { Field, reduxForm  } from 'redux-form';
import { renderInput } from '../helpers';
import { connect } from 'react-redux';
import { signInActionCreator } from '../actions';


class SignIn extends Component {

    userSignIn = (values) => {
        console.log('User Sign In values :', values);
        this.props.signInActionCreator(values);
    }

    render() {
        // console.log('Sign In this.props :', this.props);//see all the info the get passed from redux-form

        const {handleSubmit, authError} = this.props;//pulling handleSubmit function from redux-form

        return (
            <div>
                <h1 className="center">Sign In</h1>
                <form onSubmit={handleSubmit(this.userSignIn)}>
                    <Field name="email" label="Email" component={renderInput}/>
                    <Field name="password" label="Password" type="password" component={renderInput} />
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className="btn orange darken-3">Sign In</button>
                            <p className="red-text text-darken-2">{authError}</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

//you can do whatever check you want with redux-form
function validate(values){//values is an object
    const { email, password } = values;
    const errors = {};
//you can do a regex check inside here as well
    if(!email){//if there's no email
        errors.email = 'Please enter your email';//adds an email propety to redux form errors
    }
    if(!password){
        errors.password = 'Please enter a password';
    }

    return errors;//what ultimately matters is the object created at the end, you can build this object however you want
}

SignIn = reduxForm({
    form: 'sign-In', //the only required key is form name
    validate: validate, //functon name do not matter but key needs to be 'validate'
})(SignIn);

function mapStateToProps(state){
    return {
        authError: state.user.signInError//you have to use authError or whatever other name, and not 'error' because redux form already has a property named 'error'
    }
}

export default connect(mapStateToProps,{signInActionCreator})(SignIn);