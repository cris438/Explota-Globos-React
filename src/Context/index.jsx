import React from "react";
import { useState } from "react";
let nombre = ''
const Context = React.createContext()
const ContextProvider = ({ children }) => {
    const [pantallas, setPantallas] = useState('p-1')
    const cambioPantallaPrincipal = (pantalla) => {
        let input = document.querySelector('#playerName')
        if (input != null) {
            if (input.value.trim() == '') {
                alert('Debe ingresar su nombre, no puede enviar el campo vacio')
            }
            else {
                nombre = input.value
                setPantallas(pantalla)
            }
        } else {
            setPantallas(pantalla)
        }
    }

    return (
        <Context.Provider value={{
            pantallas,
            cambioPantallaPrincipal,
            nombre,
        }}>
            {children}
        </Context.Provider>
    );
}

export { Context, ContextProvider };