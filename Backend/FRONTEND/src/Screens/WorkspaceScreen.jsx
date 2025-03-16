import React, { useContext, useEffect } from "react"
import './global.css'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useApiRequest } from "../hooks/useApiRequest.jsx"

const WorkspaceScreen = () => {
    const navigate = useNavigate()
    const { isAuthenticatedState } = useContext(AuthContext) // Obtener el estado de autenticación
    const email = isAuthenticatedState ? sessionStorage.getItem('email') : ''// O usa el correo del usuario si lo tienes
    
    const { responseApiState, getListWorkspaces, loading, error } = useApiRequest(ENVIROMENT.URL_API + '/api/workspaces')

    useEffect(() => {
        if (isAuthenticatedState) {
            getListWorkspaces() // Llamar la función para obtener los workspaces
        }
    }, [isAuthenticatedState])

    const handleClick = () => {
        navigate('/create-workspaces')
    }

    const handleClickWorkspace = (workspace_id) => {
        if (workspace_id) {
            navigate(`/${workspace_id}`);
        } else {
            console.log('Workspace ID is undefined');
        }
    }

    if (loading) {
        return <div>Cargando...</div>
    }

    if (error) {
        return <div>Error al cargar los workspaces: {error}</div>
    }

    return (
        <div className="father">
            <div className="box-workspaces">
                <h1>Workspaces de : {email}</h1>
                <ul>
                    {responseApiState && responseApiState.data && responseApiState.data.length > 0 ? (
                        responseApiState.data.map((workspace, index) => (
                            <button key={index} onClick={() => handleClickWorkspace(workspace._id)}>{workspace.name}</button> // Asumiendo que cada workspace tiene una propiedad 'name'
                        ))
                    ) : (
                        <p>No tienes workspaces disponibles.</p>
                    )}
                </ul>

                <div className="btn-box">
                    <button type="sumbit" onClick={handleClick}>Create Workspaces</button>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceScreen