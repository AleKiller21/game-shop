import React, { Component } from 'react';
import { debounce } from 'lodash';

import Switcher from '../Switcher';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

import authService from '../../services/authService';
import stateService from '../../services/stateService';
import apiService from '../../services/apiService';

class Main extends Component {
    constructor (props) {
        super(props);

        this.state = { games: [], searchValue: '' };

        stateService.addFunctionToState('fetchGameList', this.fetchGameList.bind(this));
        stateService.addData('games', []);

        this.searchProduct = debounce(this.searchProduct, 500);
    }

    async fetchGameList () {
        try {
            const response = await apiService.sendRequest(`/games?name=${this.state.searchValue}`, 'GET');
            const games = response.data.data;
            stateService.addData('games', games);
            this.setState({ games });
        } catch (err) {
            console.log(err);
        }
    }

    handleSearch (name) {
        if (this.props.location.pathname !== '/store') this.props.history.push('/store');

        this.setState({ searchValue: name }, () => this.searchProduct())
    }

    searchProduct () {
        this.fetchGameList();
    }

    render() {
        return (
            <div className='wrapper'>
                <Sidebar />
                <div className='main-panel'>
                    <Navbar searchValue={this.state.searchValue} handleSearch={name => this.handleSearch(name)} />
                    <div className="content">
                        <div className="container-fluid">
                            <Switcher />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;