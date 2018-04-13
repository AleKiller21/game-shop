import React, { Component } from 'react'
// import Button from 'material-ui/Button'
// import { Link } from 'react-router-dom';

import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';

import apiService from '../../services/apiService';
import stateService from '../../services/stateService';
import authService from '../../services/authService';

import '../../assets/css/login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '', view: 'signup' };
  }

  componentDidMount() {
    authService.logOut();
    stateService.addData('userInfo', {});
  }

  onChangeUsername(e) {
    const email = e.target.value;
    this.setState({ email });
  }

  onChangePassword(e) {
    const password = e.target.value;
    this.setState({ password });
  }

  async doLogin(e) {
    e.preventDefault();

    const { email, password } = this.state;
    const body = { email, password };

    try {
      const result = await apiService.sendRequest('/login', 'POST', body);
      const { gamertag, token } = result.data.data;
      stateService.getFunction('showNotification')('success', 'Success', `Welcome ${gamertag}`);

      localStorage.setItem('token', token);
      localStorage.setItem('gamertag', gamertag);

      this.props.history.push('/store');

    } catch (err) {
      console.log(err.response.data.message);
      stateService.getFunction('showNotification')('error', 'Invalid credentials', err.response.data.message);
    }
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            { this.state.view === 'login' ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
    )
  }
}

export default Login
