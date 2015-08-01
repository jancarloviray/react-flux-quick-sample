import React from 'react';
import {Route} from 'react-router';
import App from './components/app';
import Home from './components/home';

export default (
    <Route handler={App}>
        <Route path='/' handler={Home}/>
    </Route>
);
