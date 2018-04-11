import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../assets/css/sidebar-item.css'

function SidebarItem(props) {
    const active = props.isActive ? 'active' : '';

    return (
        <li className={`nav-item ${active}`}>
            <Link className='nav-link item-text' to={props.path}>
                <i className='material-icons'>{props.icon}</i>
                <p>{props.title}</p>
            </Link>
        </li>
    );
}

SidebarItem.propTypes = {
    isActive: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default SidebarItem;