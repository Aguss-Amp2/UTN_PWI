import React, { useContext, useEffect, useRef, useState } from "react"
import "./css/global.css"
import "./css/style.css"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useNavigate, useParams } from "react-router-dom"
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
    const { workspace_id } = useParams()
    const navigate = useNavigate()
    const { responseApiState, getListChannel} = useApiRequest(`${ENVIROMENT.URL_API}/api/channels/${workspace_id}`)

    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isAsideVisible, setIsAsideVisible] = useState(false);

    const messagesEndRef = useRef(null);

    // Función para mostrar el último mensaje
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleAsideVisibility = () => {
        setIsAsideVisible(!isAsideVisible);
    }

    const fetchMessages = async () => {
        try {
            setIsLoading(true);
            const response = await getListMessages();
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

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        if (formState.content.trim()) {
            try {
                const response = await postJwtRequest({ content: formState.content }, token);

                if (response && response.ok && response.data) {
                    const newMessage = response.data.new_message;
                    console.log('Nuevo mensaje recibido:', newMessage);

                    setMessages((prevMessages) => [newMessage, ...prevMessages]);

                    handleChangeInput({ target: { name: 'content', value: '' } });

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

    useEffect(() => {
        if (isAuthenticatedState && channel_id) {
            fetchMessages();
        }
    }, [isAuthenticatedState, channel_id]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isAuthenticatedState && workspace_id) {
            getListChannel()
        } else {
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
            <aside className="aside-princ">
                <span>s</span>
            </aside>
            <div className="channel-aside">
            <button className="canales-mostrar" onClick={toggleAsideVisibility}>
                {isAsideVisible ? 'Canales' : 'Canales'}
            </button>

            {isAsideVisible && (
                <div>
                    <ul>
                        {responseApiState && responseApiState.data && responseApiState.data.length > 0 ? (
                            responseApiState.data.map((channel, index) => (
                                <button key={index} className="canales-mostrar" onClick={() => handleClickWorkspace(workspace_id, channel._id)}># {channel.name}</button>
                            ))
                        ) : (
                            ""
                        )}
                    </ul>
                </div>
            )}
            </div>
            <div className="chat messages-container">
                {isLoading ? (
                    <div>Cargando...</div>
                ) : messages.length > 0 ? (
                    messages.map((message, index) => (
                        <div key={index} className="message">
                            <p> <span className="span-messages-name">{message.sender.username || 'Usuario Desconocido'} : <br></br></span>{message.content}</p>
                        </div>
                    ))
                ) : (
                    <span>Chat Vacío</span>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="box-input-teclado">
                <form className="cont-teclado-env" onSubmit={handleSubmitForm}>
                    <input
                        type="text"
                        name="content"
                        placeholder="Escribe un mensaje..."
                        value={formState.content}
                        onChange={handleChangeInput}
                    />
                    <button type="submit" className="btn-env-chat">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default ChannelSelectScreen