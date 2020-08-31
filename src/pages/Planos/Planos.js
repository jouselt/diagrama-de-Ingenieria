import React from 'react'
import Preview from "../commons/Preview";
import {PlanosConsumer} from '../../core/Context'
import Loading from "../commons/Loading";

export default function Planos() {

    return (
        <PlanosConsumer>
            {value => {
                const {loading, planos} = value
                if (loading) {
                    return <Loading/>
                } else {
                    return (
                        <section className="planos container">
                            <div className="planos-center">
                                {planos.map(plano => {
                                    return <Preview key={plano.id} plano={plano}/>
                                })}
                            </div>
                        </section>
                    )
                }
            }}

        </PlanosConsumer>
    )
}
