import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

import stateService from '../../services/stateService';
import authService from '../../services/authService';

import '../../assets/css/games.css';

class Games extends Component {
    constructor (props) {
        super(props);

        this.state = { addBtnClasses: 'add-game-btn hide-add-game-btn' };
    }

    async componentDidMount() {
        stateService.getFunction('changeNavTitle')('Games');
        const isAdmin = await authService.isCurrentUserAdmin();
        const addBtnClasses = isAdmin ? 'add-game-btn' : 'add-game-btn hide-add-game-btn';

        this.setState({ addBtnClasses });
    }

    goToGameForm () {
        this.props.history.push('/game/add');
    }

    render() {
        return (
            <div>
                <Button className={this.state.addBtnClasses} variant="fab" color="primary" aria-label="add" onClick={() => this.goToGameForm()}>
                    <AddIcon />
                </Button>
                <div className="row text-center text-lg-left">
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="http://www.mobygames.com/images/covers/l/38333-halo-2-xbox-front-cover.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="http://www.mobygames.com/images/covers/l/47712-star-wars-battlefront-xbox-front-cover.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="http://www.mobygames.com/images/covers/l/247564-gears-of-war-3-xbox-360-front-cover.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <a href="#" className="d-block mb-4 h-100">
                            <img className="img-fluid img-thumbnail" src="http://www.mobygames.com/images/covers/l/207217-fable-iii-xbox-360-front-cover.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Games;