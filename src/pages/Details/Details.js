import React, {Component} from 'react'
import Plano from "../commons/Plano";
import {PlanosConsumer, PlanoContext} from "../../core/Context";
import Loading from "../commons/Loading";

export default class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            idPlano: this.props.match.params.idPlano
        }
    }

    static contextType = PlanoContext

    render() {
        return (
            <PlanosConsumer>
                {value => {
                    const {loading, planos, getPlano} = value
                    const plano = getPlano(this.state.idPlano, planos)
                    if (loading) {
                        return <Loading/>
                    } else {
                        return (
                            <section className="planos container">
                                <div className="planos-center">
                                    <Plano  src={plano.img} data={plano} key={plano.id}/>
                                </div>
                            </section>
                        )
                    }
                }}

            </PlanosConsumer>
        )
    }
}