import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../assets/css/sidebar-item.css'

class SidebarItem extends Component {
    render() {
        const active = this.props.active ? 'active' : '';

        return (
            <li className={`nav-item ${active}`}>
                <Link className='nav-link item-text' to={this.props.path} onClick={this.props.changeRoute}>
                    <i className='material-icons'>{this.props.icon}</i>
                    <p>{this.props.title}</p>
                </Link>
            </li>
        );
    }
}

SidebarItem.propTypes = {
    active: PropTypes.bool.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    changeRoute: PropTypes.func.isRequired
};

export default SidebarItem;