import types from '../actions/types';


const DEFAULT_STATE = {
    quote: ''
};

export default (state=DEFAULT_STATE,action)=>{
    switch(action.type){
        case types.GET_MOVIE_QUOTE:
            return {...state, quote: action.quote }; //this will be accessed on state by state.movie.quote
        default:
            return state;
    }
};