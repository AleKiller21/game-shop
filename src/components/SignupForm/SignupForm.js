import React, { Component } from 'react';
import Button from 'material-ui/Button'
import PropTypes from 'prop-types';


import apiService from '../../services/apiService';
import stateService from '../../services/stateService';

class SignupForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            gamertag: '',
            profilePicture: '',
            password: ''
        };
    }

    onChangeFirstName (e) {
        this.setState({ firstName: e.target.value });
    }

    onChangeLastName (e) {
        this.setState({ lastName: e.target.value });
    }

    onChangeEmail (e) {
        this.setState({ email: e.target.value });
    }

    onChangeAddress (e) {
        this.setState({ address: e.target.value });
    }

    onChangeGamertag (e) {
        this.setState({ gamertag: e.target.value });
    }

    onChangeProfilePicture (e) {
        this.setState({ profilePicture: e.target.value });
    }

    onChangePassword (e) {
        this.setState({ password: e.target.value });
    }

    async handleSignUp (e) {
        e.preventDefault();
        const { firstName, lastName, email, address, gamertag, profilePicture, password } = this.state;
        const body = { first_name: firstName, last_name: lastName, email, address, gamertag, profile_picture: profilePicture, password };

        try {
            await apiService.sendRequest('/user/add', 'POST', body);
            stateService.getFunction('showNotification')('success', 'Success', 'The user has been created');
            this.props.redirectLogin(null);
        } catch (err) {
            console.error(err);
            stateService.getFunction('showNotification')('error', 'Error', err.response.data);
        }
    }

    render () {
        return (
            <form className="login100-form validate-form" onSubmit={e => this.handleSignUp(e)}>
                <span className="login100-form-title p-b-33">Account Creation</span>
    
                <div className="wrap-input100 validate-input" data-validate="First Name is required">
                    <input className="input100" type="text" placeholder="First Name" value={this.state.firstName} onChange={e => this.onChangeFirstName(e)} />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div><br/>
    
                <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                    <input className="input100" type="text" placeholder="Last Name" value={this.state.lastName} onChange={e => this.onChangeLastName(e)} />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div><br/>
    
                <div className="wrap-input100 validate-input" data-validate="Email is required">
                    <input className="input100" type="email" placeholder="Email" value={this.state.email} onChange={e => this.onChangeEmail(e)} />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div><br/>
    
                <div className="wrap-input100 validate-input" data-validate="Address is required">
                    <input className="input100" type="text" placeholder="Address" value={this.state.address} onChange={e => this.onChangeAddress(e)} />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div><br/>
    
                <div className="wrap-input100 validate-input" data-validate="Gamertag is required">
                    <input className="input100" type="text" placeholder="Gamertag" value={this.state.gamertag} onChange={e => this.onChangeGamertag(e)} />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div><br/>
    
                <div className="wrap-input100 validate-input" data-validate="Image url is required">
                    <input className="input100" type="text" placeholder="Profile picture image url" value={this.state.profilePicture} onChange={e => this.onChangeProfilePicture(e)} />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div><br/>
    
                <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" placeholder="Password" value={this.state.password} onChange={e => this.onChangePassword(e)} />
                    <span className="focus-input100-1"></span>
                    <span className="focus-input100-2"></span>
                </div><br/>
    
                <div className="container-login100-form-btn m-t-20">
                    <Button type='submit' size='large' className="container-login100-form-btn m-t-20" variant="raised" color="primary">Sign up</Button>
                </div>

                <div className="text-center">    
                    <a href='' className="txt2 hov1" onClick={this.props.redirectLogin}>Go back to login</a>
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    handleRedirect: PropTypes.func.isRequired,
    redirectLogin: PropTypes.func.isRequired
};

export default SignupForm;