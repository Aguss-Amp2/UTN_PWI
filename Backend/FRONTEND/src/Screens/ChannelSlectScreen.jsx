import React, { useContext, useEffect, useRef, useState } from "react"
import './css/mediaScrenn.css'
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useNavigate, useParams } from "react-router-dom"
import { useForm } from "../hooks/useForm.jsx"
import { AuthContext } from "../Context/AuthContext.jsx"
import ProfileScreen from "./ProfileScreen.jsx"

const ChannelSelectScreen = () => {
    const initialFormState = {
        content: ''
    }
    const { channel_id, workspace_id } = useParams()
    const { isAuthenticatedState} = useContext(AuthContext)
    const {formState, handleChangeInput} = useForm(initialFormState)
    const { postJwtRequest, getListMessages} = useApiRequest(ENVIROMENT.URL_API + `/api/channels/${channel_id}/messages`)
    const { responseApiState, getListChannel} = useApiRequest(`${ENVIROMENT.URL_API}/api/channels/${workspace_id}`)
    const {fetchWorkspaceName } = useApiRequest(ENVIROMENT.URL_API + `/api/workspaces/${workspace_id}/channel`)

    const token = sessionStorage.getItem('authorization_token')
    const navigate = useNavigate()

    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isAsideVisible, setIsAsideVisible] = useState(true)
    const [isAsideVisible2, setIsAsideVisible2] = useState(true)
    const messagesEndRef = useRef(null)
    const [selectedChannel, setSelectedChannel] = useState(channel_id)
    const [workspaceName, setWorkspaceName] = useState("")
    const [workspaceMembers, setChannelMembers] = useState([])
    
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    };

    const toggleAsideVisibility = () => {
        setIsAsideVisible(!isAsideVisible)
    }

    const toggleAsideVisibility2 = () => {
        setIsAsideVisible2(!isAsideVisible2)
    }

    const fetchMessages = async () => {
        try {
            setIsLoading(true);
            const response = await getListMessages()
            if (response && response.ok && response.data) {
                setMessages(response.data.messages);
            } else {
                console.error('Error al obtener los mensajes:', response)
                alert('No se pudieron obtener los mensajes')
            }
        } catch (error) {
            console.error('Error al obtener los mensajes:', error)
            alert(`Error al obtener los mensajes: ${error.message}`)
        } finally {
            setIsLoading(false)
        }
    };

    const fetchChannelMembers = async () => {
        try {
            const response = await fetch(`${ENVIROMENT.URL_API}/api/workspaces/${workspace_id}/members`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            const data = await response.json()
            if (data && data.members) {
                setChannelMembers(data.members)
            } else {
                console.error('No se pudieron obtener los miembros del canal')
            }
        } catch (error) {
            console.error('Error al obtener los miembros:', error)
        }
    }

    const handleSubmitForm = async (event) => {
        event.preventDefault()

        if (formState.content.trim()) {
            try {
                const response = await postJwtRequest({ content: formState.content }, token)

                if (response && response.ok && response.data) {
                    const newMessage = response.data.new_message

                    setMessages((prevMessages) => [newMessage, ...prevMessages])

                    handleChangeInput({ target: { name: 'content', value: '' } })

                    fetchMessages();
                } else {
                    console.error('Respuesta incorrecta o indefinida:', response)
                }
            } catch (error) {
                console.error('Error al enviar el mensaje:', error)
            }
        } else {
            console.log('El mensaje no puede estar vacío')
        }
    }

    useEffect(() => {
        if (isAuthenticatedState && channel_id && workspace_id) {
            fetchMessages();
            fetchChannelMembers();
        }
    }, [isAuthenticatedState, channel_id, workspace_id])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleWorks = () => {
        navigate('/workspaces')
    }

    const handleLogin = () => {
        navigate('/')
    }

    const [showProfile, setShowProfile] = useState(false)

    const handleProfile = () => {
        setShowProfile(prevState => !prevState)
    }

    const handleCanales = (workspace_id) => {
        if (workspace_id) {
            navigate(`/${workspace_id}`)
        } else {
            console.log("workspace_id es undefined")
        }
    }

    useEffect(() => {
        if (isAuthenticatedState && workspace_id) {
            getListChannel()
        } else {
            console.log('Workspace ID is undefined')
        }
    }, [isAuthenticatedState, workspace_id])

    const handleClickWorkspace = (workspace_id, channelId) => {
        if (workspace_id && channelId) {
            setSelectedChannel(channelId)
            navigate(`/workspace/${workspace_id}/channel/${channelId}`)
        } else {
            console.log('Workspace or Channel ID is undefined')
        }
    }

    useEffect(() => {
        if (workspace_id) {
            fetchWorkspaceName().then((name) => {
                if (name) {
                    setWorkspaceName(name)
                } else {
                    console.error("No se pudo obtener el nombre del workspace")
                }
            });
        }
    }, [workspace_id])

    return (
        <div className="content-channel">
            <aside className="aside-princ">
                <div className="icons-div">
                    <div className="icons-top">
                        <div className="icon-text">
                            <button className="btn-inicio bi" onClick={handleWorks}><i className="bi-house"></i></button>
                            <span>Works</span>
                        </div>
                        <div className="icon-text">
                            <button className="btn-inicio bi" onClick={() => handleCanales(workspace_id)}><i className="bi-chat"></i></button>
                            <span>Canales</span>
                        </div>
                        <div className="icon-text">
                            <button className="btn-inicio bi" onClick={handleLogin}><i className="bi-door-open"></i></button>
                            <span>Inicio</span>
                        </div>
                        <div className="icon-text">
                            <i className="bi bi-three-dots"></i>
                            <span>Mas</span>
                        </div>
                    </div>
                    <div className="icon-text icon-text-2">
                        <button className="btn-perfil bi" onClick={handleProfile}><i className="bi-person-circle"></i></button>
                        <span>Perfil</span>
                        {showProfile && <ProfileScreen handleClose={() => setShowProfile(false)} />}
                    </div>
                </div>
            </aside>
            <div className="channel-aside">
                <h1 className="h1-work-channel">Workspaces: {workspaceName}</h1>
                <button className="canales-mostrar" onClick={toggleAsideVisibility}>
                    Canales <i className={`${isAsideVisible ? "bi-arrow-up" : "bi-arrow-down"}`}></i>
                </button>

                {isAsideVisible && (
                    <div>
                        <ul className="channels-ul">
                            {responseApiState && responseApiState.data && responseApiState.data.length > 0 ? (
                                responseApiState.data.map((channel, index) => (
                                    <button key={index} className={`canales-mostrar ${selectedChannel === channel._id ? 'mostrar-hover' : ''}`} onClick={() => handleClickWorkspace(workspace_id, channel._id)}># {channel.name}</button>
                                ))
                            ) : (
                                ""
                            )}
                        </ul>
                    </div>
                )}

                <button className="canales-mostrar" onClick={toggleAsideVisibility2}>
                    Usuarios <i className={`${isAsideVisible2 ? "bi-arrow-up" : "bi-arrow-down"}`}></i>
                </button>
                {isAsideVisible2 && (
                    <div>
                        {workspaceMembers.length > 0 ? (
                            <ul className="channels-members">
                                {workspaceMembers.map((member, index) => (
                                    <p key={index} className="users-members">
                                        <i className="bi-person-fill"></i>{member.username}
                                    </p>
                                ))}
                            </ul>
                        ) : (
                            ""
                        )}
                    </div>
                )}
            </div>
            <div className="chat messages-container">
                {isLoading ? (
                    ""
                ) : messages.length > 0 ? (
                    messages.map((message, index) => (
                        <div key={index} className="message">
                            <p> <span className="span-messages-name">{message.sender.username || 'Usuario Desconocido'} : <br></br></span>{message.content}</p>
                        </div>
                    ))
                ) : (
                    <span className="chat-vacio">Inicia la Conversacion...</span>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="box-input-teclado">
                <form className="cont-teclado-env box" onSubmit={handleSubmitForm}>
                    <div className="cont-icons-teclado">
                        <div>
                            <i className="bi-alphabet icon-tec"></i>
                            <i className="bi-code-slash icon-tec"></i>
                            <i className="bi-text-paragraph icon-tec"></i>
                            <i className="bi-dash-lg line"></i>
                            <i className="bi-copy icon-tec"></i>
                            <i className="bi-list-check icon-tec"></i>
                            <i className="bi-list-ol icon-tec"></i>
                        </div>
                    </div>
                    <div className="text-btn">
                        <textarea
                        className="textarea"
                            type="text"
                            name="content"
                            placeholder="Escribe un mensaje..."
                            value={formState.content}
                            onChange={handleChangeInput}
                        ></textarea>
                        <button type="submit" className="btn-env-chat"><i className="bi-caret-right-fill"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChannelSelectScreen