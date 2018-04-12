import React, { Component } from 'react';

import stateService from '../../services/stateService';
import apiService from '../../services/apiService';

class GameForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            developer: '',
            publisher: '',
            price: '0',
            image: '',
            description: ''
        };
    }

    componentDidMount () {
        stateService.getFunction('changeNavTitle')('Add Game');
    }

    async addGame (e) {
        e.preventDefault();
        const { name, developer, publisher, price, image, description } = this.state;
        const body = { name, developer, publisher, price, image, description };

        try {
            const response = await apiService.sendRequest('/game/add', 'POST', body);
            stateService.getFunction('showNotification')('success', 'Success', 'Game has been added');
            this.props.history.push('/games');
        } catch (err) {
            console.log(err.response);
            stateService.getFunction('showNotification')('error', 'Error', 'An error has ocurred');
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Insert Game into Store Database</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => this.addGame(e)}>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Name</label>
                                            <input type="text" className="form-control" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Developer</label>
                                            <input type="text" className="form-control" value={this.state.developer} onChange={e => this.setState({ developer: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Publisher</label>
                                            <input type="text" className="form-control" value={this.state.publisher} onChange={e => this.setState({ publisher: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Price</label>
                                            <input type="text" className="form-control" value={this.state.price} onChange={e => this.setState({ price: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Image</label>
                                            <input type="text" className="form-control" value={this.state.image} onChange={e => this.setState({ image: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <div className="form-group">
                                                <textarea className="form-control" rows="5" value={this.state.description} onChange={e => this.setState({ description: e.target.value })}></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary pull-right">Add Game</button>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameForm;