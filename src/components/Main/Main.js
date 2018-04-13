import React, { Component } from 'react';

import Switcher from '../Switcher';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

import authService from '../../services/authService';
import stateService from '../../services/stateService';

class Main extends Component {
    constructor (props) {
        super(props);
        
        this.state = { isAdmin: false };
    }

    async componentDidMount () {
        const isAdmin = await authService.isCurrentUserAdmin();
        console.log(isAdmin);
        stateService.addData('isAdmin', isAdmin);
        this.setState({ isAdmin });
    }

    render () {
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