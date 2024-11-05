import React from "react"
import './style.css'
import { MdChat, MdOutlineGroups } from "react-icons/md";
import { SiCircle } from "react-icons/si";
import { RiChatVoiceLine, RiChatFollowUpLine } from "react-icons/ri";
import { IoSettingsOutline, IoSearchOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { BsCheckAll, BsFillCameraVideoFill } from "react-icons/bs";
import { PiClockCountdownBold, PiSmileyBold } from "react-icons/pi";
import { GoPlus } from "react-icons/go";
import { FaMicrophone } from "react-icons/fa";

function App() {
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
        <Chats
          avatar={'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1QMU4D-ee680d421008-48'}
          nombre={'Agustin Amposta'}
          ultMensj={'Q ondaa'}
          mensajes={'8'}
          hora={'19:57'}
          statusMsj={'true'}
        />
        <Chats
          avatar={'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ELATQ5DL-g4b35bd68d0e-48'}
          nombre={'Caro'}
          ultMensj={'Buendia!!'}
          mensajes={'16'}
          hora={'22:17'}
          statusMsj={'true'}
        />
        <Chats
          avatar={'https://ca.slack-edge.com/T07EJ2FLZ2R-U07G99UV5SQ-5a07fbca69e1-48'}
          nombre={'Nicoo'}
          ultMensj={'Como estas?'}
          mensajes={'2'}
          hora={'8:22'}
          statusMsj={'true'}
        />
        <Chats
          avatar={'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1URUJ1-384421a19e45-192'}
          nombre={'Laburo'}
          ultMensj={''}
          mensajes={''}
          hora={'00:00'}
          statusMsj={'false'}
        />
        <Chats
          avatar={'https://ca.slack-edge.com/T07EJ2FLZ2R-U07ELATQ5DL-g4b35bd68d0e-48'}
          nombre={'Martin'}
          ultMensj={''}
          mensajes={''}
          hora={'15:42'}
          statusMsj={'false'}
        />
      </header>
      <div className="fondo-chat">
        <div className="header-chat">
          <div>
            <ImgPerfil 
              avatar={'https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1QMU4D-ee680d421008-48'}
              nombre={'Agustin Amposta'}
              emisor={'Tu'}
            />
          </div>
          <div className="contenedor-header-chat">
            <div className="top-left-chat">
              <BsFillCameraVideoFill className="icon-chat-top-left"/>
              <IoIosArrowDown className="icon-chat-top-flecha"/>
            </div>
            <IoSearchOutline className="icon-chat-top lupa"/>
            <SlOptionsVertical className="icon-chat-top"/>
          </div>
        </div>
        <MessajeList
          hora={'22:10'}
          texto={'Hola, como estas?'}
          id={'1'}
          status={'visto'}
          emisor={'yo'}
        />
        <MessajeList
          hora={'22:12'}
          texto={'Bien y vos?'}
          id={'2'}
          status={'no_visto'}
          emisor={'tu'}
        />
        <MessajeList
          hora={'22:12'}
          texto={'Te llego?'}
          id={'3'}
          status={'no_enviado'}
          emisor={'tu'}
        />
        <MessajeList
          hora={'22:10'}
          texto={'como estuvo la semana, nose porque no me llegan tus msj si es q me hablaste. Bueno como te decia espero poder verte en la semana si no hay problema'}
          id={'4'}
          status={'no_enviado'}
          emisor={'yo'}
        />
        <div className="chat-teclado">
          <div className="teclado-cont-icon">
            <PiSmileyBold className="icon-teclado-smile"/>
            <GoPlus className="icon-teclado-plus"/>
          </div>
          <div className="teclado">
            <span>Ecribe un mensaje</span>
          </div>
          <div className="microfono-teclado">
            <FaMicrophone className="icon-teclado-micro"/>
          </div>
        </div>
      </div>
    </div>
  )
}

const Chats = ({avatar, nombre, ultMensj, mensajes, hora, statusMsj}) =>{
  let mensj = statusMsj === 'false'
  return(
    <div className="container-msj">
      <div className="cont-photo">
        <img src={avatar} alt={nombre}/>
      </div>
      <div className="cont-name">
        <span className="name">{nombre}</span>
        <span className="ult-msj">{ultMensj}</span>
      </div>
      <div className="cont-hora-msj">
        <span className={`${mensj ? 'hora-false' : 'hora'}`}>{hora}</span>
        <span className={`${mensj ? 'no-msj' : 'msj' }`}>{mensajes}</span>
      </div>
      <div className="cont-flecha">
        <IoIosArrowDown className="flecha-msj"/>
      </div>
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

const ImgPerfil = ({avatar, nombre, emisor}) =>{
  return(
    <div className="Nombre-perfil-Chat">
      <img src={avatar} className="chat-perfil-foto"/>
      <div className="chat-perfil-text">
        <span className="chat-text-name">{nombre}</span>
        <span className="chat-text-emi">{emisor}</span>
      </div>
    </div>
  )
}

export default App