import React, { Component } from 'react';
import authService from '../../services/authService';
import stateService from '../../services/stateService';

export default function WithAuth (CustomComponent, props) {
	return (class extends Component {
		componentWillMount () {
            const isLogin = localStorage.getItem('token');
            console.log(isLogin);
			if (!isLogin) {
				props.history.replace('/store');
			}
		}

		render () {
			return <CustomComponent {...props} />;
		}
	});
}
