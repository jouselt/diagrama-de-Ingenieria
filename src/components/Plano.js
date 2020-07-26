import {MapInteractionCSS} from 'react-map-interaction';
import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class Plano extends Component {
    constructor(props) {
        super(props);

        this.state = {
            image: props.src,
            show: false,
            setShow: false,
            title: 'Titulo',
            text: 'Texto',
            value: {
                scale: 0.3,
                translation: {
                    x: 0,
                    y: 0
                }
            }
        };
    }

    consoleMessage = (e, title, text) => {
        e.preventDefault();
        this.setState({
            show: true,
            text,
            title
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    };
    plus = () => {
        const scale = this.state.value.scale
        this.setState({
            value: {
                scale: scale + 0.1,
                translation: {
                    x: -500,
                    y: -500
                }
            }
        })
    };
    minus = () => {
        const scale = this.state.value.scale - 0.1

        this.setState({
            value: {
                scale: scale < 0 ? 0.1 : scale,
                translation: {
                    x: 50,
                    y: 50
                }
            }
        })
    };
    reset = () => {
        this.setState({
            value: {
                scale: 0.3,
                translation: {
                    x: 0,
                    y: 0
                }
            }
        })
    };

    render() {
        const {scale, translation} = this.state.value;
        const {show, title, text} = this.state;

        return (
            <>
                <div className="container">
                    <p>Prueba Plano 1 </p>
                    <small> escala: {scale} coordenadas: ({translation.x}, {translation.y}) </small>
                    <Button variant="primary ml-5" onClick={this.plus}>
                        Acercar
                    </Button>
                    <Button variant="primary ml-5" onClick={this.minus}>
                        Alejar
                    </Button>
                    <Button variant="primary ml-5" onClick={this.reset}>
                        Resetear
                    </Button>
                    <MapInteractionCSS
                        value={this.state.value}
                        onChange={(value) => this.setState({value})}>
                        <img src={this.state.image} useMap="#image-map" alt='he'/>
                    </MapInteractionCSS>
                    <map id="image-map" name="image-map">
                        <area
                            onClick={e => this.consoleMessage(e, 'Componente 1', "info del componente 1")}
                            shape="rect"
                            coords="2301,1647,1310,1464"
                            alt="ll"/>
                        <area
                            coords="2716,1433,2913,1522,2913,1607,2716,1701"
                            shape="poly"
                            onClick={e => this.consoleMessage(e, 'Componente 2', "info del componente 2")}
                            alt="ll"/>
                        <area
                            coords="3042,1513,3238,1433,3243,1696,3042,1607"
                            shape="poly"
                            onClick={e => this.consoleMessage(e, 'Componente 3', "info del tercer componente")}
                            alt="ll"/>
                        <area
                            coords="3819,2999,3413,2754"
                            shape="rect"
                            onClick={e => this.consoleMessage(e, 'lista de detalles', "info del componentes")}
                            alt="ll"/>
                        <area
                            coords="1703,1821,1953,1924"
                            shape="rect"
                            onClick={e => this.consoleMessage(e, 'Componente 5', "info del componente 5")}
                            alt="ll"/>
                    </map>

                </div>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{text}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}