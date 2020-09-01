import React from 'react'
import Hero from '../commons/Hero'
import {Link} from "react-router-dom"
import Banner from "../commons/Banner"
import './Error.css'

export default function Error() {
    return (
        <Hero >
            <Banner title="404" subtitle="Esta página no existe">
                <Link to="/" className="btn-primary">
                    Volver
                </Link>
            </Banner>
        </Hero>

    )
}
