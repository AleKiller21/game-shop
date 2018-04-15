import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from '../SidebarItem/SidebarItem';
import sidebarRoutes from '../../config/sidebarRoutes';

import stateService from '../../services/stateService';
import authService from '../../services/authService';

import '../../assets/css/sidebar.css'

class Sidebar extends Component {
    constructor () {
        super();
        this.state = { status: [], current: 0 };
    }

    componentDidMount () {
        const status = [];
        sidebarRoutes.map((route, indx) => status[indx] = route.active);
        this.setState({ status });
    }

    onChangeRoute (indx) {
        if (indx === this.state.current) return;

        const status = this.state.status.slice();
        status[indx] = true;
        status[this.state.current] = false;

        this.setState({ status, current: indx });
    }

    render() {
        const isAuthenticated = localStorage.getItem('token');
        const isAdmin = authService.isCurrentUserAdmin();

        return (
            <div className="sidebar">
                <div className="logo">
                    <Link className="simple-text logo-normal logo-sidebar" to='/'>
                        Store
                    </Link>
                </div>

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {sidebarRoutes.map((route, indx) => {
                            const active = this.state.status[indx];

                            if (route.auth && !isAuthenticated) return '';
                            if (route.role === 'admin' && !isAdmin) return '';

                            return <SidebarItem key={indx} active={active}
                                path={route.path}
                                icon={route.icon}
                                title={route.title}
                                changeRoute = {() => this.onChangeRoute(indx)}
                            />})}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;