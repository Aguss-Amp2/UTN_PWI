import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/AuthContext.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import { useApiRequest } from "../hooks/useApiRequest.jsx"

const ProfileScreen = ({ handleClose }) => {
    const { isAuthenticatedState } = useContext(AuthContext);
    const email = isAuthenticatedState ? sessionStorage.getItem('email') : '';
    const { responseApiState, getRequest } = useApiRequest(ENVIROMENT.URL_API + `/api/workspaces/${email}/profile`)
    const [profileData, setProfileData] = useState({ username: "Cargando...", email })

    useEffect(() => {
        const token = sessionStorage.getItem("authorization_token")
        if (isAuthenticatedState && email && token) {
            getRequest(token)
        }
    }, [isAuthenticatedState])

    useEffect(() => {
        if (responseApiState.data) {
            setProfileData(prevState => ({
                ...prevState, // Mantiene el email actual
                username: responseApiState.data.username || "Usuario desconocido"
            }))
        }
    }, [responseApiState])

    return (
        <div className="profile-overlay">
            <div className="profile-cont">
                <div>
                    <i className="profile bi-person-square"></i>
                    <div className="cont-x" onClick={handleClose}>
                        <i className="bi-x-lg"></i>
                    </div>
                </div>
                <h2 className="username-profile">Perfil: {profileData.username}</h2>
                <div className="cont-disp">
                    <i className="bi-circle-fill"></i>
                    <h3>Disponible</h3>
                </div>
                <div className="cont-email-profile">
                    <div className="cont-email-profile-i">
                        <i className="email-profile bi-envelope-at-fill"></i>
                    </div>
                    <div className="cont-email-text">
                        <span className="span-profile">Dirección de Correo:</span>
                        <span className="span-mail">{profileData.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen