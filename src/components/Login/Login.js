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

    this.state = { view: 'login' };
  }

  componentDidMount() {
    authService.logOut();
  }

  handleRedirect() {
    this.props.history.push('/store');
  }

  redirectSignUp(e) {
    e.preventDefault();
    this.setState({ view: 'signup' });
  }

  redirectLogin(e) {
    if (e) e.preventDefault();

    this.setState({ view: 'login' });
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            {this.state.view === 'login' ? (<LoginForm handleRedirect={() => this.handleRedirect()} redirectSignUp={(e) => this.redirectSignUp(e)} />) : <SignupForm handleRedirect={() => this.handleRedirect()} redirectLogin={(e) => this.redirectLogin(e)} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Login
