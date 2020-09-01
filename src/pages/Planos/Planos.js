import React from 'react'
import Preview from "./components/Preview";
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
                        <section className="planoslist container">
                            <div className="planoslist-center">
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
