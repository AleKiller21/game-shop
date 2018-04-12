import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Games from './Games/Games';
import Game from './Game/Game';
import GameForm from './GameForm/GameForm';
import WithAuth from './HOC/WithAuth';

function Switcher () {
    return (
        <Switch>
            <Route exact path='/games' component={Games} />
            <Route exact path='/game/add' render={props => {
                const WithAuthGameForm = WithAuth(GameForm, props);
                return <WithAuthGameForm />;
            }} />
            <Route exact path='/game/:name' component={Game} />
        </Switch>
    );
}

export default Switcher;