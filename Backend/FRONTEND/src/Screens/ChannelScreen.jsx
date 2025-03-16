import React, { useContext, useEffect } from "react"
import "./global.css"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { AuthContext } from "../Context/AuthContext.jsx"
import { useNavigate, useParams } from "react-router-dom"

const ChannelScreen = () => {
    const { workspace_id } = useParams()
    const navigate = useNavigate()
    const { isAuthenticatedState } = useContext(AuthContext)
    const { responseApiState, getListChannel} = useApiRequest(`${ENVIROMENT.URL_API}/api/channels/${workspace_id}`)

    useEffect(() => {
            if (isAuthenticatedState && workspace_id) {
                console.log('Workspace ID:', workspace_id)
                getListChannel() // Llamar la función para obtener los Channels
            }else {
                console.log('Workspace ID is undefined');
            }
    }, [isAuthenticatedState, workspace_id])
    
    const handleClickWorkspace = (workspace_id, channelId) => {
        if (workspace_id && channelId) {
            navigate(`/workspace/${workspace_id}/channel/${channelId}`);
        } else {
            console.log('Workspace or Channel ID is undefined');
        }
    }
    return (
        <div className="content-channel">
            <aside className="channel-aside">
                <ul>
                    {responseApiState && responseApiState.data && responseApiState.data.length > 0 ? (
                        responseApiState.data.map((channel, index) => (
                            <button key={index} onClick={() => handleClickWorkspace(workspace_id, channel._id)}>{channel.name}</button> // Asumiendo que cada workspace tiene una propiedad 'name'
                        ))
                    ) : (
                        <p>No tienes Channel disponibles.</p>
                    )}
                </ul>
            </aside>
            <div className="chat">

            </div>
            <div className="box-input-teclado">
                <input
                    type="text"
                    placeholder="Escribe un mensaje..."
                />
                <button>Enviar</button>
            </div>
        </div>
    )
}

export default ChannelScreen