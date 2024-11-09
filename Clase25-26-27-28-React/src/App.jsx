import React from "react"
import './global.css'
import { Route, Routes } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"
import WorkspaceScreen from "./Screens/WorkspaceScreen"
import EstadosScreen from "./Screens/EstadosScreen"
import FormulariosScreen from "./Screens/FormulariosScreen"

/*
Lista de Rutas de mi aplicacion
<Routes></Routes>

Ruta de mi Aplicacion
<Route/>
*/

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        {/* Estos dos '/:workespace_id' indican que ese valor de la ruta es un parametro de busqueda */}
        <Route path="/workspace/:workspace_id" element={<WorkspaceScreen/>}/>
        <Route path="/prueba" element={<h1>Hola soy la prueba</h1>}/>
        <Route path="/estados" element={<EstadosScreen/>}/>
        <Route path="/formularios" element={<FormulariosScreen/>}></Route>
      </Routes>
    </div>
  )
}

export default App