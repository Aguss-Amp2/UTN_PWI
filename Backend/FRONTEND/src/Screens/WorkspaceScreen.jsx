import React, { useContext, useEffect, useState } from "react"
import './global.css'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useApiRequest } from "../hooks/useApiRequest.jsx"

const WorkspaceScreen = () => {
    const navigate = useNavigate()
    const { isAuthenticatedState } = useContext(AuthContext) // Obtener el estado de autenticación
    const email = isAuthenticatedState ? sessionStorage.getItem('email') : ''// O usa el correo del usuario si lo tienes
    
    const { responseApiState, getListWorkspaces} = useApiRequest(ENVIROMENT.URL_API + '/api/workspaces')
    const {postInvitedRequest} = useApiRequest(ENVIROMENT.URL_API)
    const { getUserIdByEmail } = useApiRequest(ENVIROMENT.URL_API)

    useEffect(() => {
        if (isAuthenticatedState) {
            getListWorkspaces()
        }
    }, [isAuthenticatedState])

    const [emailInputs, setEmailInputs] = useState({})
    const [invitedUserIds, setInvitedUserIds] = useState({})

    // Función para manejar el cambio de un solo input
    const handleEmailChange = (workspaceId, e) => {
        const { value } = e.target;
        setEmailInputs((prev) => ({
            ...prev,
            [workspaceId]: value, // Actualizamos solo el input correspondiente al workspace
        }));
    };

    const handleClick = () => {
        navigate('/create-workspaces')
    }

    const handleClickWorkspace = (workspace_id) => {
        if (workspace_id) {
            navigate(`/${workspace_id}`)
        } else {
            console.log('Workspace ID is undefined')
        }
    }

    const handleInviteMember = async (workspace_id) => {
        const invitedEmail = emailInputs[workspace_id];
        const token = sessionStorage.getItem("authorization_token");

        if (!token) {
            console.error('Token no disponible');
            return;
        }

        // Verifica si ya tenemos el ID del usuario en el estado
        let invitedUserId = invitedUserIds[invitedEmail];

        // Si no tenemos el ID, lo buscamos
        if (!invitedUserId) {
            invitedUserId = await getUserIdByEmail(invitedEmail, token); // Usar el hook
            if (invitedUserId) {
                setInvitedUserIds((prev) => ({
                    ...prev,
                    [invitedEmail]: invitedUserId, // Almacenamos el ID en el estado
                }));
            } else {
                console.error('No se pudo obtener el ID del usuario');
                return;
            }
        }

        // Invitar al miembro
        const success = await postInvitedRequest(workspace_id, invitedUserId, token);  // Usar el hook
        if (success) {
            setEmailInputs((prev) => ({ ...prev, [workspace_id]: "" }));
        } else {
            console.error('Error al invitar al miembro');
        }
    }
    

    
    return (
        <div className="father">
            <div className="box-workspaces">
                <h1>Workspaces de : {email}</h1>
                <ul>
                    {responseApiState && responseApiState.data && responseApiState.data.length > 0 ? (
                        responseApiState.data.map((workspace) => (
                            <div key={workspace._id} className="div-button-workspaces">
                                <div className="cont-buttons">
                                    <button onClick={() => handleClickWorkspace(workspace._id)}>{workspace.name}</button>
                                    <input className="input-workspaces" type="email"  id={`email-${workspace._id}`}   name="email" placeholder="invite member: joedoe@gmail.com"  value={emailInputs[workspace._id] || ""} 
                                            onChange={(e) => handleEmailChange(workspace._id, e)}/>
                                    <button type="sumbit" className="button-add" onClick={() => handleInviteMember(workspace._id)}>+</button>
                                </div>
                            </div>
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