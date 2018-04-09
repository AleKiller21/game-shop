import React, { Component } from 'react';
import Login from './Login/Login'
import { Switch, Route } from 'react-router-dom';

function App () {
    return (
        <Switch>
            <Route exact path='/login' component={Login} />
        </Switch>
    );
}

export default App;