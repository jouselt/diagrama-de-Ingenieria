import React, {Component} from 'react'
import {GoThreeBars} from "react-icons/go"
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    state = {
        isOpen: false
    }
    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={require("../../assets/logo.svg")} alt='Resort hotel'/>
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <GoThreeBars className='nav-icon'/>
                        </button>
                    </div>
                    <ul
                        className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/planos">Planos</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        )
    }
}
