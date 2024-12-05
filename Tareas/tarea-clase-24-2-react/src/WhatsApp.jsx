import React from "react"
import './style.css'
import { MdChat, MdOutlineGroups } from "react-icons/md";
import { SiCircle } from "react-icons/si";
import { RiChatVoiceLine, RiChatFollowUpLine } from "react-icons/ri";
import { IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheckAll, BsFillCameraVideoFill } from "react-icons/bs";
import { PiClockCountdownBold } from "react-icons/pi";
import ChatsList, { MensajesGuardados } from "./Chats";
import TextArea from "./formMensaje";
import Perfil from "./ImgPerfil";


function WhatsApp() {
  return (
    <div className="padre">
      <aside className="aside-container">
        <div className="top-aside">
          <button className="caja-icon"><MdChat className="icon"/></button>
          <button className="caja-icon"><SiCircle className="icon"/></button>
          <button className="caja-icon"><RiChatVoiceLine className="icon"/></button>
          <button className="caja-icon"><MdOutlineGroups className="icon"/></button>
        </div>
        <div className="bottom-aside">
          <button className="caja-icon"><IoSettingsOutline className="icon"/></button>
          <button><img src="https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1QMU4D-ee680d421008-48" alt="Foto Perfil" className="img-perfil"/></button>
        </div>
      </aside>
      <header className="header-container">
        <div className="container-top">
          <h2 className="title-text">Chats</h2>
          <div className="container-top-button">
            <button className="caja-icon"><RiChatFollowUpLine className="icon"/></button>
            <button className="caja-icon"><SlOptionsVertical className="icon-option"/></button>
          </div>
        </div>
        <div className="container-search">
          <IoSearchOutline />
          <span>Buscar</span>
        </div>
        <nav className="container-nav">
          <ul className="cont-ul">
            <li className="caja-li-b li-select">Todos</li>
            <li className="caja-li">No Leidos</li>
            <li className="caja-li">Favoritos</li>
            <li className="caja-li-b caja-g">Grupos</li>
          </ul>
        </nav>
        <ChatsList/>
      </header>
      <section className="mensagges-secction fondo-chat">
        <div className="header-chat">
          <Perfil/>
          <div className="contenedor-header-chat">
            <div className="top-left-chat">
              <BsFillCameraVideoFill className="icon-chat-top-left"/>
              <IoIosArrowDown className="icon-chat-top-flecha"/>
            </div>
            <IoSearchOutline className="icon-chat-top lupa"/>
            <SlOptionsVertical className="icon-chat-top"/>
          </div>
        </div>
        <div className="contenedor-msj">
          <div className="separacion-teclado">
            <MensajesGuardados/>
            <TextArea/>
          </div>
        </div>
      </section>
    </div>
  )
}

const MessajeList = ({hora, texto, status, emisor}) => {
  const visto = status === 'visto'
  const no_enviado = status === 'no_enviado'
  const msj = emisor === 'tu'

  return(
    <div className = "MensajeList">
      {msj ? 
        <div div className = "cont-Mensaje tu" >
          <div className="cont-txt-msj">
            <span className="texto">{emisor}:</span>
            <span className="Mensaje">{texto}</span>
          </div>
          <div className="cont-h-sts">
            <span className="texto">{hora}</span>
            {visto ? <span className="texto check check_visto"><BsCheckAll /></span>
              : no_enviado ? <span className="texto check-env"><PiClockCountdownBold /></span> : <span className="texto check"><BsCheckAll /></span>
            }
          </div>
        </div >
        :
        <div className="cont-Mensaje yo">
          <div className="cont-txt-msj">
            <span className="texto">{emisor}:</span>
            <span className="Mensaje">{texto}</span>
          </div>
          <div className="cont-h-sts">
            <span className="texto">{hora}</span>
            {visto ? <span className="texto check check_visto"><BsCheckAll /></span>
              : no_enviado ? <span className="texto check-env"><PiClockCountdownBold /></span> : <span className="texto check"><BsCheckAll /></span>
            }
          </div>
        </div>
      }
    </div > 
  )
}

export default WhatsApp
export {MessajeList}