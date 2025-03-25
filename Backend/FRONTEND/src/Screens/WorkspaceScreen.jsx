import React, { useContext, useEffect, useState } from "react"
import './css/mediaScrenn.css'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { useForm } from "../hooks/useForm.jsx"

const WorkspaceScreen = () => {
    const navigate = useNavigate();
    const { isAuthenticatedState } = useContext(AuthContext);
    const email = isAuthenticatedState ? sessionStorage.getItem('email') : '';
    
    const { responseApiState, getListWorkspaces, postJwtRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/workspaces');
    const { postInvitedRequest } = useApiRequest(ENVIROMENT.URL_API);
    const { getUserIdByEmail } = useApiRequest(ENVIROMENT.URL_API);

    const [isLoading, setIsLoading] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [successMessage, setSuccessMessage] = useState(""); // Estado para el mensaje de éxito

    useEffect(() => {
        if (isLoading) {
            setShowSpinner(true);
            const timer = setTimeout(() => {
                setShowSpinner(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    const initialFormState = {
        name: ''
    };

    const { formState, handleChangeInput } = useForm(initialFormState);
    const token = sessionStorage.getItem('authorization_token');

    const handleClick = async () => {
        try {
            await postJwtRequest(formState, token);
            await getListWorkspaces();
            handleChangeInput({ target: { name: "name", value: "" } });
        } catch (error) {
            console.error("Error al agregar el workspace:", error);
        }
    };

    const handleSumbitForm = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (formState.name) {
            await postJwtRequest(formState, token);
        } else {
            console.log('Error ingrese los dos campos');
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (isAuthenticatedState) {
            getListWorkspaces();
        }
    }, [isAuthenticatedState]);

    const [emailInputs, setEmailInputs] = useState({});
    const [invitedUserIds, setInvitedUserIds] = useState({});

    const handleEmailChange = (workspaceId, e) => {
        const { value } = e.target;
        setEmailInputs((prev) => ({
            ...prev,
            [workspaceId]: value,
        }));
    };

    const handleClickWorkspace = (workspace_id) => {
        if (workspace_id) {
            navigate(`/${workspace_id}`);
        } else {
            console.log('Workspace ID is undefined');
        }
    };

    const handleInviteMember = async (workspace_id) => {
        const invitedEmail = emailInputs[workspace_id];
        const token = sessionStorage.getItem("authorization_token");

        if (!token) {
            console.error('Token no disponible');
            return;
        }

        let invitedUserId = invitedUserIds[invitedEmail];

        if (!invitedUserId) {
            invitedUserId = await getUserIdByEmail(invitedEmail, token);
            if (invitedUserId) {
                setInvitedUserIds((prev) => ({
                    ...prev,
                    [invitedEmail]: invitedUserId,
                }));
            } else {
                console.error('No se pudo obtener el ID del usuario');
                return;
            }
        }

        const success = await postInvitedRequest(workspace_id, invitedUserId, token);
        if (success) {
            setEmailInputs((prev) => ({ ...prev, [workspace_id]: "" }));
            setSuccessMessage("Miembro agregado correctamente"); // Mostrar mensaje de éxito
        } else {
            console.error('Error al invitar al miembro');
        }
    };

    return (
        <div className="father">
            <div className="box-workspaces">
                <h1 className="h1-work">Workspaces de : {email}</h1>
                <div className="cont-workspaces">
                    <ul>
                        {responseApiState && responseApiState.data && responseApiState.data.length > 0 ? (
                            responseApiState.data.map((workspace) => (
                                <div key={workspace._id} className="div-button-workspaces">
                                    <div className="cont-buttons">
                                        <button className="button-work" onClick={() => handleClickWorkspace(workspace._id)}>{workspace.name}</button>
                                        <input className="input-workspaces input-work" type="email"  id={`email-${workspace._id}`}   name="email" placeholder="joedoe@gmail.com"  value={emailInputs[workspace._id] || ""} 
                                                onChange={(e) => handleEmailChange(workspace._id, e)}/>
                                        <button type="sumbit" className="button-add" onClick={() => handleInviteMember(workspace._id)}><i className="bi-plus-lg"></i></button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            ""
                        )}
                    </ul>
                </div>

                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSumbitForm} className="form-work">
                    <div className="cont-create-workspace btn-box">
                        <div>
                            <label htmlFor="workspaces" className="label-workspaces">Nombre del Workspaces : </label>
                            <input type="text" id="name" name="name" placeholder="UTN-TN-MAR-JUEV" className="input-work" value={formState.name} onChange={handleChangeInput} />
                        </div>
                        {responseApiState.error && <span style={{ color: 'red' }}>{responseApiState.error}</span>}
                        {responseApiState.loading ? "" : <button type="sumbit" className="btn-crear" onClick={handleClick}>Crear Workspaces</button>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WorkspaceScreen