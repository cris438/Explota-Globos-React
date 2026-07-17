import React, { useContext } from "react";
import './PantallaFinal.css'
import { Context } from "../Context";
import { ContextJuego } from "../PantallaJuego/ContextJuego";
const PantallaFinal = () => {
    const { cambioPantallaPrincipal, nombre } = useContext(Context)
    const {puntaje,explotados,positivos,negros}=useContext(ContextJuego)

    let mensaje = ''
    if (puntaje < 0) {
        mensaje = `¡Cuidado con los globos negros ${nombre}!`
    } else if (puntaje <= 10) {
        mensaje = `¡Buen intento ${nombre}!`
    } else if (puntaje <= 25) {
        mensaje = `¡Muy bien ${nombre}!`
    } else if (puntaje > 25) {
        mensaje = `¡Eres un maestro explotando globos ${nombre}!`
    }
    return (
        <div className="fin-container">
            <h1 className="main-title">¡Juego Terminado!</h1>

            <div className="score-card">
                <h2 className="congrats-title">{mensaje}!</h2>

                <div className="stats-table">
                    <div className="stat-row highlight">
                        <span>Puntaje Final:</span>
                        <span className="points-value">{puntaje} Pts</span>
                    </div>

                    <div className="stat-row">
                        <span>Globos Explotados:</span>
                        <span>{explotados}</span>
                    </div>

                    <div className="stat-row">
                        <span>Globos Positivos Explotados:</span>
                        <span>{positivos}</span>
                    </div>

                    <div className="stat-row">
                        <span>Globos Negros Explotados:</span>
                        <span>{negros}</span>
                    </div>
                </div>
            </div>

            <button type="button" className="btn-replay" onClick={() => cambioPantallaPrincipal('p-1')}>
                Jugar de Nuevo
            </button>
        </div>
    )
}

export { PantallaFinal };