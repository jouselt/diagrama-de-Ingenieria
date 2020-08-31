import React from 'react'
import defaultImage from "../../assets/Plano2.png";
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

export default function Preview({plano}) {
    const {img, name, id} = plano
    return (
        <article className="plano">
            <div className="img-container">
                <img src={img || defaultImage} alt={name}/>
                <Link to={`/planos/${id}`} className="btn-primary plano-link">
                    Ver
                </Link>
                <p className="plano-info">{name}</p>
            </div>
        </article>
    )
}

Preview.propTypes = {
    plano: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        activeCoordinates: PropTypes.arrayOf(PropTypes.object)
    })
}