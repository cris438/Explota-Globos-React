import { useContext, useEffect } from 'react';
import './PantallaInicio.css'
import { Context } from '../Context';
import { ContextJuego } from '../PantallaJuego/ContextJuego';
const PantallaInicio = () => {
    const { cambioPantallaPrincipal,nombre } = useContext(Context)
    const {reiniciar} = useContext(ContextJuego)
    useEffect(()=>{
        reiniciar()
    })

    return (
        <div className="screen-container">
            <div className="screen-box">
                <h1 className="game-title">EXPLOTA GLOBOS</h1>
                <p className="instructions">
                    Explota globos para sumar puntos. Evita los globos negros.
                </p>
                <ul className="balloon-values">
                    <li>🎈 Globo rojo: suma 1 punto.</li>
                    <li>🎈 Globo verde: suma 2 puntos.</li>
                    <li>🎈 Globo azul: suma 5 puntos.</li>
                    <li>🎈 Globo negro: resta 3 puntos.</li>
                </ul>
                <label htmlFor="playerName">Ingresa tu nombre:</label>
                <input id="playerName" type="text" className="form-input" placeholder="Tu nombre..." required/>
                <button className="btn-start" onClick={() => cambioPantallaPrincipal('p-2')}>Iniciar Juego</button>
            </div>
        </div>
    );
}

export { PantallaInicio };