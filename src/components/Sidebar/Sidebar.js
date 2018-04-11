import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from '../SidebarItem/SidebarItem';
import sidebarRoutes from '../../config/sidebarRoutes';

import '../../assets/css/sidebar.css'

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar container">
                <div className="logo">
                    <Link className="simple-text logo-normal logo-sidebar" to='/'>
                        Store
                    </Link>
                </div>

                <div className="sidebar-wrapper">
                    <ul className="nav">
                        {sidebarRoutes.map((route, indx) =>
                            <SidebarItem key={indx} isActive={false}
                                path={route.path}
                                icon={route.icon}
                                title={route.title}
                            />)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;