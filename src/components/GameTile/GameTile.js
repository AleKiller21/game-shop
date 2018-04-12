import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../assets/css/game-tile.css';

class GameTile extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-3 col-md-4 col-xs-6">
                <Link to={`/game/${this.props.title}`} className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail game-cover" src={this.props.url} alt={this.props.title} />
                </Link>
            </div>
        );
    }
}

GameTile.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default GameTile;