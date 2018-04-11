import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Games from './Games/Games';
import GameForm from './GameForm/GameForm';

function Switcher () {
    return (
        <Switch>
            <Route exact path='/games' component={Games} />
            <Route exact path='/game/add' component={GameForm} />
        </Switch>
    );
}

export default Switcher;