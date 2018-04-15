import React, { Component } from 'react';
import authService from '../../services/authService';
import stateService from '../../services/stateService';

export default function WithAuth (CustomComponent, props) {
	return (class extends Component {
		componentWillMount () {
            const isLogin = localStorage.getItem('token');
			if (!isLogin) {
				props.history.replace('/');
			}
		}

		render () {
			return <CustomComponent {...props} />;
		}
	});
}
