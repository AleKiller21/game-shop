import React, { Component } from 'react';

import TableData from '../TableData/TableData';

import apiService from '../../services/apiService';
import stateService from '../../services/stateService';
import authService from '../../services/authService';

class Orders extends Component {
    constructor (props) {
        super(props);

        this.state = { orders: [] };
    }

    async componentDidMount () {
        const isAdmin = authService.isCurrentUserAdmin();
        try {
            const response = isAdmin ? await apiService.sendRequest('/orders', 'GET') : await apiService.sendRequest('/orders/user', 'GET');
            this.setState({ orders: response.data.data });
        } catch (err) {
            console.error(err);
            stateService.getFunction('showNotification')('error', 'Error', 'Action is forbidden');
            this.props.history.replace('/');
        }
    }

    render() {
        const tableHeaders = ['Order Number', 'Gamertag', 'Game', 'Total', 'Status'];
        return <TableData headers={tableHeaders} data={this.state.orders} tableTitle='Orders' tableSubTitle="All the users' orders" />
    }
}

export default Orders;