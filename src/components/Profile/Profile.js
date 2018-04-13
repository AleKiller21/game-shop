import React, { Component } from 'react';

class Profile extends Component {
    render () {
        return (
            <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header card-header-primary">
                                    <h4 className="card-title">Edit Profile</h4>
                                    <p className="card-category">Complete your profile</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Gamertag</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">First Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Last Name</label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Email</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Address</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="bmd-label-floating">Adress</label>
                                                    <input type="text" className="form-control" />
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
                                        <img className="img" src="../assets/img/faces/marc.jpg" />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h6 className="card-category text-gray">CEO / Co-Founder</h6>
                                    <h4 className="card-title">Alec Thompson</h4>
                                    <p className="card-description" />
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Profile;