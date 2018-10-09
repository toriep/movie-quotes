import React, { Component } from 'react';
import { connect } from 'react-redux';


export default (WrappedComponent)=>{//this is just a function with a class in it that returns a class component. That's all HOC is
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){//when something updates, it checks for auth
            this.checkAuth();
        }

        checkAuth(){//this function checks whether user is signed in
            if(!this.props.auth){//if user is not logged in
                this.props.history.push('/sign-in');//locate them to somewhere else, in this case sig-in
            }
        }

        render(){
            return <WrappedComponent log={this.log} />;
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);
};

//now anywhere we put auth component, it will check if user is signed in


