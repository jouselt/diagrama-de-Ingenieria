import {MapInteractionCSS} from 'react-map-interaction';
import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default class Plano extends Component {
    constructor(props) {
        super(props);
        const {data, src} = props
        this.state = {
            image: src,
            show: false,
            setShow: false,
            pageTitle: data.name,
            activeCoordinates: data.activeCoordinates,
            title: 'Titulo',
            attributes: [{name: "", description: "", key: ""}],
            value: {
                scale: 0.3,
                translation: {
                    x: 0,
                    y: 0
                }
            }
        };
    }

    consoleMessage = (e, title, attributes) => {
        e.preventDefault();
        this.setState({
            show: true,
            attributes,
            title
        })
    }

    setMsg = (e, pageTitle) => {
        this.setState({
            pageTitle: pageTitle
        })
    }
    handleClose = () => {
        this.setState({
            show: false
        })
    };
    plus = () => {
        const scale = Math.round(((this.state.value.scale + 0.1) + Number.EPSILON) * 100) / 100
        let {x, y} = this.state.value.translation
        x = Math.round(((x * 1.1) + Number.EPSILON) * 1000) / 1000
        y = Math.round(((y * 1.1) + Number.EPSILON) * 1000) / 1000
        this.setState({
            value: {
                scale: scale,
                translation: {
                    x: x,
                    y: y
                }
            }
        })
    };
    minus = () => {
        const scale = Math.round(((this.state.value.scale - 0.1) + Number.EPSILON) * 100) / 100
        let {x, y} = this.state.value.translation
        x = Math.round(((x * 0.9) + Number.EPSILON) * 1000) / 1000
        y = Math.round(((y * 0.9) + Number.EPSILON) * 1000) / 1000
        this.setState({
            value: {
                scale: scale < 0 ? 0.1 : scale,
                translation: {
                    x: x,
                    y: y
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
        const {show, title, attributes, pageTitle} = this.state;

        return (
            <>
                <div className="container">
                    <h1>{pageTitle}</h1>
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
                    <small> escala: {scale} coordenadas: ({translation.x}, {translation.y}) </small>

                    <map id="image-map" name="image-map">
                        {this.state.activeCoordinates.map(activeArea => {
                            return <area
                                onClick={e => this.consoleMessage(e, activeArea.infoTitle, activeArea.infoList)}
                                onMouseLeave={(e => this.setMsg(e, 'Prueba Plano 1'))}
                                onMouseOver={(e) => this.setMsg(e, activeArea.hoverMsg)}
                                shape={activeArea.shape}
                                key={activeArea.id}
                                coords={activeArea.coords}
                                alt={activeArea.altText}/>
                        })}
                    </map>

                </div>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{attributes.map(attribute => {
                        return (<div key={attribute.key}>
                            <p>{attribute.name}</p>
                            <p>{attribute.description}</p>
                        </div>)
                    })}</Modal.Body>
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