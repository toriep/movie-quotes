import React from 'react';
import { Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import About from './about';
import Home from './home';
import List from './list';
import MovieQuote from './movie_quote.js';
import Nav from './nav';
import SignIn from './sign_in';
import SignUp from './sign_up';
import auth from '../hoc/auth';

import { secret,people } from '../data/lists';


const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path ="/" component={Home} />
            <Route exact path ="/about" component={auth(About)} />
            <Route exact path ="/movie-quote" component={auth(MovieQuote)} />
            <Route exact path ="/person-list" render={
                props => <List {...props} title="List of People" list={people} />
            } />
            <Route exact path ="/secret-list" component={
                auth(props => <List {...props} title="Secret Operative List" list={secret}/>)
            }/>
            <Route exact path ="/sign-in" component={SignIn} />
            <Route exact path ="/sign-up" component={SignUp} />
        </div>
    </div>
);

export default App;
