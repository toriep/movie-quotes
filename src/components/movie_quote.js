import React from 'react';
import auth from '../hoc/auth';//importing the hoc function

 const MovieQuote = props => {
    return (
    <div  className="center">
        <h1>Movie Quotes!</h1>
        <h4>Hallelllllluh</h4>
    </div>
 );
}
 export default auth(MovieQuote);//we wrap MovieQuote with higher order component auth and auth has log function in it
 //now anywhere moviequote is used, it is protected