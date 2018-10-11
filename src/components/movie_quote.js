import React, { Component } from 'react';
import auth from '../hoc/auth';//importing the hoc function
import { connect } from 'react-redux';
import { getMovieQuote} from '../actions'

 class MovieQuote extends Component {
     
     componentDidMount() {
         this.props.getMovieQuote();
     }
     
    render(){
        return (
            <div  className="center">
                <h1>Movie Quotes!</h1>
                <h4>{this.props.quote}</h4>
            </div>
         );
    }
}

function mapStateToProps(state){
    return {
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps,{getMovieQuote})(MovieQuote);//we wrap MovieQuote with higher order component auth and auth has log function in it
 //now anywhere moviequote is used, it is protected