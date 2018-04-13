import React, { Component } from 'react';

import TableData from '../TableData/TableData';

import apiService from '../../services/apiService';
import stateService from '../../services/stateService';

class Orders extends Component {
    constructor () {
        super();

        this.state = { orders: [] };
    }

    async componentDidMount () {
        try {
            const response = await apiService.sendRequest('/orders', 'GET');
            this.setState({ orders: response.data.data });
        } catch (err) {
            console.error(err);
            stateService.getFunction('showNotification')('error', 'Error', 'The list of orders could not be displayed');
        }
    }

    render() {
        const tableHeaders = ['Order Number', 'Gamertag', 'Game', 'Total', 'Status'];
        return <TableData headers={tableHeaders} data={this.state.orders} tableTitle='Orders' tableSubTitle="All the users' orders" />
    }
}

export default Orders;