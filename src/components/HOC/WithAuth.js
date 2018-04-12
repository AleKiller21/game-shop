import React, { Component } from 'react';
import authService from '../../services/authService';
import stateService from '../../services/stateService';

export default function WithAuth (CustomComponent, props) {
	return (class extends Component {
		async componentWillMount () {
			console.log('entro');
			const isAdmin = await authService.isCurrentUserAdmin();
			console.log(isAdmin);
			if (!isAdmin) {
				stateService.getFunction('showNotification')('err', 'Lack of Privileges', 'You are not authorized to access this view');
				props.history.replace('/games');
			}
		}

		render () {
			return <CustomComponent />;
		}
	});
}
