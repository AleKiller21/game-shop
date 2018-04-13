import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Games from './Games/Games';
import Game from './Game/Game';
import GameForm from './GameForm/GameForm';
import Orders from './Orders/Orders';
import WithAuthAdmin from './HOC/WithAuthAdmin';
import WithAuth from './HOC/WithAuth';

function Switcher () {
    return (
        <Switch>
            <Route exact path='/store' component={Games} />
            <Route exact path='/game/edit/:name?' render={props => {
                const WithAuthAdminGameForm = WithAuthAdmin(GameForm, props);
                return <WithAuthAdminGameForm />;
            }} />
            <Route exact path='/orders' render={props => {
                const WithAuthOrders = WithAuth(Orders, props);
                return <WithAuthOrders />;
            }} />
            <Route exact path='/store/:name' component={Game} />
        </Switch>
    );
}

export default Switcher;