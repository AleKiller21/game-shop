import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Games from './Games/Games';

function Switcher () {
    return (
        <Switch>
            <Route exact path='/games' component={Games} /> 
        </Switch>
    );
}

export default Switcher;