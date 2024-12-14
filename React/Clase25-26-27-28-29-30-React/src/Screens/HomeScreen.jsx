import React from "react";
import { WorkspaceList } from "../Components";
import { Link } from "react-router-dom";
import workspaces from "../data/workspaceData";


const HomeScreen = () => {
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