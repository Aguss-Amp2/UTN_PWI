import React, { useContext, useEffect } from "react"
import "./global.css"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { AuthContext } from "../Context/AuthContext.jsx"
import { useNavigate, useParams } from "react-router-dom"

const ChannelSelectScreen = () => {
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
    
    return (
        <div className="content-channel">
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

export default ChannelSelectScreen