import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Switcher from './Switcher';
import Login from './Login/Login'

function App () {
    return (
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/' component={Switcher} />
        </Switch>
    );
}

export default App;