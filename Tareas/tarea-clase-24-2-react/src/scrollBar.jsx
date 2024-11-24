import React, { useEffect, useRef } from "react"
import { MensajesGuardados } from "./Chats";
import { NewMessage } from "./WhatsApp";


const chatContScroll = ({mensajesGuardados , mensajesEnviados}) => {
    const contenedorRef = useRef(null);

    // Desplazar hacia abajo cada vez que se agregan nuevos mensajes
    useEffect(() => {
        if (contenedorRef.current) {
            contenedorRef.current.scrollTop = contenedorRef.current.scrollHeight;
        }
    }, [mensajesGuardados, mensajesEnviados]);  // Dependencia para los mensajes

    return (
        <div
            ref={contenedorRef}
            className="contenedor-msj"
        >
            {/* Mensajes guardados */}
            <div>
                <MensajesGuardados mensajes={mensajesGuardados} />
            </div>

            {/* Mensajes nuevos */}
            <div>
                <NewMessage msm={mensajesEnviados} />
            </div>
        </div>
    )
}

export default chatContScroll