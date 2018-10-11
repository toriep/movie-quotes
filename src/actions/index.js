import types from './types';
import axios from 'axios';

export const signUpActionCreator = (userInfo) => {
    console.log('userInfo inside signUp action creator :', userInfo);
    return async (dispatch) => {//this function gives us access to dispatch method when we pass it dispatch and the functoin gets called
        //this is not a react or redux thing, it's just Javascript
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);
            console.log('Sign Up response :', resp);
            localStorage.setItem('token', response.data.token);//when someone signs u, log them in 

            dispatch({
                type: types.SIGN_UP
            })
        } catch(err){//anything went wrong in try, it stopped there and jumps down to catch block
            //err.response.data
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Error creating account'
            })
        }
    }
}

export const signInActionCreator = (userInfo) => async dispatch => {//short hand code but the same as above
    try{
        console.log('userInfo inside signIn action creator :', userInfo);
        const response = await axios.post('http://api.reactprototypes.com/signin', userInfo)
        console.log('Sign In response :', response);
        localStorage.setItem('token', response.data.token);//this saves the user token to localStorge so that they dont have to sign in again when the page reloads
        dispatch({
            type: types.SIGN_IN
        });
    } catch(err){
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid Email and/or Password'
        })
    }
}

export const signOutActionCreator = () => {
    localStorage.removeItem('token');//remove user token from localStorage

    return {
        type: types.SIGN_OUT
    };
}

export const getMovieQuote = () => async dispatch => {
    try{

        const axiosConfig = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        };

        const resp = await axios.get('http://api.reactprototypes.com', axiosConfig);

        console.log('Movie Quote resp :', resp);

        dispatch({//whatever dispatched here goes int to the action object, which goes into a reducer
            type: types.GET_MOVIE_QUOTE,
            quote: resp.data.message//if you thunk, you can use any property, not just payload
        })

    } catch(err){
        console.log('Movie Quote Error', err.message);
    }
}