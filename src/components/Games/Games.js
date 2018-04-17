import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

import GameTile from '../GameTile/GameTile';

import stateService from '../../services/stateService';
import authService from '../../services/authService';
import apiService from '../../services/apiService';

import '../../assets/css/games.css';

class Games extends Component {
    constructor (props) {
        super(props);

        this.state = { addBtnClasses: 'add-game-btn hide-add-game-btn', games: [] };
    }

    // async componentDidMount() {
    //     stateService.getFunction('changeNavTitle')('Games');
    //     let games = [];

    //     try {
    //         const response = await apiService.sendRequest('/games', 'GET');
    //         games = response.data.data;
    //     } catch (err) {
    //         console.error(err);
    //         stateService.getFunction('showNotification')('error', 'Error', 'The game list was not able to load correctly');
    //     }

    //     this.setState({ games });
    // }

    componentDidMount () {
        stateService.getFunction('fetchGameList')();
    }

    goToGameForm () {
        this.props.history.push('/game/edit/');
    }

    render() {
        const games = stateService.getData('games');
        const isAdmin = authService.isCurrentUserAdmin();
        const addBtnClasses = isAdmin ? 'add-game-btn' : 'add-game-btn hide-add-game-btn';

        return (
            <div>
                <Button className={addBtnClasses} variant="fab" color="primary" aria-label="add" onClick={() => this.goToGameForm()}>
                    <AddIcon />
                </Button>
                <div className="row text-center text-lg-left">
                    { games.map(game => <GameTile title={game.name} url={game.image} key={game.id} />) }
                </div>
            </div>
        );
    }
}

export default Games;