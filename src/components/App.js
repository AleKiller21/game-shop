import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import 'react-notifications/lib/notifications.css';

import Main from './Main/Main';
import Login from './Login/Login'

import stateService from '../services/stateService';

class App extends Component {
    constructor () {
        super();

        stateService.addFunctionToState('showNotification', (type, header, message) => this.createNotification(type, header, message));
    }

    createNotification (type, header, message) {
        switch (type) {
            case 'info':
              NotificationManager.info(message);
              break;
            case 'success':
              NotificationManager.success(message, header)
              break;
            case 'warning':
              NotificationManager.warning(message, header, 3000);
              break;
            case 'error':
              NotificationManager.error(message);
              break;
          }
      }

    render () {
        return (
            <div>
                <NotificationContainer />
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/' component={Main} />
                </Switch>
            </div>
        );
    }
}

export default App;