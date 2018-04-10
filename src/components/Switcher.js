import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';

function Switcher () {
    return (
        <Switch>
            <Route exact path='/' component={Home} /> 
        </Switch>
    );
}

export default Switcher;