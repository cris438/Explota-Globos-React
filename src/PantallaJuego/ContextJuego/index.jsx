import { useState, createContext } from "react";
import Globo from "../Globos";


const ContextJuego = createContext();

const ContextJuegoProvider = ({ children }) => {

    const divs = [
        { clase: "board-slot btn", identificador: "slot-0", valor: '' },
        { clase: "board-slot btn", identificador: "slot-1", valor: '' },
        { clase: "board-slot btn", identificador: "slot-2", valor: '' },
        { clase: "board-slot btn", identificador: "slot-3", valor: '' },
        { clase: "board-slot btn", identificador: "slot-4", valor: '' },
        { clase: "board-slot btn", identificador: "slot-5", valor: '' },
        { clase: "board-slot btn", identificador: "slot-6", valor: '' },
        { clase: "board-slot btn", identificador: "slot-7", valor: '' },
        { clase: "board-slot btn", identificador: "slot-8", valor: '' },
        { clase: "board-slot btn", identificador: "slot-9", valor: '' },
        { clase: "board-slot btn", identificador: "slot-10", valor: '' },
        { clase: "board-slot btn", identificador: "slot-11", valor: '' },
        { clase: "board-slot btn", identificador: "slot-12", valor: '' },
        { clase: "board-slot btn", identificador: "slot-13", valor: '' },
        { clase: "board-slot btn", identificador: "slot-14", valor: '' },
        { clase: "board-slot btn", identificador: "slot-15", valor: '' },
        { clase: "board-slot btn", identificador: "slot-16", valor: '' },
        { clase: "board-slot btn", identificador: "slot-17", valor: '' },
        { clase: "board-slot btn", identificador: "slot-18", valor: '' },
        { clase: "board-slot btn", identificador: "slot-19", valor: '' },
        { clase: "board-slot btn", identificador: "slot-20", valor: '' },
        { clase: "board-slot btn", identificador: "slot-21", valor: '' },
        { clase: "board-slot btn", identificador: "slot-22", valor: '' },
        { clase: "board-slot btn", identificador: "slot-23", valor: '' },
    ]
    const colores = ["red", "blue", "green", "black"];

    let [slots, setSlots] = useState(divs);
    let [puntaje, setpuntaje] = useState(0);
    let [explotados, setExplotados] = useState(0);
    let [positivos, setPositivos] = useState(0);
    let [negros, setNegros] = useState(0);

    const reiniciar = () => {
        setExplotados(0)
        setNegros(0)
        setPositivos(0)
        setpuntaje(0)
    }

    const procesos = (id, tiempo) => {
        clearInterval(id);
        setSlots(divs);
        tiempo = 1;
    };

    const puntos = (event) => {
        setExplotados((prev) => prev + 1);
        if (event.classList.contains("blue")) {
            setpuntaje((prev) => prev + 5);
            setPositivos((prev) => prev + 1);
        } else if (event.classList.contains("red")) {
            setpuntaje((prev) => prev + 1);
            setPositivos((prev) => prev + 1);
        } else if (event.classList.contains("green")) {
            setpuntaje((prev) => prev + 2);
            setPositivos((prev) => prev + 1);
        } else if (event.classList.contains("black")) {
            setNegros((prev) => prev + 1);
            setpuntaje((prev) => prev - 3);
        }
    };

    const buscarColor = () => {
        let posColor = Math.floor(Math.random() * colores.length);
        return colores[posColor];
    };

    const eliminarme = (event) => {

        let slot = Math.floor(Math.random() * 23);
        let newSlots = [...slots];
        newSlots[slot].valor = (
            <Globo color={buscarColor()} id={slot} eliminarme={eliminarme} />
        );
        let eliminar = [...slots];
        if (eliminar[event.id] != undefined) {
            puntos(event);
            eliminar[event.id].valor = "";
            setSlots(eliminar);
        }

    };

    return (
        <ContextJuego.Provider
            value={{
                slots,
                setSlots,
                puntaje,
                negros,
                positivos,
                explotados,
                divs,
                procesos,
                puntos,
                eliminarme,
                buscarColor,
                reiniciar,
            }}
        >
            {children}
        </ContextJuego.Provider>
    );
};

export { ContextJuego, ContextJuegoProvider };
