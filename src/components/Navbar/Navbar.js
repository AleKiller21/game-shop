import React, { Component } from 'react';

import stateService from '../../services/stateService';

import '../../assets/css/navbar.css';

class Navbar extends Component {
    constructor (props) {
        super(props);

        this.state = { title: '' };
        stateService.addFunctionToState('changeNavTitle', this.changeNavTitle.bind(this));
    }

    changeNavTitle (title) {
        this.setState({ title });
    }

    search (e) {
        const searchValue = e.target.value;
        this.props.handleSearch(searchValue);
    }

    render() {
        const { title } = this.state;

        return (
            <nav className="navbar navbar-expand-lg navbar-color navbar-absolute fixed-top">
                <div className="container-fluid">
                    <div className="navbar-wrapper">
                        <a className="navbar-brand navbar-title">{title}</a>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <form className="navbar-form">
                            <div className="input-group no-border">
                                <input type="text" value={this.props.searchValue} className="form-control" placeholder="Search..." onChange={e => this.search(e)} />
                                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                    <i className="material-icons">search</i>
                                    <div className="ripple-container"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;