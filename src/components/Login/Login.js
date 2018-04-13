import React, { Component } from 'react'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom';

import apiService from '../../services/apiService';
import stateService from '../../services/stateService';
import authService from '../../services/authService';

import '../../assets/css/login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
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
            <form className="login100-form validate-form" onSubmit={e => this.doLogin(e)}>
              <span className="login100-form-title p-b-33">Account Login</span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" value={this.state.email} onChange={e => this.onChangeUsername(e)} />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" value={this.state.password} onChange={e => this.onChangePassword(e)} />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="container-login100-form-btn m-t-20">
                <Button type='submit' size='large' className="container-login100-form-btn m-t-20" variant="raised" color="primary">Sign in</Button>
              </div>

              <div className="text-center p-t-45 p-b-4">
                <span className="txt1">Forgot&nbsp;</span>
                <a href="#" className="txt2 hov1">Username / Password?</a>
              </div>

              <div className="text-center">
                <span className="txt1">Create an account?&nbsp;</span>

                <a href="#" className="txt2 hov1">Sign up</a>
              </div>

              <div className="text-center">
                {/* <span className="txt1">Continue as guest&nbsp;</span> */}

                <Link to='/store' className="txt2 hov1" onClick={() => stateService.addData('isAdmin', false)}>Continue as guest</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
