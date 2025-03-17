import React from "react"
import "./global.css"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useParams } from "react-router-dom"
import ChannelScreen from "./ChannelScreen.jsx"
import { useForm } from "../hooks/useForm.jsx"

const ChannelSelectScreen = () => {
    const initialFormState = {
        content: ''
    }
    const { channel_id } = useParams()
    console.log('channel_id:', channel_id)
    const {formState, handleChangeInput} = useForm(initialFormState)
    const { postJwtRequest} = useApiRequest(ENVIROMENT.URL_API + `/api/channels/${channel_id}/messages`)
    const token = sessionStorage.getItem('authorization_token')

    
    const handleSumbitForm = async (event) => {
        event.preventDefault()
        
        if (formState.content.trim()) { // Verifica si el contenido no está vacío
            try {
                // Llama a la función para enviar el mensaje al canal
                const response = await postJwtRequest({ content: formState.content }, token);
                if (response && response.ok) {
                    console.log('Mensaje enviado:', response.data); // Log para la respuesta del backend
                    // Limpiar el campo de entrada después de enviar el mensaje
                    handleChangeInput({ target: { name: 'content', value: '' } });
                }
            } catch (error) {
                console.error('Error al enviar mensaje:', error);
            }
        } else {
            console.log('El mensaje no puede estar vacío');
        }
    }
    return (
        <div className="content-channel">
            <aside className="channel-aside">
                <ChannelScreen />
            </aside>
            <div className="chat">

            </div>
            <div className="box-input-teclado">
                <form onSubmit={handleSumbitForm}>
                    <input
                        type="text"
                        name="content"
                        placeholder="Escribe un mensaje..."
                        value={formState.content}
                        onChange={handleChangeInput}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ChannelSelectScreen