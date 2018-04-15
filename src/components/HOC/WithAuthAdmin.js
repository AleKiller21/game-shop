import React, { Component } from 'react';
import authService from '../../services/authService';
import stateService from '../../services/stateService';

export default function WithAuthAdmin (CustomComponent, props) {
	return (class extends Component {
		componentWillMount () {
			const isAdmin = authService.isCurrentUserAdmin();
			if (!isAdmin) {
				stateService.getFunction('showNotification')('err', 'Lack of Privileges', 'You are not authorized to access this view');
				props.history.replace('/');
			}
		}

		render () {
			return <CustomComponent {...props} />;
		}
	});
}
