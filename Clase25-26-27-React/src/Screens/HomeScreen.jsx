import React from "react";
import { WorkspaceList } from "../Components";
import { Link } from "react-router-dom";


const HomeScreen = () => {
    const workspaces = [
        {
            img: '',
            title: 'UTN PWA TN',
            miembros: [],
            id: 1
        },
        {
            img: '',
            title: 'UTN PWA TM',
            miembros: [],
            id: 2
        },
        {
            img: '',
            title: 'UTN PWA FIESTA',
            miembros: [],
            id: 3
        }
    ]
    return(
        <div>
            {/* Hace lo mismo que el <a></a> */} 
            <Link to={'/estados'}>Ir a Estados</Link>
            <br/>
            <Link to={'/formularios'}>Ir a Formulario</Link>
            <WorkspaceList workspaces={workspaces}/>
        </div>
    )
}

export default HomeScreen