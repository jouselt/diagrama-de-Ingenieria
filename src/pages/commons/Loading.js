import React from 'react'
import loadingGif from '../../assets/loading-gear.gif'

export default function Loading() {
  return (
    <div className="loading">
      <h4>Cargando data del plano...</h4>
      <img src={loadingGif} alt="Loading..."/>

    </div>
  )
}
