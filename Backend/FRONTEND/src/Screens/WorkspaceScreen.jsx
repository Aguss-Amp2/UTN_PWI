import React, { useContext } from "react"
import './global.css'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"

const WorkspaceScreen = () => {
    const navigate = useNavigate()
    const { isAuthenticatedState } = useContext(AuthContext) // Obtener el estado de autenticación
    const email = isAuthenticatedState ? sessionStorage.getItem('email') : ''// O usa el correo del usuario si lo tienes
    
    const handleClick = () => {
        navigate('/create-workspaces')
    }

    return (
        <div className="father">
            <div className="box-workspaces">
                <h1>Workspaces de : {email}</h1>
                <button>Worspaces</button>

                <div className="btn-box">
                    <button type="sumbit" onClick={handleClick}>Create Workspaces</button>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceScreen