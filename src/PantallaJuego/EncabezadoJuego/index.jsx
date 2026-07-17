import { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../../Context";
import { ContextJuego } from "../ContextJuego";
let newTiempo = 1
const EncabezadoJuego = () => {
    let id;
    const { puntaje } = useContext(ContextJuego)
    const { cambioPantallaPrincipal } = useContext(Context)
    const [tiempo, setTiempo] = useState(0)

    const terminar = (id) => {
        clearInterval(id)
        cambioPantallaPrincipal('p-3')
    }

    useEffect(() => {
        id = setInterval(() => {
            setTiempo(prev => prev < 30 ? prev + 1 : prev + 10)
        }, 1000)
        return () => clearInterval(id)
    }, [])
    useEffect(() => {
        if (tiempo >= 30) {
            terminar(id)
        }
    }, [tiempo])

    return (
        <>
            {/* <!-- Marcador Superior --> */}
            < header className="game-header" >
                <div className="game-title">EXPLOTA<br />GLOBOS</div>
                <div className="stats-panel">
                    <span className="stat-item">Puntos: <strong id="score">{puntaje}</strong></span>
                    <span className="stat-item">Tiempo: <strong id="time">{tiempo}</strong></span>
                </div>
            </header >
        </>
    );
}

export { EncabezadoJuego };