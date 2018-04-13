import React, { Component } from 'react';

import Switcher from '../Switcher';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

import authService from '../../services/authService';
import stateService from '../../services/stateService';
import apiService from '../../services/apiService';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { isAdmin: false };
    }

    async componentDidMount() {
        const isAdmin = await authService.isCurrentUserAdmin();
        const gamertag = localStorage.getItem('gamertag');

        if (gamertag) {
            try {
                const response = await apiService.sendRequest(`/user/${gamertag}`, 'GET');

                stateService.addData('userInfo', response.data.data);
                stateService.addData('isAdmin', isAdmin);
                console.log(isAdmin);
                this.setState({ isAdmin });
            } catch (err) {
                console.error(err);
                stateService.getFunction('showNotification')('error', 'Invalid credentials', err.response.data.message);
                this.props.history.replace('/');
            }
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <Sidebar />
                <div className='main-panel'>
                    <Navbar />
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