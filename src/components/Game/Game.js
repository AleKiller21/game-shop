import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'material-ui/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

import apiService from '../../services/apiService';
import stateService from '../../services/stateService';

import '../../assets/css/responsive.css';
import '../../assets/css/style.css';
import '../../assets/css/game.css';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'id': '',
            name: '',
            developer: '',
            publisher: '',
            price: '',
            description: '',
            image: ''
        };
    }
    async componentDidMount() {
        try {
            const response = await apiService.sendRequest(`/game/${this.props.match.params.name}`, 'GET');
            const { id, name, developer, publisher, price, description, image } = response.data.data;
            stateService.getFunction('changeNavTitle')(name);
            this.setState({ id, name, developer, publisher, price, description, image }, () => console.log(this.state));
        } catch (err) {
            console.error(err.response);
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Button className='action-button' variant="fab" color="primary" aria-label="add">
                        <AddIcon />
                    </Button>
                    <Button className='action-button' variant="fab" color="secondary" aria-label="edit">
                        <Icon>edit_icon</Icon>
                    </Button>
                    <Button className='action-button' variant="fab" aria-label="delete">
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