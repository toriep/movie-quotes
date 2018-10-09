import types from './types';
import axios from 'axios';

export const signUpActionCreator = (userInfo) => {
    console.log('userInfo inside signUp action creator :', userInfo);
    return async (dispatch) => {//this function gives us access to dispatch method when we pass it dispatch and the functoin gets called
        //this is not a react or redux thing, it's just Javascript
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);

            console.log('Sign Up response :', resp);
        } catch(err){//anything went wrong in try, it stopped there and jumps down to catch block
            console.log('Sign Up error :', err.message);
        }
    }
}