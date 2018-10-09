import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,//this is info about where or not we're logged in
    // name: 'blah',
    // email: 'blah',
    // pwAndId: 'NO STORE HERE'
};

export default (state = DEFAULT_STATE, action)=>{
    switch(action.type){
        case types.SIGN_IN:
        case types.SIGN_UP:
            return {...state, auth: true};
        case types.SIGN_OUT:
            return {...state, auth: false};
        default:
            return state;
    }
};