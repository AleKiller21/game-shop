import React, { Component } from 'react';

import Switcher from '../Switcher';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

import authService from '../../services/authService';
import stateService from '../../services/stateService';
import apiService from '../../services/apiService';

class Main extends Component {
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