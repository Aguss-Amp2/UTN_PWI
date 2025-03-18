import React, { useContext, useEffect, useState } from "react"
import "./css/global.css"
import "./css/style.css"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { useForm } from "../hooks/useForm.jsx"

const WorkspaceScreen = () => {
    const navigate = useNavigate()
    const { isAuthenticatedState } = useContext(AuthContext) // Obtener el estado de autenticación
    const email = isAuthenticatedState ? sessionStorage.getItem('email') : ''// O usa el correo del usuario si lo tienes
    
    const { responseApiState, getListWorkspaces, postJwtRequest} = useApiRequest(ENVIROMENT.URL_API + '/api/workspaces')
    const {postInvitedRequest} = useApiRequest(ENVIROMENT.URL_API)
    const { getUserIdByEmail } = useApiRequest(ENVIROMENT.URL_API)

        const initialFormState = {
            name: ''
        }
        
        const {formState, handleChangeInput} = useForm(initialFormState)
        
        const token = sessionStorage.getItem('authorization_token')
    
    const handleClick = async () => {
        try {
            // Creamos un nuevo workspace
            await postJwtRequest(formState, token);

            // Una vez creado, actualizamos la lista de workspaces
            await getListWorkspaces(); // Actualizamos la lista de workspaces

            // Limpiamos el input después de la creación
            handleChangeInput({ target: { name: "name", value: "" } }); // Limpiamos el campo
        } catch (error) {
            console.error("Error al agregar el workspace:", error);
        }
    }

        const handleSumbitForm = async (event) => {
            event.preventDefault()
            
            if (formState.name) {
                await postJwtRequest(formState, token)
            }
            else {
                console.log('Error ingrese los dos campos')
            }
        }

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
            invitedUserId = await getUserIdByEmail(invitedEmail, token);
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
        const success = await postInvitedRequest(workspace_id, invitedUserId, token);
        if (success) {
            setEmailInputs((prev) => ({ ...prev, [workspace_id]: "" }));
        } else {
            console.error('Error al invitar al miembro');
        }
    }
    

    
    return (
        <div className="father">
            <div className="box-workspaces">
                <h1 className="h1-work">Workspaces de : {email}</h1>
                <ul>
                    {responseApiState && responseApiState.data && responseApiState.data.length > 0 ? (
                        responseApiState.data.map((workspace) => (
                            <div key={workspace._id} className="div-button-workspaces">
                                <div className="cont-buttons">
                                    <button onClick={() => handleClickWorkspace(workspace._id)}>{workspace.name}</button>
                                    <input className="input-workspaces input-work" type="email"  id={`email-${workspace._id}`}   name="email" placeholder="joedoe@gmail.com"  value={emailInputs[workspace._id] || ""} 
                                            onChange={(e) => handleEmailChange(workspace._id, e)}/>
                                    <button type="sumbit" className="button-add" onClick={() => handleInviteMember(workspace._id)}>+</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No tienes workspaces disponibles.</p>
                    )}
                </ul>

                <form onSubmit={handleSumbitForm} className="form-work">
                    <div className="cont-create-workspace btn-box">
                        <div>
                            <label htmlFor="workspaces" className="label-workspaces">Nombre del Workspaces : </label>
                            <input type="text" id="name" name="name" placeholder="UTN-TN-MAR-JUEV" className="input-work" value={formState.name} onChange={handleChangeInput} />
                        </div>
                        {responseApiState.error && <span style={{ color: 'red' }}>{responseApiState.error}</span>}
                        {
                            responseApiState.loading
                                ?""
                                :<button type="sumbit"  onClick={handleClick}>Crear Workspaces</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WorkspaceScreen