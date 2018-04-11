import React, { Component } from 'react';

import stateService from '../../services/stateService';

class Games extends Component {
    componentDidMount() {
        stateService.getFunction('changeNavTitle')('Games');
    }

    render() {
        return (
            <div className="row text-center text-lg-left">
                <div className="col-lg-3 col-md-4 col-xs-6">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
                    </a>
                </div>
                <div className="col-lg-3 col-md-4 col-xs-6">
                    <a href="#" className="d-block mb-4 h-100">
                        <img className="img-fluid img-thumbnail" src="http://placehold.it/400x300" alt="" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Games;