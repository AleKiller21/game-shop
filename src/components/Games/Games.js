import React, { Component } from 'react';

import stateService from '../../services/stateService';

class Games extends Component {
    componentDidMount () {
        stateService.getFunction('changeNavTitle')('Games');
    }

    render () {
        return (
            <p>Hello World</p>
        );
    }
}

export default Games;