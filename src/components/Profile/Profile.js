import React, { Component } from 'react';

import apiService from '../../services/apiService';
import stateService from '../../services/stateService';
import authService from '../../services/authService';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            gamertag: '',
            profilePicture: ''
        };
    }

    async componentDidMount() {
        try {
            const data = authService.getTokenPayload();
            const response = await apiService.sendRequest(`/user/${data.gamertag}`, 'GET');
            const { address, email, first_name, gamertag, id, last_name, profile_picture } = response.data.data;

            stateService.getFunction('changeNavTitle')(gamertag);
            this.setState({ id, email, gamertag, address, firstName: first_name, lastName: last_name, profilePicture: profile_picture });
        } catch (err) {
            console.error(err);
            stateService.getFunction('showNotification')('error', 'Profile Failure', err.response.data.message);
        }
    }

    async updateProfile(e) {
        e.preventDefault();

        const { id, firstName, lastName, email, address, gamertag, profilePicture } = this.state;
        const body = { id, address, email, gamertag, first_name: firstName, last_name: lastName, profile_picture: profilePicture };

        try {
            await apiService.sendRequest('/user/update', 'POST', body);
            stateService.getFunction('showNotification')('success', 'Profile Updated', 'Your profile has been updated');
        } catch (err) {
            console.error(err.response.data.message);
            stateService.getFunction('showNotification')('error', 'Update failed', err.response.data.message);
        }
    }

    changeGamertag(e) {
        const gamertag = e.target.value;
        this.setState({ gamertag });
    }

    changeFirstName(e) {
        const firstName = e.target.value;
        this.setState({ firstName });
    }

    changeLastName(e) {
        const lastName = e.target.value;
        this.setState({ lastName });
    }

    changeEmail(e) {
        const email = e.target.value;
        this.setState({ email });
    }

    changeAddress(e) {
        const address = e.target.value;
        this.setState({ address });
    }

    changeAvatar(e) {
        const profilePicture = e.target.value;
        this.setState({ profilePicture });
    }

    render() {
        const { firstName, lastName, email, address, gamertag, profilePicture } = this.state;

        return (
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header card-header-primary">
                            <h4 className="card-title">Edit Profile</h4>
                            <p className="card-category">Complete your profile</p>
                        </div>
                        <div className="card-body">
                            <form onSubmit={e => this.updateProfile(e)}>
                                <div className="row">
                                    <div className="col-md-5">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Gamertag</label>
                                            <input type="text" value={gamertag} className="form-control" onChange={(e) => this.changeGamertag(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">First Name</label>
                                            <input type="text" value={firstName} className="form-control" onChange={(e) => this.changeFirstName(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Last Name</label>
                                            <input type="text" value={lastName} className="form-control" onChange={(e) => this.changeLastName(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Email</label>
                                            <input type="email" value={email} className="form-control" onChange={(e) => this.changeEmail(e)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Address</label>
                                            <input type="text" value={address} className="form-control" onChange={(e) => this.changeAddress(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="bmd-label-floating">Avatar URL</label>
                                            <input type="text" value={profilePicture} className="form-control" onChange={(e) => this.changeAvatar(e)} />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary pull-right">Update Profile</button>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-profile">
                        <div className="card-avatar">
                            <a href="#pablo">
                                <img className="img" src={profilePicture} />
                            </a>
                        </div>
                        <div className="card-body">
                            <h6 className="card-category text-gray">{firstName}</h6>
                            <h4 className="card-title">{gamertag}</h4>
                            <p className="card-description" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;