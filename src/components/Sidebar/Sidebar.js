import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from '../SidebarItem/SidebarItem';
import sidebarRoutes from '../../config/sidebarRoutes';

import '../../assets/css/sidebar.css'

class Sidebar extends Component {
    constructor () {
        super();
        this.state = { status: [], current: 0 };
    }

    componentDidMount () {
        const status = [];
        sidebarRoutes.map((route, indx) => status[indx] = route.active);
        this.setState({ status }, () => console.log(this.state.status));
    }

    onChangeRoute (indx) {
        if (indx === this.state.current) return;

        const status = this.state.status.slice();
        status[indx] = true;
        status[this.state.current] = false;

        this.setState({ status, current: indx }, () => console.log(this.state.status));
    }

    render() {
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