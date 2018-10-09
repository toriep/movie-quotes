export default (store) => (next) => (action) => {//action value will be whatever return from signUp function from action folder index.js
    if(typeof action !== 'function'){//if we dont have a function, we dont do anything
        return next(action);//this is how we move on, we dont pass in anything or do anything
    }
    //if it returns a funcction
    return action(store.dispatch);//when we call this function, we're calling the dispatch function inside the action creator
};

//^this is basically redux thunk