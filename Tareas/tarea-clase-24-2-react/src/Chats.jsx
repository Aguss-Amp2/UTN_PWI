import React, { useEffect, useRef } from "react"
import "./style.css"
import { IoIosArrowDown } from "react-icons/io"
import { Link, useParams } from "react-router-dom"
import contacts from "./Mensajes_List/contacts"
import { MessajeList } from "./WhatsApp"

const ChatsList = () => {
    return(
        <div>
            <div>
                {
                    contacts.map((contact) => {
                        return (
                            <Link key={contact.id} to={`/home/` + contact.id} >
                                <Chats 
                                    nombre={contact.nombre} 
                                    avatar={contact.avatar}
                                    ultMensj={contact.ultMensj}
                                    hora={contact.hora}
                                    statusMsj={contact.statusMsj}
                                    mensajes={contact.mensajes}/>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

const MensajesGuardados = () => {
    const {contact_id} =  useParams()
    const contact_found = contacts.find(contact => contact.id == contact_id)
    
    // Referencia para el contenedor de mensajes
    const messagesContRef = useRef(null);

    // Desplazar hacia abajo cada vez que cambian los mensajes
    useEffect(() => {
        // Verifica si la referencia está definida antes de intentar desplazar
        if (messagesContRef.current) {
            messagesContRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [contact_found?.mensajes_list])  // Se ejecuta cuando los mensajes cambian

    return (
        <div>
            {contact_found && (
                <div ref={messagesContRef} className="">
                    {contact_found.mensajes_list?.map(mensaje => (
                        <div key={mensaje.id}>
                            <MessajeList
                                hora={mensaje.hora}
                                emisor={mensaje.emisor}
                                status={mensaje.status}
                                texto={mensaje.texto}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const Chats = ({ avatar, nombre, ultMensj, mensajes, hora, statusMsj }) => {
    let mensj = statusMsj === 'false'
    return (
        <div className="container-msj">
            <div className="cont-photo">
                <img src={avatar} alt={nombre} />
            </div>
            <div className="cont-name">
                <span className="name">{nombre}</span>
                <span className="ult-msj">{ultMensj}</span>
            </div>
            <div className="cont-hora-msj">
                <span className={`${mensj ? 'hora-false' : 'hora'}`}>{hora}</span>
                <span className={`${mensj ? 'no-msj' : 'msj'}`}>{mensajes}</span>
            </div>
            <div className="cont-flecha">
                <IoIosArrowDown className="flecha-msj" />
            </div>
        </div>
    )
}

export default ChatsList
export {MensajesGuardados}