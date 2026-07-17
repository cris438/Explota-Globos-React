import { useContext, useState } from 'react'
import './App.css'
import { PantallaInicio } from './PantallaInicio'
import { PantallaJuego } from './PantallaJuego'
import { PantallaFinal } from './PantallaFinal'
import { Context, ContextProvider } from './Context'
import { ContextJuegoProvider } from './PantallaJuego/ContextJuego'

function App() {
  const { pantallas } = useContext(Context)
  return (
    <>
      <ContextJuegoProvider>
        {(pantallas == 'p-1') && <PantallaInicio />}
        {(pantallas == 'p-2') && <PantallaJuego />}
        {(pantallas == 'p-3') && <PantallaFinal />}
      </ContextJuegoProvider>

    </>
  )
}

export default App
