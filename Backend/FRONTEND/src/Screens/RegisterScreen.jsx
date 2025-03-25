import React, { useEffect, useState } from "react"
import './css/mediaScrenn.css'
import { ENVIROMENT } from "../config/enviroment.js"
import { useForm } from "../hooks/useForm.jsx"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { useNavigate } from "react-router-dom"

const RegisterScreen = () => {
    const formInitialState = {
        username: '',
        email: '',
        password: ''
    }
    const navigate = useNavigate()
    const {formState, handleChangeInput} = useForm(formInitialState)
    const {responseApiState, postRequest} = useApiRequest(ENVIROMENT.URL_API + '/api/auth/register')

    const [isLoading, setIsLoading] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)

    useEffect(() => {
        if (isLoading) {
            setShowSpinner(true);
            // Después de 2 segundos, ocultamos el spinner
            const timer = setTimeout(() => {
                setShowSpinner(false)
            }, 2000);

            return () => clearTimeout(timer)// Limpiar el timer si el componente se desmonta o se vuelve a ejecutar
        }
    }, [isLoading])

    const handleLogin = () => {
        navigate('/login')
    }

    const handleSumbitForm = async (event) => {
        event.preventDefault()
        setIsLoading(true)

        await new Promise(resolve => setTimeout(resolve, 2000))
        await postRequest(formState)
        setIsLoading(false)
    }

    return (
        <div className="father">
            <div className="content">
                <h1>Registrate</h1>
                <form onSubmit={handleSumbitForm} className="options form">
                    <div>
                        <label htmlFor="username" className="label-login-email-password">Usuario :</label>
                        <input
                        className="screnns" 
                        placeholder="Joe Doe" 
                        type="text" 
                        id="username" 
                        name="username"
                        value={formState.username} 
                        onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="label-login-email-password">Email :</label>
                        <input
                        className="screnns" 
                        placeholder="JoeDoe@gmail.com" 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formState.email} 
                        onChange={handleChangeInput}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="label-login-email-password">Contraseña :</label>
                        <input
                        className="screnns"
                        placeholder="Joe1234" 
                        type="password" 
                        id="password" 
                        name="password"
                        value={formState.password} 
                        onChange={handleChangeInput}/>
                    </div>
                    {
                        responseApiState.error 
                        && <span style={{color: 'red'}}>{responseApiState.error}</span>
                    }
                    {
                        responseApiState.loading || isLoading
                        ?   <div className="spinner" role="status" aria-label="Cargando" aria-live="polite">
                                <span className="visually-hidden"></span>
                            </div>
                        : <button type="submit" onClick={handleLogin}>Registrar</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen