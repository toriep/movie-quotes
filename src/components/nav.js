import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutActionCreator } from '../actions';

class Nav extends Component {
    renderLinks(){//this function determines what would be displayed on the nav bar based on the user auth status
        const {auth} = this.props;

        if(auth){//if user is logged in
            return (
                <Fragment>
                    <li>
                        <Link to="/secret-list">Secret List</Link>
                    </li>
                    <li>
                        <Link to="/movie-quote">Movie Quote</Link>
                    </li>
                    <li>
                        <button onClick={this.props.signOutActionCreator} className="btn red darken-2">Sign Out</button>
                    </li>
                </Fragment>
            )
        }

        return (//if user is not logged in
            <Fragment>{/*You cant put props in fragment */}
                <li>
                    <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                    <Link to="/sign-up">Sign Up</Link>
                </li>
            </Fragment>
        )
    }

    render() {

        const navStyle = {
            padding: '0 12px'
        }

        return (
            <nav style={navStyle} className="indigo">
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Movie Quotes</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/person-list">Person List</Link>
                        </li>
                        {this.renderLinks()}{/*this saves you from doing a ton of ternary in JSX */}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.user.auth //this returns the current auth status
    }
}

export default connect(mapStateToProps,{signOutActionCreator})(Nav);//this connects auth status to Nav component
