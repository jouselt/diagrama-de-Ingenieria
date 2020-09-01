import React from 'react'
import Hero from '../commons/Hero'
import {Link} from "react-router-dom"
import Banner from "../commons/Banner"

export default function Home() {

    return (
        <Hero children="hello">
            <Banner title="Proyecto de ingenieria" subtitle="todo">
                <Link to="/planos" className="btn-primary">
                    ver los planos
                </Link>
            </Banner>
        </Hero>
    )
}