import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'material-ui/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';

import Slide from 'material-ui/transitions/Slide';

import GameForm from '../GameForm/GameForm';

import apiService from '../../services/apiService';
import stateService from '../../services/stateService';
import authService from '../../services/authService';

import '../../assets/css/responsive.css';
import '../../assets/css/style.css';
import '../../assets/css/game.css';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            developer: '',
            publisher: '',
            price: '',
            description: '',
            image: '',
            // isAdmin: false,
            deleteModalOpen: false
        };
    }
    async componentDidMount() {
        try {
            const response = await apiService.sendRequest(`/game/${this.props.match.params.name}`, 'GET');
            // const isAdmin = await authService.isCurrentUserAdmin();

            const { id, name, developer, publisher, price, description, image } = response.data.data;

            stateService.getFunction('changeNavTitle')(name);
            this.setState({ id, name, developer, publisher, price, description, image }, () => console.log(this.state));

        } catch (err) {
            console.error(err.response);
        }
    }

    Transition(props) {
        return <Slide direction="up" {...props} />;
    }

    handleClickOpen() {
        this.setState({ deleteModalOpen: true });
    };

    handleClose() {
        this.setState({ deleteModalOpen: false });
    };

    async deleteGame() {
        const body = { id: this.state.id };

        try {
            const result = await apiService.sendRequest('/game/delete', 'POST', body);
            this.handleClose();
            stateService.getFunction('showNotification')('success', 'Success', `${this.state.name} has been deleted`);
            this.props.history.replace('/store');

        } catch (err) {
            console.log(err);
            stateService.getFunction('showNotification')('err', 'Error', 'The game could not be deleted');
        }
    }

    render() {
        const btnClass = stateService.getData('isAdmin') ? 'action-button' : 'hide-btn';

        return (
            <div>
                <div>
                    <Dialog
                        open={this.state.deleteModalOpen}
                        transition={this.Transition}
                        keepMounted
                        onClose={() => this.handleClose()}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">
                            {"Are you sure you want to delete this game"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={() => this.handleClose()} color="primary">
                                Disagree
            </Button>
                            <Button onClick={() => this.deleteGame()} color="primary">
                                Agree
            </Button>
                        </DialogActions>
                    </Dialog>
                </div>


                <div>
                    <Button className={`${btnClass}`} variant="fab" color="secondary" aria-label="edit" onClick={() => this.props.history.push(`/game/edit/${this.state.name}`)}>
                        <Icon>edit_icon</Icon>
                    </Button>
                    <Button className={`${btnClass}`} variant="fab" aria-label="delete" onClick={() => this.handleClickOpen()}>
                        <DeleteIcon />
                    </Button>
                </div>
                <div className="content_inner_bg row m0">
                    <section className="about_person_area pad section-style" id="about">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="person_img">
                                    <img className='img-fluid img-thumbnail' src={this.state.image} alt="" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="person_details">
                                    <h3>{this.state.name}</h3>
                                    <p>{this.state.description}</p>
                                    <div className="person_information">
                                        <ul>
                                            <li><a href="#">Developer</a></li>
                                            <li><a href="#">Publisher</a></li>
                                            <li><a href="#">Price</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#">{this.state.developer}</a></li>
                                            <li><a href="#">{this.state.publisher}</a></li>
                                            <li><a href="#">$ {this.state.price}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Game;