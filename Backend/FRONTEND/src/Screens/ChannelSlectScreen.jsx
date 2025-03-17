import React, { useContext, useEffect, useState } from "react"
import "./global.css"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useParams } from "react-router-dom"
import ChannelScreen from "./ChannelScreen.jsx"
import { useForm } from "../hooks/useForm.jsx"
import { AuthContext } from "../Context/AuthContext.jsx"

const ChannelSelectScreen = () => {
    const initialFormState = {
        content: ''
    }
    const { channel_id } = useParams()
    const { isAuthenticatedState} = useContext(AuthContext)
    const {formState, handleChangeInput} = useForm(initialFormState)
    const { postJwtRequest, getListMessages} = useApiRequest(ENVIROMENT.URL_API + `/api/channels/${channel_id}/messages`)
    const token = sessionStorage.getItem('authorization_token')

    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Función para obtener los mensajes
    const fetchMessages = async () => {
        try {
            setIsLoading(true);
            const response = await getListMessages();
            console.log('Mensaje recibido de la API:', response);  // Log de la respuesta de la API
            if (response && response.ok && response.data) {
                setMessages(response.data.messages);
            } else {
                console.error('Error al obtener los mensajes:', response);
                alert('No se pudieron obtener los mensajes');
            }
        } catch (error) {
            console.error('Error al obtener los mensajes:', error);
            alert(`Error al obtener los mensajes: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Manejo del envío de un mensaje
    const handleSubmitForm = async (event) => {
        event.preventDefault();

        if (formState.content.trim()) {
            try {
                const response = await postJwtRequest({ content: formState.content }, token);

                console.log('Respuesta al enviar mensaje:', response);  // Log de la respuesta

                if (response && response.ok && response.data) {
                    const newMessage = response.data.new_message;  // Accediendo a `new_message`
                    console.log('Nuevo mensaje recibido:', newMessage);

                    // Actualizar la lista de mensajes
                    setMessages((prevMessages) => [newMessage, ...prevMessages]);

                    // Limpiar el formulario
                    handleChangeInput({ target: { name: 'content', value: '' } });

                    // Hacer un nuevo fetch de mensajes después de enviar
                    fetchMessages();
                } else {
                    console.error('Respuesta incorrecta o indefinida:', response);
                }
            } catch (error) {
                console.error('Error al enviar el mensaje:', error);
            }
        } else {
            console.log('El mensaje no puede estar vacío');
        }
    };

    // Fetch de mensajes al montar el componente
    useEffect(() => {
        if (isAuthenticatedState && channel_id) {
            fetchMessages();
        }
    }, [isAuthenticatedState, channel_id]);

    return (
        <div className="content-channel">
            <aside className="channel-aside">
                <ChannelScreen />
            </aside>
            <div className="chat">
                {isLoading ? (
                    <div>Loading...</div> // Indicador de carga mientras se obtienen los mensajes
                ) : messages.length > 0 ? (
                    messages.map((message, index) => (
                        <div key={index} className="message">
                            <p>{message.content}</p>
                        </div>
                    ))
                ) : (
                    <span>Chat Vacío</span>
                )}
            </div>
            <div className="box-input-teclado">
                <form onSubmit={handleSubmitForm}>
                    <input
                        type="text"
                        name="content"
                        placeholder="Escribe un mensaje..."
                        value={formState.content}
                        onChange={handleChangeInput}
                    />
                    <button type="submit">Enviar</button> {/* El formulario ya maneja el submit */}
                </form>
            </div>
        </div>
    );
};

export default ChannelSelectScreen