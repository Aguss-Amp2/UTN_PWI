import React, { useContext, useEffect, useState } from "react"
import "./css/global.css"
import "./css/style.css"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { AuthContext } from "../Context/AuthContext.jsx"
import { useNavigate, useParams } from "react-router-dom"


const ChannelScreen = () => {
    const [channelName, setChannelName] = useState('')
    const { workspace_id } = useParams()
    const navigate = useNavigate()
    const { isAuthenticatedState} = useContext(AuthContext)
    const { responseApiState, getListChannel, postJwtRequest} = useApiRequest(`${ENVIROMENT.URL_API}/api/channels/${workspace_id}`)
    const token = sessionStorage.getItem("authorization_token")

    useEffect(() => {
            if (isAuthenticatedState && workspace_id) {
                getListChannel()
            }else {
                console.log('Workspace ID is undefined');
            }
    }, [isAuthenticatedState, workspace_id])
    
    const handleAddChannel = async () => {
        if (!channelName || !token) {
            console.log('Por favor, ingresa un nombre de canal y asegúrate de que estás autenticado.');
            return;
        }

        const body = { name: channelName }

        try {
            // Llamamos a postJwtRequest con el cuerpo de la solicitud y el token
            await postJwtRequest(body, token);

            // Si la respuesta es exitosa, actualizamos la lista de canales
            getListChannel();
            setChannelName(''); // Limpiar el input
        } catch (error) {
            console.error('Error al agregar el canal:', error);
        }
    }

    const handleClickWorkspace = (workspace_id, channelId) => {
        if (workspace_id && channelId) {
            navigate(`/workspace/${workspace_id}/channel/${channelId}`);
        } else {
            console.log('Workspace or Channel ID is undefined');
        }
    }
    return (
        <div className="father">
            <div className="box-workspaces">
                <h1 className="h1-channel">Bienvenido !!!</h1>
                <h2 className="h2-channel">Elige un Canal</h2>
                <div className="cont-workspaces">
                    <ul className="box-channels">
                        {responseApiState && responseApiState.data && responseApiState.data.length > 0 ? (
                            responseApiState.data.map((channel, index) => (
                                <button key={index} className="canales-mostrar-2" onClick={() => handleClickWorkspace(workspace_id, channel._id)}># {channel.name}</button>
                            ))
                        ) : (
                            ""
                        )}
                    </ul>
                </div>
                <div className="cont-input-channel-add">
                    <input className="input-channel" type="text" id="name" placeholder="Ej: Consultas" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
                    <button type="submit" className="btn-mas" onClick={handleAddChannel}>Crear Canal</button>
                </div>
            </div>
        </div>
    )
}

export default ChannelScreen