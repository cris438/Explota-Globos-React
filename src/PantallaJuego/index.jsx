import { useContext, useEffect } from "react";
import { EncabezadoJuego } from "./EncabezadoJuego";
import Globo from "./Globos";
import "./PantallaJuego.css";
import { Slots } from "./Slots";
import { ContextJuego } from "./ContextJuego";

let tiempo = 1;

const PantallaJuego = () => {
    const { procesos, slots, setSlots, buscarColor, explotados } =
        useContext(ContextJuego);
    let id;

    useEffect(() => {
        id = setInterval(() => {
            let slot = Math.floor(Math.random() * 23);
            let newSlots = [...slots];
            newSlots[slot].valor = <Globo color={buscarColor()} id={slot} />;
            setSlots(newSlots);
            tiempo++;
            const globosActivos = newSlots.filter(div => div.valor != '').length;
            if (globosActivos >= 5) {
                procesos(id, tiempo);
            }
        }, 1000);

        return () => clearInterval(id);
    }, [slots]);


    return (
        <div className="game-container">
            <EncabezadoJuego />

            <main className="game-board">
                {slots.map((div) => (
                    <Slots
                        key={div.identificador}
                        clase={div.clase}
                        identificador={div.identificador}
                        valor={div.valor}
                    />
                ))}
            </main>

            <footer className="game-footer">
                <div className="footer-section count-section">
                    <span>
                        Globos Explotados: <strong id="exploded-count">{explotados}</strong>
                    </span>
                </div>

                <div className="footer-section control-section">
                    <h3>¡Tu puedes!</h3>
                </div>

                <div className="footer-section points-legend">
                    <div className="legend-item"><span className="dot dot-red"></span> Rojos: +1</div>
                    <div className="legend-item"><span className="dot dot-green"></span> Verdes: +2</div>
                    <div className="legend-item"><span className="dot dot-blue"></span> Azules: +5</div>
                    <div className="legend-item"><span className="dot dot-black"></span> Negros: -3</div>
                </div>
            </footer>
        </div>
    );
};

export { PantallaJuego };
